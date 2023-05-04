export const addSeconds = (seconds: number) => {
  const currentDate = new Date();
  const futureDate = new Date(currentDate.getTime() + seconds * 1000);
  return futureDate;
};

export const isValidTime = (date: Date) => {
  const currentDate = new Date();
  return date.getTime() > currentDate.getTime();
};
