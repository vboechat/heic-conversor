#!/usr/bin/env node

import { Command } from 'commander';
import { convertImagesInFolder } from './conversors/conversor';
import { getPackageVersion } from './lib/versioning';

const program = new Command();

program
  .version(getPackageVersion())
  .description('Convert HEIC images to PNG or JPG')
  .requiredOption('-f, --format <type>', 'Output format (png or jpg)')
  .requiredOption('-p, --path <folder>', 'Path to the folder containing HEIC images')
  .action((options) => {
    const { format, path: folderPath } = options;

    convertImagesInFolder(folderPath, format)
      .then(() => console.log('Conversion complete'))
      .catch(error => console.error('Error during conversion:', error));
  });

program.parse(process.argv);
