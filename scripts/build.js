const {spawnSync} = require('child_process');
const fs = require('fs-extra');

fs.removeSync('./lib');
fs.removeSync('./es');
spawnSync('ttsc', ['--noEmit', 'false']);
spawnSync('ttsc', ['--build', 'tsconfig.es.json']);
