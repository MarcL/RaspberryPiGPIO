// Used for all node.js tests
'use strict';

var sinon = require('sinon');
var chai = require('chai');
var should = chai.should();
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

// Expose all modules to node.js modules
global.sinon = sinon;
global.chai = chai;
global.should = should;
global.chaiAsPromised = chaiAsPromised;
