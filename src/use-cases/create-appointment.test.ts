import { Appointment } from "../entities/appointment";
import { InMemoryAppointmentsRepository } from "../repositories/in-memory/in-memory-appointments-repository";
import { getFutureDate } from "../tests/utils/get-future-date";
import { CreateAppointment } from "./create-appointment";

describe("Create Appointment", () => {
  it("should be able to create appointment", () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository();
    const sut = new CreateAppointment(appointmentsRepository);

    const startsAt = getFutureDate("2022-09-10");
    const endsAt = getFutureDate("2022-09-11");

    expect(
      sut.execute({
        customer: "Jonh Doe",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });

  it("should be able to create appointment", async () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository();
    const sut = new CreateAppointment(appointmentsRepository);

    const startsAt = getFutureDate("2022-09-10");
    const endsAt = getFutureDate("2022-09-15");

    await sut.execute({
      customer: "Jonh Doe",
      startsAt,
      endsAt,
    });

    expect(
      sut.execute({
        customer: "Jonh Doe",
        startsAt: getFutureDate("2022-09-14"),
        endsAt: getFutureDate("2022-09-16"),
      })
    ).rejects.toThrowError();

    expect(
      sut.execute({
        customer: "Jonh Doe",
        startsAt: getFutureDate("2022-09-09"),
        endsAt: getFutureDate("2022-09-14"),
      })
    ).rejects.toThrowError();

    expect(
      sut.execute({
        customer: "Jonh Doe",
        startsAt: getFutureDate("2022-09-09"),
        endsAt: getFutureDate("2022-09-16"),
      })
    ).rejects.toThrowError();

    expect(
      sut.execute({
        customer: "Jonh Doe",
        startsAt: getFutureDate("2022-09-11"),
        endsAt: getFutureDate("2022-09-12"),
      })
    ).rejects.toThrowError();
  });
});
