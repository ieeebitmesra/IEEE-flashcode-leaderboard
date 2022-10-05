const express = require("express");

const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const createHttpError = require("http-errors");
const xssClean = require("xss-clean");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(helmet());
app.use(compression());
app.use(morgan("dev"));
app.use(xssClean());

const sheduleFetcher = require("./fetcher.js");
const CacheFactory = require("./cache");

let cache;
app.get("/", async (req, res) => {
  const pageNo = Number(req.query.page || 1);
  const userName = req.query.user;
  const result = {};

  result.numberOfPages = await cache.get("numberOfPages");
  result.page = [];
  result.user = null;
  if (1 <= pageNo && pageNo <= result.numberOfPages) {
    result.page = await cache.get(`pages:${pageNo}`);
  }

  if (userName) {
    result.user = await cache.get(`users:${userName}`);
  }

  res.status(200).json(result);
});

// 404 handler
app.use((req, res, next) => {
  next(createHttpError(404, "route not found"));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const response = {
    message: err.message,
  };

  res.status(err.status || 500);
  res.json(response);
});

(async function start() {
  cache = await CacheFactory();
  await cache.clear();
  await cache.save("numberOfPages", 0);
  await sheduleFetcher();

  const port = process.env.PORT || 8080;
  app.listen(port, async () => {
    console.log(`Listening to port ${port}`);
  });
})();
