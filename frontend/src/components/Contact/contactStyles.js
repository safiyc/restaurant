import styled from 'styled-components';
import { Button } from '../../elements/Button';
import { color, above } from '../../util';
import map from '../../asset/img/map.png';
import addressIcon from '../../asset/SVG-icon/location-pin.svg';
import phoneIcon from '../../asset/SVG-icon/phone.svg';
import emailIcon from '../../asset/SVG-icon/mail.svg';
import { Title, Squiggly, SquigglyLine } from '../../elements/SquigglyTitle';

export const Wrapper = styled.div`
  ${above.med`
    position: relative;
    height: 480px;
  `}
`;

export const MapBackground = styled.div`
  /* https://css-tricks.com/apply-a-filter-to-a-background-image/ */
  ${above.med`
     background-image: linear-gradient(black, black),
        url(${map});
     background-blend-mode: saturation;
     position: absolute;
     bottom: 0;
     z-index: -5;
     height: 330px;
     width: 100%;
   `}
`;

export const Content = styled.div`
  box-shadow: 0 0px 15px 5px rgba(100,100,250,.1);
  background: #fff;
  height: 350px;
  padding: 25px 50px 50px;
  position: relative;
  display: grid;

  ${above.med`
    width: calc(100% - 170px);
    height: 300px;
    margin-left: auto !important;
    margin-right: auto !important;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    grid-template-rows: 50% 20% 30%;
    grid-template-areas:
    'title'
    'info'
    'reserveBtn';
  `}
`;

export const Frame = styled.div`
  position: absolute;
  border: solid ${color.yellow} 1px;
  height: calc(100% - 30px);
  width: calc(100% - 30px);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  pointer-events: none;
`;

export const TitleContact = styled(Title)`
  height: 65px;

  & *{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  ${above.med`
    margin-top: 20px;
    grid-area: title;
  `};
`;

export const Info = styled.div`
  margin-left: 15px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    'addressIcon address'
    'phoneIcon phone'
    'emailIcon email';
  grid-column-gap: 20px;
  align-items: space-between;

  color: ${color.black};
  font-weight: 600;

  ${above.med`
    grid-area: info;
    margin-left: initial;
    margin-top: -15px;
    grid-template-columns: auto auto auto;
    grid-template-rows: 30px 30px;
    grid-template-areas:
      'address phone email'
      'addressIcon phoneIcon emailIcon';
    justify-content: space-around;
  `};
`;

export const Icons = styled.span`
  display: flex;
  margin-top: -6px;

  & p {
    margin-left: 6px;
    font-size: 1.3rem;
    color: ${color.gray};
    font-weight: 400;
    margin-top: 26px;

    ${above.med`
      margin-top: 16px;

      & p {
        margin-top: 30px;
      }
    `};
  }
`;

export const AddressIcon = styled(Icons)`
  grid-area: addressIcon;

  & > p {
    margin-left: 2px;
  }
`;

export const PhoneIcon = styled(Icons)`
  grid-area: phoneIcon;
`;

export const EmailIcon = styled(Icons)`
  grid-area: emailIcon;
`;

export const Address = styled.p`
  grid-area: address;
`;

export const Phone = styled.p`
    grid-area: phone;
`;

export const Email = styled.p`
    grid-area: email;
`;

export const ButtonContact = styled(Button)`
  display: block;
  margin: 20px auto;

  ${above.med`
    grid-area: reserveBtn;
    margin: 45px auto 0;
  `};
`;

export {
  Squiggly,
  SquigglyLine,
  addressIcon,
  phoneIcon,
  emailIcon
};
