import { h, Fragment } from 'preact';
import Slider from 'Components/Slider';
import longText from '../assets/long-text.js';

const imagesArray = Array(5)
    .fill('https://picsum.photos/300/150')
    .map((imgSrc, idx) => ({ desc: 'an image description', src: `${imgSrc}?idx=${idx}` }));

/**
 * Renders the App
 * @param {Object} props
 * @param {Array} props.images
 * @returns {JSX}
 */
export default function App({ images = imagesArray }) {
    return (
        <Fragment>
            <header>Blog Name</header>
            <main>
                <div class="hero">
                    <h1 class="hero-text">Hero Image</h1>
                </div>
                <section class="post">
                    <Slider
                        images={images}
                    />
                    <p>{longText}</p>
                </section>
                <nav>
                    Aside Header
                    {
                        Array(6).fill(null).map(() => (<a href="">Post Link</a>))
                    }
                </nav>
            </main>
            <footer>Footer</footer>
        </Fragment>
    );
}
