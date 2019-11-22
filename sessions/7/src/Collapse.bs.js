// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Curry from "../node_modules/bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Int from "../node_modules/bs-platform/lib/es6/belt_Int.js";
import * as Belt_Option from "../node_modules/bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "../node_modules/bs-platform/lib/es6/caml_option.js";

var defaultTiming = "cubic-bezier(0.09, 1.03, 0.57, 0.97)";

function getInitialHeight(isOpen, defaultOpen, maxHeight, collapsedHeight) {
  var exit = 0;
  var exit$1 = 0;
  if (isOpen !== undefined && isOpen) {
    exit = 1;
  } else {
    exit$1 = 2;
  }
  if (exit$1 === 2) {
    if (defaultOpen) {
      exit = 1;
    } else {
      return String(collapsedHeight) + "px";
    }
  }
  if (exit === 1) {
    if (maxHeight !== undefined) {
      return String(maxHeight) + "px";
    } else {
      return "auto";
    }
  }
  
}

function getIsOpen(isOpenProp, isOpenState) {
  if (isOpenProp !== undefined) {
    return Caml_option.valFromOption(isOpenProp);
  } else {
    return isOpenState;
  }
}

function getTransitionDurationStyle(isOpen, openDuration, closeDuration) {
  var actualDuration = isOpen ? openDuration : closeDuration;
  return String(actualDuration) + "ms";
}

function getTransitionTimingFunctionStyle(isOpen, openTimingFunction, closeTimingFunction) {
  if (isOpen) {
    return openTimingFunction;
  } else {
    return closeTimingFunction;
  }
}

function getHeight(isOpen, collapsedHeight, maxHeight, contentRef) {
  var match = contentRef.current;
  if (isOpen) {
    if (maxHeight !== undefined) {
      return String(maxHeight) + "px";
    } else if (match == null) {
      return "auto";
    } else {
      return match.clientHeight + "px";
    }
  } else {
    return String(collapsedHeight) + "px";
  }
}

function Collapse(Props) {
  var isOpenProp = Props.isOpen;
  var match = Props.defaultOpen;
  var defaultOpen = match !== undefined ? match : false;
  var match$1 = Props.collapsedHeight;
  var collapsedHeight = match$1 !== undefined ? match$1 : 0;
  var match$2 = Props.duration;
  var duration = match$2 !== undefined ? match$2 : 300;
  var match$3 = Props.timingFunction;
  var timingFunction = match$3 !== undefined ? match$3 : defaultTiming;
  var match$4 = Props.closeDuration;
  var closeDuration = match$4 !== undefined ? match$4 : duration;
  var match$5 = Props.closeTimingFunction;
  var closeTimingFunction = match$5 !== undefined ? match$5 : timingFunction;
  var match$6 = Props.openDuration;
  var openDuration = match$6 !== undefined ? match$6 : duration;
  var match$7 = Props.openTimingFunction;
  var openTimingFunction = match$7 !== undefined ? match$7 : timingFunction;
  var maxHeight = Props.maxHeight;
  var uid = Props.uid;
  var children = Props.children;
  var collapsibleRef = React.useRef(null);
  var contentRef = React.useRef(null);
  var isTransitioning = React.useRef(false);
  var transitionTimeoutId = React.useRef(0);
  var isClosing = React.useRef(false);
  var match$8 = React.useState((function () {
          if (isOpenProp !== undefined) {
            return isOpenProp;
          } else {
            return defaultOpen;
          }
        }));
  var setOpen = match$8[1];
  var isOpen = getIsOpen(isOpenProp, match$8[0]);
  var setOpenedStyles = function (param) {
    var match = collapsibleRef.current;
    if (match == null) {
      return /* () */0;
    } else {
      match.style.willChange = "height";
      match.style.display = "";
      requestAnimationFrame((function (param) {
              if (isClosing.current) {
                return 0;
              } else {
                match.style.height = getHeight(true, collapsedHeight, maxHeight, contentRef);
                return /* () */0;
              }
            }));
      return /* () */0;
    }
  };
  var handleCollapsibleTransitionEnd = function ($$event) {
    var match = isTransitioning.current;
    var match$1 = collapsibleRef.current;
    if (match) {
      requestAnimationFrame((function (param) {
              return handleCollapsibleTransitionEnd($$event);
            }));
      return /* () */0;
    } else if (match$1 == null) {
      console.log("collapsible ref is null");
      return /* () */0;
    } else if (isOpen) {
      match$1.style.willChange = "";
      if (match$1.style.clientHeight !== 0) {
        match$1.style.height = maxHeight !== undefined ? String(maxHeight) + "px" : "auto";
        return /* () */0;
      } else {
        return 0;
      }
    } else if (collapsedHeight === 0) {
      match$1.style.display = "none";
      return /* () */0;
    } else {
      return 0;
    }
  };
  var getTogglerProps = function (onClick, param) {
    return /* record */[
            /* id */"CollapseToggle-" + String(uid),
            /* ariaControls */"CollapsePanel-" + String(uid),
            /* ariaExpanded */isOpen,
            /* tabIndex */0,
            /* type_ */"button",
            /* onClick */(function ($$event) {
                if (onClick !== undefined) {
                  Curry._1(onClick, $$event);
                }
                return Curry._1(setOpen, (function (prim) {
                              return !prim;
                            }));
              })
          ];
  };
  var getCollapsibleProps = function (param) {
    var match = collapsibleRef.current;
    return /* record */[
            /* id */"CollapsePanel-" + String(uid),
            /* ariaHidden */!isOpen,
            /* onTransitionEnd */handleCollapsibleTransitionEnd,
            /* ref */collapsibleRef,
            /* style : record */[
              /* height */(match == null) ? getInitialHeight(isOpenProp, defaultOpen, maxHeight, collapsedHeight) : match.style.height,
              /* overflow */"hidden",
              /* transitionProperty */"height",
              /* transitionDuration */getTransitionDurationStyle(isOpen, openDuration, closeDuration),
              /* transitionTimingFunction */isOpen ? openTimingFunction : closeTimingFunction
            ]
          ];
  };
  React.useEffect((function () {
          var match = collapsibleRef.current;
          if (!(match == null)) {
            if (isOpen && match.clientHeight !== 0) {
              var height = maxHeight !== undefined ? String(maxHeight) + "px" : "auto";
              match.style.height = height;
            }
            if (!isOpen && collapsedHeight === 0) {
              match.style.display = "none";
            }
            
          }
          return undefined;
        }), /* array */[]);
  React.useEffect((function () {
          isTransitioning.current = true;
          clearTimeout(transitionTimeoutId.current);
          transitionTimeoutId.current = setTimeout((function (param) {
                  isTransitioning.current = false;
                  return /* () */0;
                }), Belt_Option.getWithDefault(Belt_Int.fromString(getTransitionDurationStyle(isOpen, openDuration, closeDuration)), duration));
          if (isOpen) {
            isClosing.current = false;
            setOpenedStyles(/* () */0);
          } else {
            isClosing.current = true;
            var match = collapsibleRef.current;
            if (!(match == null)) {
              match.style.height = getHeight(true, collapsedHeight, maxHeight, contentRef);
            }
            requestAnimationFrame((function (param) {
                    requestAnimationFrame((function (param) {
                            if (isClosing.current) {
                              var match = collapsibleRef.current;
                              if (match == null) {
                                return /* () */0;
                              } else {
                                match.style.willChange = "height";
                                requestAnimationFrame((function (param) {
                                        if (isClosing.current) {
                                          match.style.height = getHeight(false, collapsedHeight, maxHeight, contentRef);
                                          return /* () */0;
                                        } else {
                                          return 0;
                                        }
                                      }));
                                return /* () */0;
                              }
                            } else {
                              return 0;
                            }
                          }));
                    return /* () */0;
                  }));
          }
          return undefined;
        }));
  return Curry._4(children, isOpen, getTogglerProps, getCollapsibleProps, contentRef);
}

var defaultDuration = 300;

var make = Collapse;

export {
  defaultDuration ,
  defaultTiming ,
  getInitialHeight ,
  getIsOpen ,
  getTransitionDurationStyle ,
  getTransitionTimingFunctionStyle ,
  getHeight ,
  make ,
  
}
/* react Not a pure module */
