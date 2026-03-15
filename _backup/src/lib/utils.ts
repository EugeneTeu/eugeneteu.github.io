import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number of bytes into a human-readable string (e.g., KB, MB).
 * @param {number} bytes The number of bytes to format.
 * @returns {string} The formatted string.
 */
export function formatBytes(bytes: number) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

/**
 * Formats a number of milliseconds into a human-readable string.
 * @param {number} ms The number of milliseconds to format.
 * @returns {string} The formatted string.
 */
export function formatMs(ms: number) {
  if (ms < 1000) {
    return `${ms.toFixed(2)} ms`;
  }
  const seconds = ms / 1000;
  return `${seconds.toFixed(2)} s`;
}
