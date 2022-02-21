class DayFormatter {
  readonly DAYS = Object.freeze([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);

  format(date: Date) {
    return this.DAYS[date.getDay()] || "";
  }
}

export { DayFormatter };
