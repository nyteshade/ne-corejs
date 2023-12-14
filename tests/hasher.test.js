const { classes: { Hasher } } = require('..')

describe('Hasher', () => {
  let kEmptyHash

  beforeEach(() => {
    kEmptyHash = new Hasher().hash
  })

  describe('constructor', () => {
    it('should initialize with default hash value when no arguments are provided', () => {
      const hasher = new Hasher();
      expect(hasher.hash).toBe(kEmptyHash);
    });

    it('should process multiple input values', () => {
      const hasher = new Hasher('abc', 123, { key: 'value' });
      expect(hasher.hash).not.toBe(kEmptyHash);
    });
  });

  describe('add method', () => {
    let hasher;

    beforeEach(() => {
      hasher = new Hasher();
    });

    it('should handle string inputs correctly', () => {
      hasher.add('test');
      expect(hasher.hash).not.toBe(kEmptyHash);
    });

    it('should process number inputs correctly', () => {
      hasher.add(123);
      expect(hasher.hash).not.toBe(kEmptyHash);
    });

    it('should correctly hash object keys', () => {
      const obj = { a: 1, b: 2 };
      hasher.add(obj);
      expect(hasher.hash).not.toBe(kEmptyHash);
    });

    it('should convert non-string/non-number inputs to strings', () => {
      hasher.add(true, false, null, undefined);
      expect(hasher.hash).not.toBe(kEmptyHash);
    });

    it('should handle arrays with symbols correctly', () => {
      hasher.add([Symbol('sym1'), Symbol('sym2')]);
      expect(hasher.hash).not.toBe(kEmptyHash);
    });
  });

  describe('hash getter', () => {
    it('should return the correct hash value', () => {
      const hasher = new Hasher('hash');
      expect(hasher.hash).not.toBe(kEmptyHash);
    });

    it('should always return a positive value', () => {
      const hasher = new Hasher('negative');
      expect(parseInt(hasher.hash, 36)).toBeGreaterThan(0);
    });
  });

  describe('reset method', () => {
    it('should reset the hash to the initial seed value', () => {
      const hasher = new Hasher('reset');
      hasher.reset();
      expect(hasher.hash).toBe(kEmptyHash);
    });
  });

  describe('static toKeys method', () => {
    it('should return an empty string for non-objects', () => {
      expect(Hasher.toKeys(null)).toBe('');
    });

    it('should return keys for object inputs', () => {
      expect(Hasher.toKeys({ a: 1, b: 2 })).toEqual(['a', 'b']);
    });
  });

  describe('static hasSymbols method', () => {
    it('should return false for non-arrays', () => {
      expect(Hasher.hasSymbols('not an array')).toBe(false);
    });

    it('should correctly identify symbols in an array', () => {
      expect(Hasher.hasSymbols([Symbol('sym'), 'string'])).toBe(true);
    });
  });

  describe('seed getter and setter', () => {
    it('should correctly get and set the seed value', () => {
      const hasher = new Hasher();
      expect(hasher.seed).toBe(5381);

      hasher.seed = 100;
      expect(hasher.seed).toBe(100);

      hasher.reset();
      expect(hasher.hash).toBe('2s');
    });
  });
});
