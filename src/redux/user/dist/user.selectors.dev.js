"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCurrentUser = void 0;

var _reselect = require("reselect");

var selectUser = function selectUser(state) {
  return state.user;
};

var selectCurrentUser = (0, _reselect.createSelector)([selectUser], function (user) {
  return user.currentUser;
});
exports.selectCurrentUser = selectCurrentUser;