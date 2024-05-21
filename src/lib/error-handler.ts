export const handleError = async <T>(func: () => T | Promise<T>): Promise<T | undefined> => {
  try {
    return await Promise.resolve(func());
  } catch (error) {
    console.error('Error:', error);
    return undefined;
  }
};
