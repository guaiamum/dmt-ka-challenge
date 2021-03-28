const options = {
    root: null,
    rootMargin: '0px 10px',
    threshold: 0
};

const subscribers = [];

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const foundIndex = subscribers.findIndex(e => e.el === entry.target); // this could be an uid instead... 🤔
            const found = subscribers[foundIndex];
            if (found) {
                observer.unobserve(found.el);
                found.cbx();
                subscribers.splice(foundIndex, 1);
            }
        }
    });
};

const observer = new IntersectionObserver(callback, options);

/**
 * @param {Element} el element to be observed
 * @param {Function} cbx callback when intersected
 */
const subscribe = (el, cbx) => {
    // notify the observer to mind this element
    observer.observe(el);
    // internal management of subscribers
    subscribers.push({ el, cbx });

    return observer;
};

export default subscribe;
