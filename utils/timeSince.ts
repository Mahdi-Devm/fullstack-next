export function timeSince(date: Date | string): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  const seconds = Math.floor((new Date().getTime() - dateObj.getTime()) / 1000);
  const hours = Math.floor(seconds / 3600);
  if (hours < 1) return "just now";
  if (hours === 1) return "1 hour ago";
  return `${hours} hours ago`;
}
