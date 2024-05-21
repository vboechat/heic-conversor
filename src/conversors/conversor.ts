import { readdirSync } from "fs";
import { extname } from "path";
import { convertImage } from "./convert-image";

export const convertImagesInFolder = async (folderPath: string, outputFormat: string = 'png') => {
  const files = readdirSync(folderPath);
  const isHeicFile = (file: string) => extname(file).toLowerCase() === '.heic';
  const heicFiles = files.filter(isHeicFile);

  const conversionPromises = heicFiles.map(file => convertImage(file, folderPath, outputFormat));

  await Promise.all(conversionPromises);
};
