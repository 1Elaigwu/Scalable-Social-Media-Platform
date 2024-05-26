const express = require('express');
const bodyParser = require('body-parser');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
const PORT = process.env.PORT || 5002;

app.use(bodyParser.json());
app.use('/comments', commentRoutes);

app.listen(PORT, () => {
  console.log(`Comments microservice running on port ${PORT}`);
});
