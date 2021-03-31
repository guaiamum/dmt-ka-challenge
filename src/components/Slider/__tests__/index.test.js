import { h } from 'preact';
import { render, fireEvent, waitFor } from '@testing-library/preact';
import Slider from '../index';
import subscribe from '../utils/observer';

const propsMock = {
    images: [{ desc: 'Image of a cat', src: '/cat-image' }],
    width: 600,
    height: 300,
    loadFirst: 1,
}
const twoImagePropsMock = {
    ...propsMock,
    images: [...propsMock.images, { desc: 'Image of a dog', src: '/dog-image' }]
}
jest.mock('../utils/observer.js', () => ({
    __esModule: true,
    default: jest.fn((ref, cbx) => { cbx() })
}))

describe('Slider', () => {
    beforeAll(() => {
        window.HTMLElement.prototype.scrollBy = jest.fn()
    })
    it('should not render buttons with one image and have img src', () => {
        const { getByAltText, queryByLabelText } = render(<Slider {...propsMock} />);

        expect(queryByLabelText('Previous Image')).not.toBeInTheDocument()
        expect(queryByLabelText('Next Image')).not.toBeInTheDocument()

        const imageElement = getByAltText(propsMock.images[0].desc);
        expect(imageElement).toHaveAttribute('src');
        expect(imageElement.getAttribute('src')).toBe('/cat-image');
    })

    it('should render buttons and have img src as data:base64', () => {
        subscribe.mockImplementationOnce(jest.fn())
        const { getByAltText, getByLabelText } = render(<Slider {...twoImagePropsMock} />);

        expect(getByLabelText('Previous Image')).toBeInTheDocument()
        expect(getByLabelText('Next Image')).toBeInTheDocument()

        const imageElement = getByAltText(twoImagePropsMock.images[1].desc);
        expect(imageElement).toHaveAttribute('src');
        expect(imageElement.getAttribute('src')).toMatch('data:image/png;base64');
    })

    it('should call scrollBy when button clicked', async () => {
        const { getByAltText, getByLabelText } = render(<Slider {...twoImagePropsMock} />);

        // next button
        const nextBtn = getByLabelText('Next Image')

        fireEvent.click(nextBtn)
        expect(window.HTMLElement.prototype.scrollBy).toHaveBeenCalledWith({ top: 0, left: 600, behavior: 'smooth' })
        window.HTMLElement.prototype.scrollBy.mockReset()

        const imageElement = getByAltText(twoImagePropsMock.images[1].desc);
        await waitFor(() => {
            expect(imageElement.getAttribute('src')).toBe('/dog-image');
        });

        // previous button
        const previousBtn = getByLabelText('Previous Image')

        fireEvent.click(previousBtn)
        expect(window.HTMLElement.prototype.scrollBy).toHaveBeenCalledWith({ top: 0, left: -600, behavior: 'smooth' })
    })
})
