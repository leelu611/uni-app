/**
 * wxs getRegExp
 */
function getRegExp () {
  const args = Array.prototype.slice.call(arguments);
  args.unshift(RegExp);
  return new (Function.prototype.bind.apply(RegExp, args))()
}

/**
 * wxs getDate
 */
function getDate () {
  const args = Array.prototype.slice.call(arguments);
  args.unshift(Date);
  return new (Function.prototype.bind.apply(Date, args))()
}

export { getDate, getRegExp };
