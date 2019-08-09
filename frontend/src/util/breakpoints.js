import { css } from 'styled-components';

const size = {
  small: 400,
  // med: 960,
  med: 760, //600
  large: 1140
};

// Mobil first, prefer the "above" breakpoint function
export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// export const below = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (max-width: ${size[label] / 16}em) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

// Side Margins
export const SideMargins = css`
  margin: 0 1vw;

  ${above.large`
    margin-left: 15.5rem;
    margin-right: 15.5rem;
  `}
`;
