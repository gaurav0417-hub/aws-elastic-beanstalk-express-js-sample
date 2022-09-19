const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hey there I am adding Manual approval action in the pipeline execution to stop so someone can manually approve or reject the action.  '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
