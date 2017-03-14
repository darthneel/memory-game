import {isString} from 'lodash';
import Immutable from 'immutable';

const isTruthy = (val) => {
  let ret = !!val;
  if (isString(val)) {
    ret = true;
  }

  return ret;
};

/**
 * A JSX-specific util for rendering a component if some data value is truthy.
 * An unlimited number of arguments may be passed, with the last argument
 * always being a callback function. The supplied callback will be invoked with
 * arguments in the same order as passed, replacing non-truthy values with
 * null, and mainting truthy values.
 *
 * @param {*} obj The data value to check truthiness against
 * @param {componentCallback} cb
 *
 * @callback componentCallback
 * @param {*} obj The original data value
 *
 * @example
 * RIT('truthy!', val => <div>{val}</div>); // => <div>truthy!</div>
 * RIT(undefined, val => <div>{val}</div>); // => null
 */
export default function renderIfTruthy() {
  let args = Immutable.List(Array.prototype.slice.call(arguments));
  const cb = args.last();

  args = args.pop();
  const results = args.map(val => isTruthy(val));

  return results.filter(isTruthy).size ? cb.apply(null, args.toArray()) : null;
}
