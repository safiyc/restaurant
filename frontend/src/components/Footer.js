import React from 'react';
import styled from 'styled-components';

import { color } from '../util';

const StyledFooter = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr; */

  background: ${color.black};
  color: ${color.gray};
  height: 200px;
  width: 100vw;
`;

const Column = styled.div`
  width: auto;
`;

const Styledh4 = styled.h4`
  color: ${color.white};
`;

const Footer = () => {
  return (
    <StyledFooter>
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
      <Styledh4>Links</Styledh4>
      <ul />
    </StyledFooter>
  );
};

export default Footer;
