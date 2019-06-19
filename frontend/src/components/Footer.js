import React from 'react';
import styled from 'styled-components';

import { color, above } from '../util';

const StyledFooter = styled.footer`
  /* display: grid;
  grid-template-columns: 1fr; */

  background: ${color.black};
  color: ${color.gray};
  width: 100vw;

  ${above.med`
    grid-template-columns: 20vw 20vw 30vw 30vw;
  `}
`;

const FooterContent = styled.div`
  grid-column: 1 / -1;
`

const Column = styled.div`
  width: auto;
`;

const Styledh4 = styled.h4`
  color: ${color.white};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
      <Column>
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
      </Column>
      <Column>
        <Styledh4>Links</Styledh4>
        <li>Contact</li>
        <li>Partnership</li>
        <li>Sales</li>
      </Column>

      <Column>
        <Styledh4>Subscribe GrillMaster</Styledh4>
        <p>
          Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec
          malesuada fames ac turpis velit, rhoncus eu.
        </p>
      </Column>

      <Column>
        <Styledh4>Follow Us</Styledh4>
        <p>
          Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec
          malesuada fames ac turpis velit, rhoncus eu.
        </p>
      </Column>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
