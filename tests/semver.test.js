const { classes: { SemVer } } = require('../dist/cjs/index.js')

describe('SemVer class', () => {
  describe('constructor and set method', () => {
    it('should initialize with default version 0.0.0', () => {
      const version = new SemVer();
      expect(version.get()).toBe('0.0.0');
    });

    it('should parse a valid semver string', () => {
      const version = new SemVer('1.2.3-beta+001');
      expect(version.major).toBe(1);
      expect(version.minor).toBe(2);
      expect(version.patch).toBe(3);
      expect(version.prerelease).toBe('beta');
      expect(version.metadata).toBe('001');
    });

    it('should throw an error for invalid format', () => {
      expect(() => new SemVer('invalid')).toThrow();
    });
  });

  describe('increment method', () => {
    it('should increment the major version', () => {
      const version = new SemVer('1.2.3').increment(SemVer.MAJOR);
      expect(version.get()).toBe('2.2.3');
    });

    it('should increment the minor version', () => {
      const version = new SemVer('1.2.3').increment(SemVer.MINOR);
      expect(version.get()).toBe('1.3.3');
    });

    it('should increment the patch version', () => {
      const version = new SemVer('1.2.3').increment(SemVer.PATCH);
      expect(version.get()).toBe('1.2.4');
    });
  });

  describe('decrement method', () => {
    it('should floor the version to 0 for major versions', () => {
      const version = new SemVer('0.2.3').decrement(SemVer.MAJOR);
      expect(version.get()).toBe('0.2.3');
    })

    it('should floor the version to 0 for minor versions', () => {
      const version = new SemVer('1.0.3').decrement(SemVer.MINOR);
      expect(version.get()).toBe('1.0.3');
    })

    it('should floor the version to 0 for patch versions', () => {
      const version = new SemVer('1.2.0').decrement(SemVer.PATCH);
      expect(version.get()).toBe('1.2.0');
    })

    it('should decrement the major version', () => {
      const version = new SemVer('1.2.3').decrement(SemVer.MAJOR);
      expect(version.get()).toBe('0.2.3');
    });

    it('should decrement the minor version', () => {
      const version = new SemVer('1.2.3').decrement(SemVer.MINOR);
      expect(version.get()).toBe('1.1.3');
    });

    it('should decrement the patch version', () => {
      const version = new SemVer('1.2.3').decrement(SemVer.PATCH);
      expect(version.get()).toBe('1.2.2');
    });
  });

  describe('comparison methods', () => {
    const version1 = new SemVer('1.2.3-alpha+build');
    const version2 = new SemVer('1.2.3-alpha');

    it('should correctly determine strict equality', () => {
      const version3 = new SemVer('1.2.3-alpha+build');
      expect(version1.isEqual(version3)).toBe(true);
    });

    it('should correctly determine loose equality', () => {
      expect(version1.isLooselyEqual(version2)).toBe(true);
    });

    it('should correctly determine semver equality', () => {
      expect(version1.isSemverEqual(version2)).toBe(true);
    });
  });

  describe('static methods', () => {
    it('should compare two version strings correctly', () => {
      expect(SemVer.compare('1.2.3', '1.2.3')).toBe(true);
      expect(SemVer.compare('1.2.3', '1.2.4')).toBe(false);
    });
  });
});
