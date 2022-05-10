"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getImg;

function getImg(Img) {
  if (window.chrome) {
    return window.chrome.runtime.getURL(Img);
  }

  return Img;
}