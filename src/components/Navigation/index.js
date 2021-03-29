import { h, Fragment } from 'preact';

/**
 * Renders the App
 * @param {Object} props
 * @param {Array} props.links
 * @param {string} props.links.url
 * @param {string} props.links.text
 * @returns {JSX}
 */
export default function Navigation({ links }) {
    return (
        <Fragment>
            <input type="checkbox" id="toggle-nav" style="display:none" />
            <ul class="nav">
                Aside Header
            {
                    links.map(({ text, url }) => (
                        <li class="nav-item">
                            <a href={url}>
                                {text}
                            </a>
                        </li>))
                }
            </ul>
            <label class="nav-tog" for="toggle-nav" aria-label="Toggle Navigation bar open" />
        </Fragment>
    )
};
