"use strict";

var _main = require("./main");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rawData = {
  "entityMap": {},
  "blocks": [{
    "key": "a30dm",
    "text": "This is a test string.",
    "type": "unstyled",
    "depth": 0,
    "inlineStyleRanges": [{
      "offset": 0,
      "length": 4,
      "style": "BOLD"
    }, {
      "offset": 5,
      "length": 2,
      "style": "ITALIC"
    }, {
      "offset": 10,
      "length": 4,
      "style": "BOLD"
    }],
    "entityRanges": []
  }]
};
var converter = new _main2.default(rawData);
console.log(converter.export());