import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import bookingService from "@/services/bookings-service";

export async function getUserBooking(req: AuthenticatedRequest, res: Response) {
  const userId = req.userId;

  try {
    const booking = await bookingService.getUserBooking(userId);

    res.status(200).send(booking);
  } catch (error) {
    if(error.status === 404) return res.sendStatus(404);
    else return res.status(500).send(error.message);
  }
}
