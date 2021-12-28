export class Duration extends null {
  private static readonly RGX =
    /^(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(mo(?:n(?:ths?|s)?)?)?(y(?:ears?|rs?)?)?$/;
  private static readonly SEC = 1e3;
  private static readonly MIN = this.SEC * 60;
  private static readonly HOUR = this.MIN * 60;
  private static readonly DAY = this.HOUR * 24;
  private static readonly MONTH = this.DAY * 30;
  private static readonly YEAR = this.DAY * 365.25;
  /**
   *
   * @param input the input string
   * @returns the duration in milliseconds
   */
  public static parse(input: string): number | undefined {
    if (!input || typeof input !== "string") return;
    let num: number;
    const arr = input.toLowerCase().match(this.RGX);
    if (arr != null && (num = parseFloat(arr[1]))) {
      if (arr[3] != null) return num * this.SEC;
      if (arr[4] != null) return num * this.MIN;
      if (arr[5] != null) return num * this.HOUR;
      if (arr[6] != null) return num * this.DAY;
      if (arr[7] != null) return num * this.DAY * 7;
      if (arr[8] != null) return num * this.DAY * 30;
      if (arr[9] != null) return num * this.YEAR;
      return num;
    }
    return;
  }

  private static fmt(
    val: number,
    pfx: string,
    str: string,
    long: boolean,
    separator: string
  ): string {
    const num = (val | 0) === val ? val : ~~(val + 0.5);
    return (
      pfx +
      num +
      (long
        ? separator + str + (num != 1 ? "s" : "")
        : str == "month"
        ? str.slice(0, 2)
        : str[0])
    );
  }

  /**
   *
   * @param ms the duration in milliseconds
   * @param long if true, the output will be in the form of "1 year, 2 months, like this"
   * @returns the duration in human readable form
   */

  public static format(
    ms: number,
    { long = false, separator = " " } = { long: false, separator: " " }
  ): string | undefined {
    if (!ms || typeof ms !== "number") return;
    const pfx = ms < 0 ? "-" : "",
      abs = ms < 0 ? -ms : ms;
    if (abs < this.SEC)
      return (
        ms + (long ? `${separator}millisecond${ms != 1 ? "s" : ""}` : "ms")
      );
    if (abs < this.MIN)
      return this.fmt(abs / this.SEC, pfx, "second", long, separator);
    if (abs < this.HOUR)
      return this.fmt(abs / this.MIN, pfx, "minute", long, separator);
    if (abs < this.DAY)
      return this.fmt(abs / this.HOUR, pfx, "hour", long, separator);
    if (abs < this.MONTH)
      return this.fmt(abs / this.DAY, pfx, "day", long, separator);
    if (abs < this.YEAR)
      return this.fmt(abs / this.MONTH, pfx, "month", long, separator);
    return this.fmt(abs / this.YEAR, pfx, "year", long, separator);
  }

  /**
   *
   * @param ms the duration in milliseconds
   * @param options the options
   * @returns the duration in human readable form
   */

  public static formatDuration(
    ms: number,
    format = "short"
  ): string | undefined {
    if (!ms || typeof ms !== "number") return;
    let time = {
      year: Math.floor(ms / (this.MONTH * 12)),
      month: Math.floor(ms / this.MONTH) % 12,
      day: Math.floor(ms / this.DAY) % 30,
    };
    const minTime = {
      hour: Math.floor(ms / this.HOUR),
      minute: Math.floor(ms / this.MIN) % 60,
      second: Math.floor(ms / this.SEC) % 60,
    };
    if (format == "long") {
      minTime.hour = Math.floor(ms / this.HOUR) % 24;
      time = { ...time, ...minTime };
    }
    return Object.entries(format == "long" ? time : minTime)
      .filter((val) => val[1] !== 0)
      .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
      .join(", ");
  }
}
