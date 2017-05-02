// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';
require('../common');
const assert = require('assert');
const vm = require('vm');

assert.throws(function() {
  vm.isContext('string is not supported');
<<<<<<< d4c1d3766c3da022d6f73160b4b86236052d22a8
<<<<<<< 8db39971b768118ce2c0c34d88788daea14f52c9
}, /^TypeError: sandbox must be an object$/);
=======
}, /TypeError/);
>>>>>>> test-vm-is-context.js : changed the assert.thows object to regex and added score for sanbox object
=======
}, /^TypeError: sandbox must be an object$/);
>>>>>>> vm: changed the error from constructor to regular expression

assert.strictEqual(vm.isContext({}), false);
assert.strictEqual(vm.isContext([]), false);

assert.strictEqual(vm.isContext(vm.createContext()), true);
assert.strictEqual(vm.isContext(vm.createContext([])), true);

const sandbox = { foo: 'bar' };
vm.createContext(sandbox);
assert.strictEqual(vm.isContext(sandbox), true);
