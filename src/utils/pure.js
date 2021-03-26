/**
 * @credits: https://gist.githubusercontent.com/developit/b3231344b6b056374bc630fa58308616/raw/58d36c5711e07819215f68df898e75b097cfcb32/pure-component.js
 */
import { Component } from 'preact';

/**
 * @param {Object} a
 * @param {Object} b
 * @returns {*}
 */
function shallowDiffers (a, b) {
    for (const key in a) if (a[key] !== b[key]) { return true; }
    for (const key in b) if (!(key in a)) { return true; }
    return false;
}

/**
 * @param {Function} fn
 * @returns {*}
 */
const wrap = (fn) => class Wrapper extends Component {
    /**
     * @param {Object} props
     * @returns {boolean}
     */
    shouldComponentUpdate (props) {
        return shallowDiffers(props, this.props);
    }

    /**
     * @param {Object} props
     * @param {Object} state
     * @param {*} context
     * @returns {JSSX}
     */
    render (props, state, context) {
        // console.log('rendered');
        return fn(props, context);
    }
};

/**
 * @param {*} target
 * @returns {*}
 */
export default (target) => target.__scuWrap || (target.__scuWrap = wrap(target));
