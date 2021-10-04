export class LocalstorageHelper {
  static has(key) {
    const val = LocalstorageHelper.get(key);
    return val !== null && val !== '';
  }

  static get(key) {
    const val = localStorage.getItem(key);
    if (!val) {
      return null;
    }
    try {
      const obj = JSON.parse(val);
      return obj;
    } catch (e) {
      return null;
    }
  }

  static getValid(key, re) {
    const val = LocalstorageHelper.get(key);
    if (!val || typeof val !== 'string') {
      return null;
    }
    if (val.match(re)) {
      return val;
    }
    return null;
  }

  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key) {
    localStorage.removeItem(key);
  }
}
