"use strict";

/**
 * 整数が17で割りきれるかを返す（割り切れるならtrue）
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
  if (num % 17 === 0) {
    return true;
  }
  return false;
}
module.exports = { isMultipleOfSeventeen };
