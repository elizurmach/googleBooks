'use strict';

angular.module('myBooks.version', [
  'myBooks.version.interpolate-filter',
  'myBooks.version.version-directive'
])

.value('version', '0.1');
