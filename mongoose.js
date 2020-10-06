const mongoose = require('mongoose');
const dns = require('dns');

const Url = require('./models/url');

mongoose.connect(
  'mongodb+srv://yitzhak:nkfh1993@cluster0.5gfr7.mongodb.net/originalurl?retryWrites=true&w=majority')
  .then(() => console.log('Connected to DB'))
  .catch(() => console.log('Connected failed1'))

const createUrl = (req, res, next) => {
  const REPLACE_REGEX = /^https?:\/\//i
  const urlFix = req.body.url.replace(REPLACE_REGEX, '');

  dns.lookup(urlFix, async (err) => {
    if (err === null) {
      const createUrl = new Url({
        url: req.body.url
      });

      try {
        await createUrl.save();
      } catch(err) {
        return next(err);
      }
    
      res.json({"original_url": createUrl.url, "short_url": createUrl._id});
    } else {
      res.json({"errore": "invalid URL"})
    }
  });
};

const getUrl = async (req, res, next) => {
  const urlId = req.params.urlId;

  let url;
  try {
    url = await Url.findById(urlId);    
  } catch (err) {
    return next(err);
  }

  if (!url) {
    res.json({"errore": "Url not found"})
  }

  res.redirect(url.url)
}

exports.createUrl = createUrl;
exports.getUrl = getUrl;