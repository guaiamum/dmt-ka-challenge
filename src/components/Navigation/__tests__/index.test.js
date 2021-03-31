import { h } from 'preact';
import { render } from '@testing-library/preact';
import Navigation from '../index';

const propsMock = {
    links: [{ text: 'Go to Href', url: '/href' }]
}

describe('Navigation', () => {
    it('should render all links', () => {
        const { container } = render(<Navigation {...propsMock} />);

        expect(container.textContent).toMatch('Aside HeaderGo to Href');
    })
})
