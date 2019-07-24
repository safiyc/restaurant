import React from 'react';
import styled from 'styled-components';

import { color, above, SideMargins } from '../util';

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr;

  background: ${color.black};
  color: ${color.gray};
  width: 100vw;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;
  ${SideMargins}
  margin: 1rem 0 2rem 0;

  ${above.med`
    grid-template-columns: 20vw 20vw 30vw 30vw;
    margin: 3.7rem 0 6.4rem 0;
  `}
`;

const Column = styled.div`
  /* width: auto; */
  margin: 0 3rem;
`;

const SiteMap = styled(Column)`
  ul {
    padding: 0;
  }
`;

const Links = styled(Column)`
  ${above.med`
    grid-column: 2/3;
  `}
`;

const Subscribe = styled(Column)`
  grid-column: 1/-1;

  ${above.med`
    grid-column: 3/4;
  `}
`;

const Follow = styled(Column)`
grid-column: 1/-1;

  ${above.med`
    grid-column: 4/5;
  `}
`;

const Styledh4 = styled.h4`
  color: ${color.white};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <SiteMap>
          <Styledh4>Sitemap</Styledh4>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Parties</li>
            <li>Business</li>
            <li>Meetings</li>
            <li>Catering</li>
            <li>Gallery</li>
          </ul>
        </SiteMap>
        <Links>
          <Styledh4>Links</Styledh4>
          <li>Contact</li>
          <li>Partnership</li>
          <li>Sales</li>
        </Links>

        <Subscribe>
          <Styledh4>Subscribe GrillMaster</Styledh4>
          <p>
            Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec
            malesuada fames ac turpis velit, rhoncus eu.
          </p>
        </Subscribe>

        <Follow>
          <Styledh4>Follow Us</Styledh4>
          <p>
            Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec
            malesuada fames ac turpis velit, rhoncus eu.
          </p>
        </Follow>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
