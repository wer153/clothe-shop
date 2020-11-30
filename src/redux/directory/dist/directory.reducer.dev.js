"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var INITIAL_STATE = {
  sections: [{
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'shop/hats'
  }, {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'shop/jackets'
  }, {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'shop/sneakers'
  }, {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  }, {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }]
};

var directoryReducer = function directoryReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

var _default = directoryReducer;
exports["default"] = _default;