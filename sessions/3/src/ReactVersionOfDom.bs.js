// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "../node_modules/bs-platform/lib/es6/curry.js";
import * as React from "react";

function ReactVersionOfDom(Props) {
  var match = React.useState((function () {
          return "";
        }));
  var setText = match[1];
  return React.createElement(React.Fragment, undefined, React.createElement("button", {
                  onClick: (function (_event) {
                      return Curry._1(setText, (function (_text) {
                                    return "Huzzah!";
                                  }));
                    })
                }, "Inner Text"), React.createElement("input", {
                  type: "text",
                  value: match[0]
                }));
}

var make = ReactVersionOfDom;

export {
  make ,
  
}
/* react Not a pure module */
