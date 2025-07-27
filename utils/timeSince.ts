export function timeSince(date: string): string {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  );
  const hours = Math.floor(seconds / 3600);
  if (hours < 1) return "just now";
  if (hours === 1) return "1 hour ago";
  return `${hours} hours ago`;
}
