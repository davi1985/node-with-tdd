import { getFutureDate } from "./get-future0date";

test("increases date with on year", () => {
  const year = new Date().getFullYear();

  expect(getFutureDate(`${year}-08-10`).getFullYear()).toBe(year + 1);
});
