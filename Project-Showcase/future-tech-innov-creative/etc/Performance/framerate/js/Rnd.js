﻿/*
 * Rnd (JS) by Grant Skinner. June 18, 2011
 * based on Rnd (AS3) by Grant Skinner. Dec 5, 2008
 * Visit http://github.com/gskinner for documentation, updates and examples.
 *
 *
 * Copyright (c) 2011 Grant Skinner
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

(function (window) {
  Rnd = function () {
    throw "the Rnd class cannot be instantiated";
  };

  // public static methods:
  // random(); // returns a number between 0-1 exclusive.
  Rnd.random = function () {
    return Math.random();
  };

  // float(50); // returns a number between 0-50 exclusive
  // float(20,50); // returns a number between 20-50 exclusive
  Rnd.float = function (min, max) {
    if (isNaN(max)) {
      max = min;
      min = 0;
    }
    if (isNaN(max)) {
      max = 1;
    }
    return Rnd.random() * (max - min) + min;
  };

  // boolean(); // returns true or false (50% chance of true)
  // boolean(0.8); // returns true or false (80% chance of true)
  Rnd.boolean = function (chance) {
    if (isNaN(chance)) {
      chance = 0.5;
    }
    return Rnd.random() < chance;
  };

  // sign(); // returns 1 or -1 (50% chance of 1)
  // sign(0.8); // returns 1 or -1 (80% chance of 1)
  Rnd.sign = function (chance) {
    if (isNaN(chance)) {
      chance = 0.5;
    }
    return Rnd.random() < chance ? 1 : -1;
  };

  // bit(); // returns 1 or 0 (50% chance of 1)
  // bit(0.8); // returns 1 or 0 (80% chance of 1)
  Rnd.bit = function (chance) {
    if (isNaN(chance)) {
      chance = 0.5;
    }
    return Rnd.random() < chance ? 1 : 0;
  };

  // integer(50); // returns an integer between 0-49 inclusive
  // integer(20,50); // returns an integer between 20-49 inclusive
  Rnd.integer = function (min, max) {
    if (isNaN(max)) {
      max = min;
      min = 0;
    }
    // Need to use floor instead of bit shift to work properly with negative values:
    return Math.floor(Rnd.float(min, max));
  };

  // shuffle(arr); // shuffles the items in the specified array. Modifies the original array.
  // arr2 = Rnd.shuffle(arr1.slice()); // to get a new shuffled array w/o modifying original.
  // no allocations or array resizing.
  Rnd.shuffle = function (array) {
    var l = array.length;
    for (var i = 0; i < l; i++) {
      var j = (l * Rnd.random()) | 0;
      if (j == i) {
        continue;
      }
      var item = array[j];
      array[j] = array[i];
      array[i] = item;
    }
    return array;
  };

  // item([1,3,5]); // returns a random item from the array. Does not modify the original array.
  Rnd.item = function (array) {
    return array[(array.length * Rnd.random()) | 0];
  };

  window.Rnd = Rnd;
})(window);
