const DAYS = Object.freeze([
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]);

const MONTHS = Object.freeze([
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

const dayFromDate = (input) => {
  const date = parseDate(input);
  return DAYS[date.getDay()] || null;
};

const parseDay = (input) => Number(input.replace(/\D/g, ""));

const parseYear = (input) => Number(input);

const parseMonth = (input) => MONTHS.indexOf(input);

const utcDate = (year, month, day) => new Date(Date.UTC(year, month, day));

const parseDate = (input) => {
  const chunks = input.split(" ");
  const month = parseMonth(chunks[0]);
  const day = parseDay(chunks[1]);
  const year = parseYear(chunks[2]);

  return utcDate(year, month, day);
};

describe("parseDay", () => {
  it("can parse day string", () => {
    const input = "8th,";

    const expected = 8;

    const actual = parseDay(input);

    expect(actual).toEqual(expected);
  });
});

describe("parseMonth", () => {
  it("can parse month string", () => {
    const input = "January";

    const expected = 0;

    const actual = parseMonth(input);

    expect(actual).toEqual(expected);
  });
});

describe("parseYear", () => {
  it("can parse year string", () => {
    const input = "2021";

    const expected = 2021;

    const actual = parseYear(input);

    expect(actual).toEqual(expected);
  });
});

describe("parseDate", () => {
  it("can parse valid date string", () => {
    const input = "February 21st, 2022";

    const expected = new Date("2022-02-21");

    const actual = parseDate(input);

    expect(actual).toEqual(expected);
  });
});

describe("dayFromDate", () => {
  it("get correct day string from valid date", () => {
    const input = "February 21st, 2022";

    const expected = "Monday";

    const actual = dayFromDate(input);

    expect(actual).toEqual(expected);
  });

  it("returns null for invalid date", () => {
    const input = "This is something other than a date.";

    const expected = null;

    const actual = dayFromDate(input);

    expect(actual).toEqual(expected);
  });
});
