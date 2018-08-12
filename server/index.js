const express = require('express');
const path = require('path');
const app = express();
let distFolder = '../dist';

if (typeof app.get('env') !== 'undefined' && app.get('env') !== 'development') {
  distFolder = `../dist-${ app.get('env') }`;
}

const distPath = path.join(__dirname, distFolder);

console.log(distFolder); //eslint-disable-line

app.use(express.static(distPath));

app.get('/health', (req, res) => {
  res.json({
    data: 'Podcaster Running'
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(3001, () => {
  console.log('Server running...'); //eslint-disable-line
});