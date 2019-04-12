/*! ****************************************************************************
 * JEasing v0.0.0
 *
 * A simple library that implements Robert Penner's easing equations.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2019 jclo <jclo@mobilabs.fr> (http://www.mobilabs.fr/).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 *
 * EASING EQUATIONS
 * Open source under the BSD License.
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * ************************************************************************** */
// Based on UMDLib template v0.8.4
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
/* eslint-disable one-var, semi-style */
(function(root, factory) {
  'use strict';

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.JEasing = factory(root);
  }
}(this, function(root) {
  'use strict';

  var JEasing
    , previousJEasing
    ;

  /** **************************************************************************
   *
   * Defines easing functions.
   *
   * core.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   * Public Functions:
   *   . linear
   *   . swing
   *   . easeInSine
   *   . easeOutSine
   *   . easeInOutSine
   *   . easeInQuad
   *   . easeOutQuad
   *   . easeInOutQuad
   *   . easeInCubic
   *   . easeOutCubic
   *   . easeInOutCubic
   *   . easeInQuart
   *   . easeOutQuart
   *   . easeInOutQuart
   *   . easeInQuint
   *   . easeOutQuint
   *   . easeInOutQuint
   *   . easeInExpo
   *   . easeOutExpo
   *   . easeInOutExpo
   *   . easeInCirc
   *   . easeOutCirc
   *   . easeInOutCirc
   *   . easeInBack
   *   . easeOutBack
   *   . easeInOutBack
   *   . easeInElastic
   *   . easeOutElastic
   *   . easeInOutElastic
   *   . easeInBounce
   *   . easeOutBounce
   *   . easeInOutBounce
   *
   *
   * @namespace    JEasing
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */

  JEasing = {

  };

  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  previousJEasing = root.JEasing;

  // Runs JEasing in noConflict mode, returning the JEasing variable to its
  // previous owner. Returns a reference to this JEasing object.
  /* istanbul ignore next */
  JEasing.noConflict = function() {
    /* eslint-disable-next-line no-param-reassign */
    root.JEasing = previousJEasing;
    return this;
  };

  // Current version of the library:
  JEasing.VERSION = '0.0.0';
  /* - */


  // Returns the library name:
  return JEasing;
}));
/* eslint-enable one-var, semi-style */
