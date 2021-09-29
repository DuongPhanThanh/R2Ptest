export class SessionstorageHelper {
  static has = (key) => {
    const val = SessionstorageHelper.get(key);
    return val !== null && val !== '';
  };

  static get = (key) => {
    const val = sessionStorage.getItem(key);
    if (!val) {
      return null;
    }
    try {
      const obj = JSON.parse(val);
      return obj;
    } catch (e) {
      return null;
    }
  };

  static getValid = (key, re) => {
    const val = SessionstorageHelper.get(key);
    if (!val || typeof val !== 'string') {
      return null;
    }
    if (val.match(re)) {
      return val;
    }
    return null;
  };

  static set = (key, value) => sessionStorage.setItem(key, JSON.stringify(value));

  static remove = (key) => sessionStorage.removeItem(key);
}
