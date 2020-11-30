"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectDirectorySections = void 0;

var _reselect = require("reselect");

var selectDirectory = function selectDirectory(state) {
  return state.directory;
};

var selectDirectorySections = (0, _reselect.createSelector)([selectDirectory], function (directory) {
  return directory.sections;
});
exports.selectDirectorySections = selectDirectorySections;