import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import {
  ImgsContainer,
  ImgMain,
  ImgFrame,
  ImgMini
} from '../elements/ImgBanner';

import { imgMain, imgMini } from '../asset/img';
import { color } from '../util';

const Wrapper = styled.div`
  /* helper */
  border: 2px dashed green;

  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-areas:
    'title imgContainer'
    'desc imgContainer'
    'reserve imgContainer';
  
   @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-areas:
      'logo'
      'imgcontainer'
      'desc'
      'reserve';
  }
`;

const Title = styled.div`
  grid-area: title;
`;

const Description = styled.div`
  grid-area: desc;
`;

const ReserveContainer = styled.div`
  grid-area: reserve;
`;

const Squiggly = styled.div`
  overflow: hidden;
  position: relative;
  width: 50px;
  height: 50px;
`;

const SqiugglyLine = styled.div`
  position: absolute;
  width: 40px;
  height: 10px;

  &.line1 {
    background: linear-gradient(-45deg, transparent, transparent 40%, ${color.yellow} 40%, transparent 51%);
  }

  &.line2 {
    background: linear-gradient(45deg, transparent, transparent 40%, ${color.yellow} 40%, transparent 45%);
  }

  &.lineSize {
    background-size: 12px 15px;
  }
`;

const ImgContainer = styled(ImgsContainer)`
  grid-area: imgContainer;

  /* test */
  width: 300px;

  @media (max-width: 600px) {
    /* grid-area: imgscontainer; */
  }
`;

export default function AboutUs() {
  return (
    <Wrapper>
      <Title>
        <h2>About us</h2>
        <Squiggly>
          <SqiugglyLine className="line1 lineSize" />
          <SqiugglyLine className="line2 lineSize" />
        </Squiggly>
      </Title>
      <Description>
        <p>
          Grillmaster is one of the few restaurants in London where you can eat delicious dishes from a real coal grill.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum enim eget commodo aliquet. Praesent velit mi, ornare sit amet odio sed, venenatis scelerisque enim. Praesent et molestie ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate ante justo, sollicitudin fermentum metus dictum at. Quisque bibendum pulvinar iaculis. Vivamus ut vulputate mi, aliquam dapibus tellus. Curabitur quis ultrices leo. Nunc vitae mauris egestas, molestie mi quis, auctor mi.
        </p>
      </Description>

      <ReserveContainer>
        <Button>Reserve A Table</Button><div>or call us via: <span>+1(832)000-0000</span></div>
      </ReserveContainer>
      <ImgContainer>
        <ImgMain src={imgMain} />
        <ImgFrame />
        <ImgMini src={imgMini} />
      </ImgContainer>
    </Wrapper>
  );
}