const fs = require('fs');
const zlib = require('zlib');

const r = fs.createReadStream('data.json');
const z = zlib.createGzip();
const w = fs.createWriteStream('data.json.gz');
r.pipe(z).pipe(w);