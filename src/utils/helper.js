/**
 * Format a number to a human-readable string (e.g., 1.2M, 345K)
 */
export const formatViewCount = (count) => {
  if (!count) return "0";
  const num = parseInt(count);
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};

/**
 * Format ISO 8601 date to relative time (e.g., "3 days ago")
 */
export const timeAgo = (dateString) => {
  if (!dateString) return "";
  const now = new Date();
  const past = new Date(dateString);
  const diffMs = now - past;
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffYears > 0) return diffYears + (diffYears === 1 ? " year ago" : " years ago");
  if (diffMonths > 0) return diffMonths + (diffMonths === 1 ? " month ago" : " months ago");
  if (diffWeeks > 0) return diffWeeks + (diffWeeks === 1 ? " week ago" : " weeks ago");
  if (diffDays > 0) return diffDays + (diffDays === 1 ? " day ago" : " days ago");
  if (diffHours > 0) return diffHours + (diffHours === 1 ? " hour ago" : " hours ago");
  if (diffMins > 0) return diffMins + (diffMins === 1 ? " minute ago" : " minutes ago");
  return "Just now";
};
