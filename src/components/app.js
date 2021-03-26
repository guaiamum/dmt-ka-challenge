import { h, Fragment } from 'preact';
import Slider from 'Components/Slider';

const imagesArray = Array(5).fill('https://picsum.photos/300/150').map((imgSrc, idx) => `${imgSrc}?idx=${idx}`);

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
                    <p>Voluptate aliquip ipsum sint laboris sunt ut veniam. Id consectetur nisi nisi sint veniam. Aliqua irure consequat dolor elit nostrud ipsum Lorem quis occaecat in eiusmod aliquip officia laboris. Incididunt exercitation ex ex dolor labore elit. Consectetur culpa officia deserunt eiusmod dolor commodo aliquip. Minim magna Lorem amet reprehenderit occaecat veniam. Quis magna esse cupidatat aliqua incididunt.
                    Voluptate aliquip ipsum sint laboris sunt ut veniam. Id consectetur nisi nisi sint veniam. Aliqua irure consequat dolor elit nostrud ipsum Lorem quis occaecat in eiusmod aliquip officia laboris. Incididunt exercitation ex ex dolor labore elit. Consectetur culpa officia deserunt eiusmod dolor commodo aliquip. Minim magna Lorem amet reprehenderit occaecat veniam. Quis magna esse cupidatat aliqua incididunt.</p>
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
