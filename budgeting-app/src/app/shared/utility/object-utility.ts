export class ObjectUtility {
  /**
   * Deep clone function
   * source input object to copy/clone
   */
  public static deepClone<T = any>(source: T): T {
    if (source === null || source === undefined) {
      return source;
    }
    if (source instanceof Date) {
      return new Date(source.getTime()) as any;
    }
    if (Array.isArray(source)) {
      const cp = [] as any[];
      (source as any[]).forEach((v) => {
        cp.push(v);
      });
      return cp.map((n: any) => this.deepClone<any>(n)) as any;
    }
    if (ObjectUtility.isObject(source)) {
      const cp = { ...(source as { [key: string]: any }) } as { [key: string]: any };
      Object.keys(cp).forEach((k) => {
        cp[k] = this.deepClone<any>(cp[k]);
      });
      return cp as T;
    }
    return source;
  }

  public static isObject(item: any) {
    return item && typeof item === 'object' && Object.keys(item).length > 0 && !Array.isArray(item);
  }

  public static isString(val: any): boolean {
    return (val && (typeof val === 'string' || val instanceof String));
  }

  public static isEmptyString(val: any): boolean {
    return !val || val?.trim() === '';
  }

  public static trimStringObjAndNullify<T>(input: T | any, nullValue = undefined): T {
    if (input) {
      Object.keys(input).forEach(key => {
        const prop = input[key];
        if (this.isString(prop)) {
          input[key] = this.trimStringAndNullify(prop, nullValue);
        } else if (Array.isArray(prop)) {
          input[key] = prop.map(n => this.trimStringObjAndNullify(n, nullValue));
        } else if (this.isObject(prop)) {
          input[key] = this.trimStringObjAndNullify(prop, nullValue);
        }
      });
    }
    return input;
  }

  public static transformAllStringToUpperCase<T>(input: T | any): T {
    if (input) {
      Object.keys(input)
          .filter(k => ObjectUtility.isString(input[k]))
          .forEach(key => input[key] = input[key].toUpperCase());
    }
    return input;
  }
}
