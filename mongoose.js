const mongoose = require('mongoose');

const Url = require('./models/url');

mongoose.connect(
  'mongodb+srv://yitzhak:nkfh1993@cluster0.5gfr7.mongodb.net/originalurl?retryWrites=true&w=majority')
  .then(() => console.log('Connected to DB'))
  .catch(() => console.log('Connected failed1'))

const createUrl = async (req, res, next) => {
  const createUrl = new Url({
    url: req.body.url
  });
  const result = await createUrl.save();

  res.json({"original_url": result});
};

exports.createUrl = createUrl;