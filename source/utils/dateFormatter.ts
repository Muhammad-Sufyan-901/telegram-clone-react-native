export const dateFormatter = (date: Date): string => {
  const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];

  return `${date.getDate()} ${months[date.getMonth()]}`;
};

export const hourFormatter = (date: Date): string => {
  return `${date.getHours()}.${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
};

export const fullDateFormatter = (date: Date): string => {
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
