import styled from 'styled-components';
import { color, above, SideMargins } from '../../util';

export const Footer = styled.footer`
  display: grid;

  background: ${color.black};
  color: ${color.gray};
  max-width: 100vw;
  overflow: hidden;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;
  ${SideMargins};
  margin-top: 1rem;
  margin-bottom: 2rem;

  ${above.med`
    grid-template-columns: 1.5fr 1.5fr 4fr 3fr;
    /* margin: 3.7rem 0 6.4rem 0; */
  `};
`;

const Column = styled.div`
  /* width: auto; */
  margin: 0 3rem;
  font-size: 1.4rem;
  line-height: 2.6rem;

  ul {
    padding: 0;
  }
`;

export const SiteMapColumn = styled(Column)`
  ${above.med`
    grid-column: 1/2;
  `}
`;

export const LinksColumn = styled(Column)`
  ${above.med`
    grid-column: 2/3;
  `}
`;

export const SubscribeColumn = styled(Column)`
  grid-column: 1/-1;

  ${above.med`
    grid-column: 3/4;
  `}
`;

export const FollowColumn = styled(Column)`
  grid-column: 1/-1;

  ${above.med`
    grid-column: 4/5;
  `}
`;

export const h4 = styled.h4`
  color: ${color.white};
  font-size: 2rem;
`;
