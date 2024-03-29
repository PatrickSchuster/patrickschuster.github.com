export function debounce(func, wait = 100) {
    let timeoutId;
    return function(...args) {
      const self = this;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        func.apply(self, args);
      }, wait);
    }
}

export function throttle(func, delay = 100) {
  let shouldWait = false;
  return (...args) => {
    if (shouldWait === true) {
      return;
    }
    func(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}