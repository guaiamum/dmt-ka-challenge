import { h } from 'preact';
import { useRef, useState, useEffect } from 'preact/hooks';
import subscribe from './utils/observer.js';

const ONE_PIXEL_TRANSPARENT = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

/**
 * generates scrollBy function according to options
 * @param {Object} options
 * @returns {Function}
 */
const scrollByItemsWidthFactory = ({ invertX = false, sliderRef } = {}) => () => {
    const left = 300 * (invertX ? -1 : 1);

    // smooth not supported in safari
    sliderRef.current.scrollBy({
        left, top: 0, behavior: 'smooth',
    });
};

/**
 * @param {Object} props
 * @param {number} props.width in px, defautls to 300
 * @param {number} props.width in px, defautls to 150
 * @param {number} props.loadFirst images to load when initiated
 * @param {Array} props.images
 * @param {string} props.images.src
 * @param {string} props.images.desc
 * @returns {JSX}
 */
export default ({ images, width = 300, height = 150, loadFirst = 1 }) => {
    const sliderRef = useRef(null);

    return (
        <section class="slider-w" ref={sliderRef} style={`width:${width}px`}>
            {
                images.map(({ src, desc }, idx) => {
                    const [loaded, setLoaded] = useState(idx <= loadFirst - 1);
                    const itemRef = useRef(null);

                    useEffect(() => {
                        if (!loaded && itemRef.current) {
                            subscribe(itemRef.current, () => { setLoaded(true) })
                        }
                    }, [loaded])
                    return (
                        <article class="item-w" ref={itemRef}>
                            {
                                idx > 0 &&
                                <button
                                    type="button"
                                    class="item-btn _prev"
                                    onClick={scrollByItemsWidthFactory({ invertX: true, sliderRef })}
                                    aria-label="Previous Image" />
                            }
                            <img
                                class={!loaded && 'item-skt'} // should remove onload
                                height={height}
                                width={width}
                                alt={desc}
                                src={loaded ? src : ONE_PIXEL_TRANSPARENT}
                            />
                            {
                                idx < (images.length - 1) &&
                                <button
                                    type="button"
                                    class="item-btn _next"
                                    onClick={scrollByItemsWidthFactory({ sliderRef })}
                                    aria-label="Next Image" />
                            }
                        </article>
                    );
                }
                )}
        </section >
    );
};
