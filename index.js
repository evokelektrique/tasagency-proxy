
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require("morgan");

const app = express();
app.use(morgan('combined'));
app.use('/graphql', createProxyMiddleware({ target: 'https://admin.tasagency.net', changeOrigin: true }));
app.listen(3000);
