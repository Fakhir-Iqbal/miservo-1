export function getTodayDate(dateInput = new Date()) {
    return dateInput.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }).replace(/ /g, '-').toLowerCase();
  }
  