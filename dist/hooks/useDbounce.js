import { useState, useEffect } from 'react';
function useDebounce(val, delay) {
    if (delay === void 0) { delay = 300; }
    var _a = useState(val), debounceValue = _a[0], setDebounceValue = _a[1];
    useEffect(function () {
        var hanlder = window.setTimeout(function () {
            setDebounceValue(val);
        }, delay);
        return function () {
            clearTimeout(hanlder);
        };
    }, [val, delay]);
    return debounceValue;
}
export default useDebounce;
