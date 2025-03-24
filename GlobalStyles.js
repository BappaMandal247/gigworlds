import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      /* Reset */
      *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      /* Base styles */
      html {
        font-size: 16px;
        scroll-behavior: smooth;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.5;
        color: ${props => props.theme.textLight};
        background: ${props => props.theme.bgLight};
        transition: background-color 0.3s ease, color 0.3s ease;
      }

      /* Typography */
      h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1rem;
      }

      h1 { font-size: 2.5rem; }
      h2 { font-size: 2rem; }
      h3 { font-size: 1.75rem; }
      h4 { font-size: 1.5rem; }
      h5 { font-size: 1.25rem; }
      h6 { font-size: 1rem; }

      p {
        margin-bottom: 1rem;
      }

      /* Links */
      a {
        color: ${props => props.theme.primary};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: ${props => props.theme.secondary};
        }
      }

      /* Container */
      .container {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 1rem;
      }

      /* Grid */
      .row {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -1rem;
      }

      .col {
        flex: 1;
        padding: 0 1rem;
      }

      /* Responsive columns */
      @media (min-width: 768px) {
        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
        }
      }

      @media (min-width: 992px) {
        .col-lg-4 {
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
        }
      }

      /* Utility classes */
      .text-center { text-align: center; }
      .mt-1 { margin-top: 0.5rem; }
      .mt-2 { margin-top: 1rem; }
      .mt-3 { margin-top: 1.5rem; }
      .mt-4 { margin-top: 2rem; }
      .mb-1 { margin-bottom: 0.5rem; }
      .mb-2 { margin-bottom: 1rem; }
      .mb-3 { margin-bottom: 1.5rem; }
      .mb-4 { margin-bottom: 2rem; }

      /* Dark mode */
      [data-theme="dark"] {
        color: ${props => props.theme.textDark};
        background: ${props => props.theme.bgDark};
      }

      /* Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `}
  />
);

export default GlobalStyles; 