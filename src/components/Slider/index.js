import { h } from 'preact';
import { useRef } from 'preact/hooks';
import pure from 'Utils/pure';

/**
 * generates scrollBy function according to options
 * @param {Object} options
 * @returns {Function}
 */
const scrollByItemsWidthFactory = ({ invertX = false, sliderRef } = {}) => () => {
    const left = 300 * (invertX ? -1 : 1);

    sliderRef.current.scrollBy({
        left, top: 0, behavior: 'smooth',
    });
};

/**
 * @param {Object} props
 * @param {Aray} props.images
 * @returns {JSX}
 */
export default pure(({ images }) => {
    // const [currentImgIDX, setCurrentImgIDX] = useState(0);
    const sliderRef = useRef(null);

    return (
        <section class="slider-w" ref={sliderRef}>
            {images.map((image, idx) => {
                const wrapperRef = useRef(null);
                return (
                    <article class="item-w" ref={wrapperRef}>
                        {
                            idx > 0 &&
                            <button
                                type="button"
                                class="item-btn _prev"
                                onClick={scrollByItemsWidthFactory({ invertX: true, sliderRef })}
                            >
                                Previous Image
                            </button>
                        }
                        <img
                            src={image} />
                        {
                            idx < images.length &&
                            <button
                                type="button"
                                class="item-btn _next"
                                onClick={scrollByItemsWidthFactory({ sliderRef })}
                            >
                                Next Image
                            </button>
                        }
                    </article>
                );
            }
            )}
        </section >
    );
});
