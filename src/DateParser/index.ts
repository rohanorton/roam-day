const INVALID = "INVALID";

class DateParser {
  parse(input: string) {
    const chunks = this.chunkDateParts(input);
    const day = this.parseDay(chunks[0]);
    const month = this.parseMonth(chunks[1]);
    const year = this.parseYear(chunks[2]);
    return this.createDate(year, month, day);
  }

  readonly MONTHS = Object.freeze([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  private parseDay(input: string) {
    return Number(input.replace(/\D/g, ""));
  }

  private parseYear(input: string) {
    return Number(input);
  }

  private parseMonth(input: string) {
    return this.MONTHS.indexOf(input);
  }

  private createDate(year: number, month: number, day: number) {
    const date = new Date(year, month, day);
    return this.isInvalid(date) ? null : date;
  }

  private isInvalid(date: Date) {
    return date.toString() === "Invalid Date";
  }

  private chunkDateParts(input: string) {
    const [monthString = INVALID, dayString = INVALID, yearString = INVALID] =
      input.trim().split(" ");
    return [dayString, monthString, yearString];
  }
}

export { DateParser };
