const RGX =
    /^(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(mo(?:n(?:ths?|s)?)?)?)?(y(?:ears?|rs?)?)?$/,
  SEC = 1e3,
  MIN = SEC * 60,
  HOUR = MIN * 60,
  DAY = HOUR * 24,
  MONTH = DAY * 30,
  YEAR = DAY * 365.25;

export default class Duration extends null {
  /**
   *
   * @param {string} input the input string
   * @returns  {number} the duration in milliseconds
   */
  public static parse(input: string): number | undefined {
    let num: number;
    const arr = input.toLowerCase().match(RGX);
    if (arr != null && (num = parseFloat(arr[1]))) {
      if (arr[3] != null) return num * SEC;
      if (arr[4] != null) return num * MIN;
      if (arr[5] != null) return num * HOUR;
      if (arr[6] != null) return num * DAY;
      if (arr[7] != null) return num * DAY * 7;
      if (arr[8] != null) return num * DAY * 30;
      if (arr[9] != null) return num * YEAR;
      return num;
    }
    return;
  }

  private static fmt(
    val: number,
    pfx: string,
    str: string,
    long: boolean
  ): string {
    const num = (val | 0) === val ? val : ~~(val + 0.5);
    return pfx + num + (long ? " " + str + (num != 1 ? "s" : "") : str[0]);
  }

  /**
   *
   * @param ms the duration in milliseconds
   * @param long if true, the output will be in the form of "1 year, 2 months, like this"
   * @returns {string} the duration in human readable form
   */

  public static format(ms: number, long = false): string {
    const pfx = ms < 0 ? "-" : "",
      abs = ms < 0 ? -ms : ms;
    if (abs < SEC) return ms + (long ? " ms" : "ms");
    if (abs < MIN) return this.fmt(abs / SEC, pfx, "second", long);
    if (abs < HOUR) return this.fmt(abs / MIN, pfx, "minute", long);
    if (abs < DAY) return this.fmt(abs / HOUR, pfx, "hour", long);
    if (abs < MONTH) return this.fmt(abs / DAY, pfx, "day", long);
    if (abs < YEAR) return this.fmt(abs / MONTH, pfx, "month", long);
    return this.fmt(abs / YEAR, pfx, "year", long);
  }
}
