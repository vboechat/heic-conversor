import sharp from "sharp";
import { handleError } from "../lib/error-handler";

export const convertHeicToJpg = (inputPath: string, outputPath: string) => {
  return handleError(async () => {
    return await sharp(inputPath)
    .jpeg({ quality: 100 })
    .toFile(outputPath)
});
};
