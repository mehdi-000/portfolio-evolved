import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @description
 * Merges tailwind classes correctly.
 * Hear more: https://www.youtube.com/watch?v=re2JFITR7TI
 *
 * @example
 * <div className={cn("text-red-500", "text-blue-500", { "text-green-500": isLoading })}>
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
