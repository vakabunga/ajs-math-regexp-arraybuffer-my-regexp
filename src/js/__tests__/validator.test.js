import Validator from '../validator';

describe('Validator:', () => {
  test('should return error', () => {
    expect(() => {
      Validator.validateUsername('e404pagen0tf0und');
    }).toThrow();
  });
  test('should return error', () => {
    expect(() => {
      Validator.validateUsername('vzx8#)vc');
    }).toThrow();
  });
  test('should return error', () => {
    expect(() => {
      Validator.validateUsername('антон');
    }).toThrow();
  });
  test('should return error', () => {
    expect(() => {
      Validator.validateUsername('8gfdsg');
    }).toThrow();
  });
  test('should return error', () => {
    expect(() => {
      Validator.validateUsername('gfdsg9');
    }).toThrow();
  });
  test('should return error', () => {
    expect(() => {
      Validator.validateUsername('_gfdsg');
    }).toThrow();
  });
  test('should return error', () => {
    expect(() => {
      Validator.validateUsername('gfdsg_');
    }).toThrow();
  });
  test('should return error', () => {
    expect(() => {
      Validator.validateUsername('gfdsg-');
    }).toThrow();
  });
  test('should return error', () => {
    expect(() => {
      Validator.validateUsername('-gfdsg');
    }).toThrow();
  });
  test('should return value', () => {
    expect(Validator.validateUsername('vaka')).toBe('vaka');
  });
  test('should return value', () => {
    expect(Validator.validateUsername('wtf-0_o-wtf')).toBe('wtf-0_o-wtf');
  });
});
