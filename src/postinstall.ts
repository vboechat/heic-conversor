import { execSync } from 'child_process';
import { platform as _platform, arch as _arch } from 'os';
import { handleError } from './lib/error-handler';

const platform = _platform();
const arch = _arch();

const lookupTable: { [key: string]: string } = {
  'win32-x64': 'npm install --os=win32 --cpu=x64 sharp',
  'linux-x64': 'npm install --os=linux --cpu=x64 sharp',
  'darwin-x64': 'npm install --os=darwin --cpu=x64 sharp'
};

const key = `${platform}-${arch}`;
const command = lookupTable[key] || 'npm install sharp';

handleError(() => {
  execSync(command, { stdio: 'inherit' });
  console.log('Sharp successfully installed.');
});
