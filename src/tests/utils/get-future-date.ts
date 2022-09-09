import { setYear, parseISO } from "date-fns";

export const getFutureDate = (date: string) =>
  setYear(parseISO(date), new Date().getFullYear() + 1);
