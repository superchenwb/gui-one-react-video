import React from 'react';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import { jsx as _jsx } from "react/jsx-runtime";
export var GuiOneVideo = function GuiOneVideo(_ref) {
  var src = _ref.src,
      poster = _ref.poster;
  return /*#__PURE__*/_jsx(Player, {
    poster: poster,
    src: src,
    children: /*#__PURE__*/_jsx(BigPlayButton, {
      position: "center"
    })
  });
};