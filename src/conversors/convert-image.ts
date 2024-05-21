import { join, basename, extname } from 'path';
import { convertHeicToPng } from './to-png';
import { convertHeicToJpg } from './to-jpg';
import { handleError } from '../lib/error-handler';

export const convertImage = (file: string, folderPath: string, outputFormat: string) => {
  const extension = extname(file).toLowerCase();
  if (extension !== '.heic') return;

  const inputPath = join(folderPath, file);
  const outputFilename = `${basename(file, extension)}.${outputFormat}`;
  const outputPath = join(folderPath, outputFilename);

  const conversionFunction = {
    'png': convertHeicToPng,
    'jpg': convertHeicToJpg,
    'jpeg': convertHeicToJpg
  }[outputFormat];

  if (!conversionFunction) {
    console.log(`Unsupported format: ${outputFormat}`);
    return;
  }

  return handleError(async () => {
    await conversionFunction(inputPath, outputPath);
    console.log(`Converted ${file} to ${outputFilename}`);
  });
};
