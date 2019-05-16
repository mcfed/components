const { spawn } = require('child_process');

const defaults = {
    cwd: undefined,
    env: process.env,
    stdio: 'inherit',
    shell: process.platform === 'win32'
  };
  
const ls = spawn('yarn' ,['start-storybook', '-p', '6006'], defaults);

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

ls.on('error', (code) => {
    console.log(`child process exited with code ${code}`);
  });