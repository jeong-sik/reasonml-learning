// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "../node_modules/bs-platform/lib/es6/curry.js";
import * as React from "react";

function ReactVersionOfDomWithRef(Props) {
  var inputRef = React.useRef(null);
  return React.createElement(React.Fragment, undefined, React.createElement("button", {
                  onClick: (function (_event) {
                      var match = inputRef.current;
                      if (match == null) {
                        return /* () */0;
                      } else {
                        var setValue = (function(domNode, value) {domNode.value = value;});
                        return Curry._2(setValue, match, "Hmm...");
                      }
                    })
                }, "Inner Text"), React.createElement("input", {
                  ref: inputRef,
                  type: "text"
                }));
}

var make = ReactVersionOfDomWithRef;

export {
  make ,
  
}
/* react Not a pure module */
