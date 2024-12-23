export const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if necessary
    const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase(); // Get short month name in uppercase
    const year = date.getFullYear();
  
    return `${day}. ${month}. ${year}`;
  };
  
  export const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const year = date.getFullYear();
    const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const period = date.getHours() < 12 ? "AM" : "PM";
  
    return `${day}. ${month}. ${year} ${hours}:${minutes} ${period}`;
  };