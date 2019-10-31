// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Curry from "../node_modules/bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReactDOMRe from "../node_modules/reason-react/src/ReactDOMRe.js";
import * as Uid$ReasonLearningSessions from "./Uid.bs.js";
import * as Collapse$ReasonLearningSessions from "./Collapse.bs.js";

ReactDOMRe.renderToElementWithId(React.createElement(Uid$ReasonLearningSessions.make, {
          children: (function (uid) {
              return React.createElement(Collapse$ReasonLearningSessions.make, {
                          uid: uid,
                          children: (function (isOpen, getTogglerProps, getCollapsibleProps, contentRef) {
                              var togglerProps = Curry._2(getTogglerProps, (function (_event) {
                                      console.log("Huzzah!");
                                      return /* () */0;
                                    }), /* () */0);
                              var collapsibleProps = Curry._1(getCollapsibleProps, /* () */0);
                              return React.createElement(React.Fragment, undefined, React.createElement("button", {
                                              "aria-expanded": togglerProps[/* ariaExpanded */2],
                                              "aria-controls": togglerProps[/* ariaControls */1],
                                              id: togglerProps[/* id */0],
                                              tabIndex: togglerProps[/* tabIndex */3],
                                              type: togglerProps[/* type_ */4],
                                              onClick: togglerProps[/* onClick */5]
                                            }, "Collapsible Content - " + (
                                              isOpen ? "opened" : "closed"
                                            )), React.createElement("div", {
                                              ref: collapsibleProps[/* ref */3],
                                              "aria-hidden": collapsibleProps[/* ariaHidden */1],
                                              id: collapsibleProps[/* id */0],
                                              style: {
                                                height: collapsibleProps[/* style */4][/* height */0],
                                                overflow: collapsibleProps[/* style */4][/* overflow */1],
                                                transitionDuration: collapsibleProps[/* style */4][/* transitionDuration */3],
                                                transitionProperty: collapsibleProps[/* style */4][/* transitionProperty */2],
                                                transitionTimingFunction: collapsibleProps[/* style */4][/* transitionTimingFunction */4]
                                              },
                                              onTransitionEnd: collapsibleProps[/* onTransitionEnd */2]
                                            }, React.createElement("div", {
                                                  ref: contentRef,
                                                  style: {
                                                    width: "300px"
                                                  }
                                                }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Omnis rem quod error dicta possimus quisquam dolor soluta ea\n                modi corporis doloremque reprehenderit fugiat voluptatibus, id\n                iure, delectus, laborum voluptas quasi.")));
                            })
                        });
            })
        }), "root");

export {
  
}
/*  Not a pure module */
