import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const CN = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs));
};

export default CN;
