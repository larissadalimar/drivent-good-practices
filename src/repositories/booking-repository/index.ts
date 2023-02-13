import { prisma } from "@/config";
import { Booking } from "@prisma/client";

async function getUserBooking(userId: number): Promise<Booking> {
  return await prisma.booking.findFirst({
    where: { userId: userId },
    include: {
      Room: true
    }
  });
}

const bookingRepository = {
  getUserBooking
};

export default bookingRepository;
