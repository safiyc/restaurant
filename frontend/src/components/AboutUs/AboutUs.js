import React from 'react';
import * as S from './aboutUsStyles';

export default function AboutUs() {
  return (
    <S.Wrapper>
      <S.AboutTitle>
        <h2>About us</h2>
        <S.Squiggly>
          <S.SquigglyLine className="line1 lineSize" />
          <S.SquigglyLine className="line2 lineSize" />
        </S.Squiggly>
      </S.AboutTitle>
      <S.Description>
        <p>
          Grillmaster is one of the few restaurants in London where you can eat delicious dishes from a real coal grill.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum enim eget commodo aliquet. Praesent velit mi, ornare sit amet odio sed, venenatis sceleriS.sque enim. Praesent et molestie ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate ante justo, sollicitudin fermentum metus dictum at. Quisque bibendum pulvinar iaculis. Vivamus ut vulputate.
        </p>
      </S.Description>
      <S.ReserveContainer>
        <S.ButtonAbout>Reserve A Table</S.ButtonAbout><div className="reserve_contact">or call us via: <span>+1(832)000-0000</span></div>
      </S.ReserveContainer>
      <S.ImgContainer>
        <S.ImgMain src={S.imgAboutMain} />
        <S.ImgFrameAbout />
        <S.ImgMini src={S.imgAboutMini} />
      </S.ImgContainer>
    </S.Wrapper>
  );
}