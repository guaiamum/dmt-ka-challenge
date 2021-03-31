import { h, Fragment } from 'preact';
import Slider from 'guaiamum-dmt-ka-slider';
import longText from '../assets/long-text.js';
import Navigation from './Navigation/index.js';

const imagesArray = Array(5)
    .fill('https://picsum.photos/300/150')
    .map((imgSrc, idx) => ({ desc: 'an image description', src: `${imgSrc}?idx=${idx}` }));

const linksArray = Array(6).fill(null).map(() => ({ url: "", text: 'Post Link' }))

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
                <Navigation links={linksArray} />
            </main>
            <footer>Footer</footer>
        </Fragment>
    );
}
