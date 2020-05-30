export default class Validator {
  static validateUsername(value) {
    if (value.search(/^[a-z]+[a-z0-9-_]+[a-z]$/i) !== -1 && value.search(/\d{3,}/) === -1) {
      return value;
    }
    throw new Error('invalid name');
  }
}
  