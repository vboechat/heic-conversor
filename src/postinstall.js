const { execSync } = require('child_process');
const { platform, arch } = require('os');

const platformFunction = platform();
const archFunction = arch();

const lookupTable = {
  'win32-x64': 'npm install --os=win32 --cpu=x64 sharp',
  'linux-x64': 'npm install --os=linux --cpu=x64 sharp',
  'darwin-x64': 'npm install --os=darwin --cpu=x64 sharp'
};

const key = `${platformFunction}-${archFunction}`;
const command = lookupTable[key] || 'npm install sharp';

try {
  execSync(command, { stdio: 'inherit' });
  console.log('Sharp successfully installed.');
} catch (error) {
  console.error('Error while installing Sharp:', error);
}
