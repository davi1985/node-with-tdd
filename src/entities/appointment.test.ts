import { Appointment } from "./appointment";

describe("Appointment", () => {
  it("should create an appointment", () => {
    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() + 1);

    const appointment = new Appointment({
      customer: "Jonh Doe",
      startsAt,
      endsAt,
    });

    expect(appointment).toBeInstanceOf(Appointment);
  });

  it("should cannot create an appointment with end date begore start date ", () => {
    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() - 1);

    expect(() => {
      return new Appointment({
        customer: "Jonh Doe",
        startsAt,
        endsAt,
      });
    }).toThrow();
  });
});
