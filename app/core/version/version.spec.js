'use strict';

describe('myBooks.version module', function() {
  beforeEach(module('myBooks.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
