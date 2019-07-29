 import React from 'react';
 import styled from 'styled-components';

 import { color, above, SideMargins } from '../util';

 import map from '../asset/img/map.png';

 const Wrapper = styled.div`
   ${above.med`
     display: grid;
     grid-template-columns: 100vw;
     grid-template-rows: 1fr 1fr;
     grid-template-areas:
       'blank'
       'map';

   height: 80vh;
   width: 100vw;
   `}
 `;

 const MapBackground = styled.div`
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

 const Content = styled.div`
   background: #fff;
   border: solid yellow 4px;
   grid: 1/1/-1/-1;

   display: grid;
   grid-template-columns: Repeat(3, 1fr);
   grid-template-rows: 1fr;

   ${SideMargins};
   padding: -2.4rem;
   position: relative;
   top: 10rem;
   z-index: 10;
 `;

 const Address = styled.div``

 const Contact = () => {
   return (

     <Wrapper className="wrapper">
       <MapBackground className="map-background" />
       <Content>
         <h3>Contact</h3>
         <Address>
           {/*
           1 / 2 Oxford Street, London // icon address //
           */}
         </Address>

         {/* icon Phone number */}
         <a href="tel: 1(832) 000 - 0000">832.000.0000</a>
         <p>contact</p>
       </Content>
     </Wrapper>
   );
 };


 export default Contact;
