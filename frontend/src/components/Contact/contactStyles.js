import styled from 'styled-components';
import { color, above, SideMargins } from '../../util';
import map from '../../asset/img/map.png';

export const Wrapper = styled.div`
  display: grid;

  ${above.med`
    grid-template-columns: 100%;
     grid-template-rows: 1fr 1fr;
     grid-template-areas:
       'blank'
       'map';

   height: 80vh;
   width: 100vw;
   `}
`;

export const MapBackground = styled.div`
  /* https://css-tricks.com/apply-a-filter-to-a-background-image/ */

  ${above.med`
     background-image: linear-gradient(black, black),
       url(${map});
     width: 100vw;
     /* background-size: cover; */
     background-blend-mode: saturation;
     grid-area: map;
   `}
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: auto;

  ${above.med`
    background: #fff;
    border: solid ${color.yellow} 4px;
    grid: 1/1/-1/-1;

    grid-template-columns: Repeat(3, 1fr);
    grid-template-rows: 1fr;

    ${SideMargins};
    padding: -2.4rem;
    position: relative;
    top: 10rem;
    z-index: 10;
  `}
`;

export const Address = styled.div`
  ${above.med`
    grid-area: address;
  `}
`;

export const Phone = styled.div`
  ${above.med`
    grid-area: phone;
  `}
`;

export const Email = styled.div`
  ${above.med`
    grid-area: email;
  `}
`;
