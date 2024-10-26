import { Listing, Reservation, User } from "@prisma/client";

// SafeListing type - removes "createdAt" and redefines it as a string
export type SafeListing = {
  [K in keyof Omit<Listing, "createdAt">]: Listing[K];
} & { createdAt: string };

// SafeUser type - removes sensitive fields and redefines certain dates as strings
export type SafeUser = {
  [K in keyof Omit<User, "createdAt" | "updatedAt" | "emailVerified">]: User[K];
} & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

// SafeReservation type - removes certain fields and redefines dates as strings
export type SafeReservation = {
  [K in keyof Omit<
    Reservation,
    "createdAt" | "startDate" | "endDate" | "listing" | "user"
  >]: Reservation[K];
} & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
  user: SafeUser;
};
