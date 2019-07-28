import React from 'react';
import EmailForm from './emailForm'
import * as S from './footerStyles';

const Footer = () => {
  return (
    <S.Footer>
      <S.Content>
        <S.SiteMapColumn>
          <S.h4>Sitemap</S.h4>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Parties</li>
            <li>Business</li>
            <li>Meetings</li>
            <li>Catering</li>
            <li>Gallery</li>
          </ul>
        </S.SiteMapColumn>

        <S.LinksColumn>
          <S.h4>Links</S.h4>
          <ul>
            <li>Contact</li>
            <li>Partnership</li>
            <li>Sales</li>
          </ul>
        </S.LinksColumn>

        <S.SubscribeColumn>
          <S.h4>Subscribe GrillMaster</S.h4>
          <p>
            Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec
            malesuada fames ac turpis velit, rhoncus eu.
          </p>
          <EmailForm />
        </S.SubscribeColumn>

        <S.FollowColumn>
          <S.h4>Follow Us</S.h4>
          <p>
            Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec
            malesuada fames
          </p>
        </S.FollowColumn>
      </S.Content>
    </S.Footer>
  );
};

export default Footer;
