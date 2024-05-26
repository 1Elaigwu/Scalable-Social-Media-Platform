const express = require('express');
const bodyParser = require('body-parser');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
const PORT = process.env.PORT || 5003;

app.use(bodyParser.json());
app.use('/notifications', notificationRoutes);

app.listen(PORT, () => {
  console.log(`Notifications microservice running on port ${PORT}`);
});
