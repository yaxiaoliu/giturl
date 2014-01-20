/**!
 * giturl - test/giturl.test.js
 *
 * Copyright(c) 2014
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Module dependencies.
 */

var should = require('should');
var giturl = require('../');

describe('giturl.test.js', function () {
  describe('parse()', function () {
    it('should parse project web url from giturl', function () {
      giturl.parse('git://gitlab.com/edp/logger.git').should.equal('http://gitlab.com/edp/logger');
      giturl.parse('git@gitlab.com:edp/logger.git').should.equal('http://gitlab.com/edp/logger');
      giturl.parse('git://github.com/treygriffith/cellar.git').should.equal('https://github.com/treygriffith/cellar');
      giturl.parse('https://github.com/banchee/tranquil.git').should.equal('https://github.com/banchee/tranquil');
      giturl.parse('https://github.com/banchee/tranquil').should.equal('https://github.com/banchee/tranquil');
      giturl.parse('http://github.com/banchee/tranquil.git').should.equal('https://github.com/banchee/tranquil');
      giturl.parse('github.com/banchee/tranquil.git').should.equal('https://github.com/banchee/tranquil');
      giturl.parse('https://jpillora@github.com/banchee/tranquil.git').should.equal('https://github.com/banchee/tranquil');
      giturl.parse('git@github.com:cnpm/cnpm.git').should.equal('https://github.com/cnpm/cnpm');
      giturl.parse('github.com:cnpm/cnpm.git').should.equal('https://github.com/cnpm/cnpm');
      giturl.parse('git@github.com:cnpm/cnpm').should.equal('https://github.com/cnpm/cnpm');
      giturl.parse('git@gitcafe.com:fengmk2/cnpm.git').should.equal('https://gitcafe.com/fengmk2/cnpm');
      giturl.parse('git@gist.github.com:3135914.git').should.equal('https://gist.github.com/3135914');
    });
  });
});
