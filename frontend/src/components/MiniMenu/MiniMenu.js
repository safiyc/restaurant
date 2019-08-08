import React from 'react';
import * as S from './miniMenuStyles';

export default function MiniMenu() {
  return (
    <S.Wrapper>
      <S.TitleMiniMenu>
        <h2>The Menu</h2>
        <S.Squiggly>
          <S.SquigglyLine className="line1 lineSize" />
          <S.SquigglyLine className="line2 lineSize" />
        </S.Squiggly>
      </S.TitleMiniMenu>
      <S.Description>
        <S.Subheading>Great memories are made with good food.</S.Subheading>
      </S.Description>
      <S.ButtonAbout>Reserve A Table</S.ButtonAbout>
      <S.ImgTextContainer>
        <S.SubContainer>
          <S.ImgDesc>
            <S.TitleMiniMenu>
              <h3>Appetizers</h3>
              <S.Squiggly>
                <S.SquigglyLine className="line1 lineSize" />
                <S.SquigglyLine className="line2 lineSize" />
              </S.Squiggly>
            </S.TitleMiniMenu>
            <S.Description>
              <p>
                The whole is complemented by unique baked potatoes served with delicate garlic butter and fresh dill.
              </p>
              <p>from<span>$14,00</span></p>
            </S.Description>
          </S.ImgDesc>
          <S.Img src={S.imgMiniMenu1} />
        </S.SubContainer>
        <S.SubContainer>
          <S.ImgDesc>
            <S.TitleMiniMenu>
              <h3>Soups</h3>
              <S.Squiggly>
                <S.SquigglyLine className="line1 lineSize" />
                <S.SquigglyLine className="line2 lineSize" />
              </S.Squiggly>
            </S.TitleMiniMenu>
            <S.Description>
              <p>
                The whole is complemented by unique baked potatoes served with delicate garlic butter and fresh dill.
              </p>
              <p>from <span>$14,00</span></p>
            </S.Description>
          </S.ImgDesc>
          <S.Img src={S.imgMiniMenu2} />
        </S.SubContainer>
        <S.SubContainer className='reverse_subcontainer' >
          <S.Img src={S.imgMiniMenu3} />
          <S.ImgDesc>
            <S.TitleMiniMenu>
              <h3>Main dishes</h3>
              <S.Squiggly>
                <S.SquigglyLine className="line1 lineSize" />
                <S.SquigglyLine className="line2 lineSize" />
              </S.Squiggly>
            </S.TitleMiniMenu>
            <S.Description>
              <p>
                The whole is complemented by unique baked potatoes served with delicate garlic butter and fresh dill.
              </p>
              <p>from<span>$14,00</span></p>
            </S.Description>
          </S.ImgDesc>
        </S.SubContainer>
        <S.SubContainer className='reverse_subcontainer' >
          <S.Img src={S.imgMiniMenu4} />
          <S.ImgDesc>
            <S.TitleMiniMenu>
              <h3>Seafood</h3>
              <S.Squiggly>
                <S.SquigglyLine className="line1 lineSize" />
                <S.SquigglyLine className="line2 lineSize" />
              </S.Squiggly>
            </S.TitleMiniMenu>
            <S.Description>
              <p>
                The whole is complemented by unique baked potatoes served with delicate garlic butter and fresh dill.
              </p>
              <p>from<span>$14,00</span></p>
            </S.Description>
          </S.ImgDesc>
        </S.SubContainer>
        <S.ImgBehindLeft src={S.imgMiniMenuLeft} />
        <S.ImgBehindRight src={S.imgMiniMenuRight} />
      </S.ImgTextContainer>
    </S.Wrapper>
  );
}