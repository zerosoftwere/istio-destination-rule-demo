const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');
const os = require('os');

const VERSION = process.env.VERSION || '0.0.1';
const PORT = process.env.PORT || 3000;

const application = express();
application.use(morgan('combined'));
application.use(cors());

application.get('', (req, res) => {
    res.json(`version ${VERSION} on host ${os.hostname}`);
});

http.createServer(application)
    .listen(PORT, () => console.log(`server running on port ${PORT}`));
