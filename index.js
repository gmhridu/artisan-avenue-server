const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const ConnectDB = require('./db/db');
const productRouter = require('./routes/product.route');
const categoryRouter = require('./routes/category.route');
const userRouter = require('./routes/user.route');



dotenv.config();

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI;

const app = express();
// middleware
app.use(cors());
app.use(express.json());


// connect mongodb
ConnectDB(mongoUri);

// routes
app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);


app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Page not found'
  });
});


app.listen(port, () => {
  console.log(`SIMPLE CRUD IS RUNNING ON PORT ${port}`);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
})