
const app = require('express')();
const port = 3000;
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test');
const bodyParser = require('body-parser');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('conected!!!!!!!');
  // we're connected!
});


process.on('unhandledRejection', (reason, p) => {
  console.log(`Possible unhandles rejection ${reason}, ${p}`)
});
app.use(bodyParser.json());

app.use(`/`, require('./routes'));


app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
