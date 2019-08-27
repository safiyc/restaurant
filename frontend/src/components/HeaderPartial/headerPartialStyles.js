import styled from 'styled-components';

import {
  logo,
  hoursIcon,
  phoneIcon
} from '../../asset/img';

import { above } from '../../util';

// #region HeaderContainer
export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas:
    'logo hoursphone';
  width: 100%;
  margin-bottom: 5px;

  ${above.med`
    grid-auto-flow: column;
    grid-template-rows: 100px;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      'logo hoursphone';
    height: initial;
    padding-left: 45px;
  `};

  & .logo_link {
    grid-area: logo;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    width: 150px;
    margin-left: 10px;

    ${above.med`
      width: 250px;
      height: 100px;
      margin-left: 30px;
    `};
  }
`;
// #endregion

// #region Logo
// export const Logo = styled.div`
/* grid-area: logo;
background-image: url(${logo});
background-size: contain;
background-repeat: no-repeat;
width: 150px;
margin-left: 10px;

${above.med`
  width: 250px;
  height: 100px;
  margin-left: 30px;
`}; */
// `;
// #endregion

// #region HoursPhone
export const HoursPhone = styled.ul`
  grid-area: hoursphone;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  font-size: 1.2rem;
  color: grey;
  height: 25px;
  width: 125px;
  margin-top: 15px;
  margin-right: 5px;
  padding-left: 0;

  ${above.med`
    flex-direction: row;
    width: unset;
    margin: 10px 0 25px;
  `};
`;

export const HoursPhoneList = styled.li`
  position: relative;
  white-space: nowrap;
  padding: 0;

  & > .hrs_contact_label {
    display: none;
  }

  & > .hrs_contact_number {
    position: absolute;
    right: 0;
    color: grey;
  }

  ${above.med` 
    & > .hrs_contact_label {
      display: inline-block;
      margin-top: 5px;
      margin-right: 5px;
    }

    & > .hrs_contact_number {
      position: relative;
      display: inline-block;
      color: black;
      font-weight: 600;
    }
  `};

  &:first-child {
    border-right: none;
    
    @media (min-width: 795px){
      padding: 0 20px 0 12px;
      border-right: 1px dashed #efefef;
    }
  }
  
  &:last-child {
    @media(min-width: 795px) {
      padding: 0 20px 0 8px;
    }
  }
`;

export const HoursPhoneIcons = styled.div`
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 25px;
  margin-right: 5px;
  vertical-align: middle;

  ${above.med`
    width: 28px;
  `};
`;

export const HoursIcon = styled(HoursPhoneIcons)`
  background-image: url(${hoursIcon});
  width: 18px;
`;

export const PhoneIcon = styled(HoursPhoneIcons)`
  background-image: url(${phoneIcon});
  width: 23px;
  margin-left: -4px;

  ${above.med`
    margin-left: 4px;
    margin-right: 0;
  `};
`;
// #endregion