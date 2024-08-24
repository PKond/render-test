import jsonServer from 'json-server';
import express from 'express';

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, cors, etc.)
app.use(middlewares);

// Add /api prefix to all routes
app.use('/api', router);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
