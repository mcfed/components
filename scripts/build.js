const {spawnSync} = require('child_process');

spawnSync('tsc', ['--noEmit', 'false']);
spawnSync('tsc', ['--noEmit', 'false', '--outDir', './es', '-m', 'ES6']);
