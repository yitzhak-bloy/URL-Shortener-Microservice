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
        url: urlFix
      });
      const result = await createUrl.save();
    
      res.json({"original_url": result});
    } else {
      res.json({"errore": "invalid URL"})
    }
  });
};

exports.createUrl = createUrl;