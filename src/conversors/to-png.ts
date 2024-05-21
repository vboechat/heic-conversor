import sharp from "sharp";
import { handleError } from "../lib/error-handler";

export const convertHeicToPng = (inputPath: string, outputPath: string) => {
  return handleError(async () => {
    await sharp(inputPath)
      .png({ quality: 100, compressionLevel: 0 })
      .toFile(outputPath);
  });
};
