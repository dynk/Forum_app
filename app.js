
const app = require('express')();
const port = 3000;

// Logging unhandled promises rejection
process.on('unhandledRejection', (reason, p) => {
  console.log(`Possible unhandles rejection ${reason}, ${p}`)
});



app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
