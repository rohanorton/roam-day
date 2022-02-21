import { DayFormatter } from "."

describe('DayFormatter', () => {
  it.each([
    [new Date('2022-02-20'), 'Sunday'],
    [new Date('2022-02-21'), 'Monday'],
    [new Date('2022-02-22'), 'Tuesday'],
    [new Date('2022-02-23'), 'Wednesday'],
    [new Date('2022-02-24'), 'Thursday'],
    [new Date('2022-02-25'), 'Friday'],
    [new Date('2022-02-26'), 'Saturday'],
  ])('formats date (%s) as "%s"', (date, dayString) => {
    const result = new DayFormatter().format(date)
    expect(result).toEqual(dayString)
  })
})
