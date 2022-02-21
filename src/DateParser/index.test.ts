import { DateParser } from ".";

describe("DateParser", () => {
  it("can parse valid date string", () => {
    const input = "February 3rd, 1986";

    const year = 1986;
    const month = 1; // 0-indexed February
    const day = 3;

    const result = new DateParser().parse(input) as Date;

    expect(result.getFullYear()).toEqual(year);
    expect(result.getMonth()).toEqual(month);
    expect(result.getDate()).toEqual(day);
  });

  it("ignores whitespace", () => {
    const input = `



    January 18th, 2021



    `;

    const year = 2021;
    const month = 0; // 0-indexed January
    const day = 18;

    const result = new DateParser().parse(input) as Date;

    expect(result.getFullYear()).toEqual(year);
    expect(result.getMonth()).toEqual(month);
    expect(result.getDate()).toEqual(day);
  });

  it("returns null for invalid date", () => {
    const input = "0";

    const result = new DateParser().parse(input);

    expect(result).toBeNull();
  });
});
