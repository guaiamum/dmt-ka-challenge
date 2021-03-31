# Image Caroussel Slider

Using [scrollBy API](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy) this component receives the following props:

1. images: **Required**. Set of image `src` and `alt` to be rendenred. Should come in the format: `{src:'path/to/image', desc:'Image's alt text'}`
2. width = 300. Image width, to avoid CLS.
3. height = 150. Image height, to avoid CLS.
4. loadFirst = 1. number of images that should not be lazyloaded. Any image beyond this number is going to use the [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to be lazy loaded. Unfortunately [loading lazy](https://web.dev/browser-level-image-lazy-loading/) is not mature enough to support horizontal scrolling.

This component also uses [scroll snapping](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) so on mobile there's no need to use the prev/next buttons.

Package is provided not bundled, use your own bundling solution :)

## Known Issues
- Observer script not tested
- No RTL support on desktop
