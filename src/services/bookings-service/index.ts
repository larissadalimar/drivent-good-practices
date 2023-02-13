import { notFoundError } from "@/errors";
import { Booking } from "@prisma/client";
import bookingRepository from "@/repositories/booking-repository";

async function getUserBooking(userId: number): Promise<Booking> {
  const booking = await bookingRepository.getUserBooking(userId);

  if(!booking) throw notFoundError();
  else return booking;
}

const bookingService = {
  getUserBooking
};

export default bookingService;
