import { getFutureDate } from "../tests/utils/get-future0date";
import { Appointment } from "./appointment";

describe("Appointment", () => {
  it("should create an appointment", () => {
    const startsAt = getFutureDate("2022-09-10");
    const endsAt = getFutureDate("2022-09-11");

    const appointment = new Appointment({
      customer: "Jonh Doe",
      startsAt,
      endsAt,
    });

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toBe("Jonh Doe");
  });

  it("should cannot create an appointment with end date begore start date ", () => {
    const startsAt = getFutureDate("2022-09-09");
    const endsAt = getFutureDate("2022-09-08");

    endsAt.setDate(endsAt.getDate() - 1);

    expect(() => {
      return new Appointment({
        customer: "Jonh Doe",
        startsAt,
        endsAt,
      });
    }).toThrow();
  });

  it("should cannot create an appointment with start date begore now", () => {
    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() - 1);
    endsAt.setDate(endsAt.getDate() + 3);

    expect(() => {
      return new Appointment({
        customer: "Jonh Doe",
        startsAt,
        endsAt,
      });
    }).toThrow();
  });
});
