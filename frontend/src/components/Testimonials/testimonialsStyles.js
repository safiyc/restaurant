import styled from 'styled-components';
import Button from '../../elements/Button';
import { above, color } from '../../util';
import { Title, Squiggly, SquigglyLine } from '../../elements/SquigglyTitle';

import { testimony1, testimony2, testimony3 } from '../../asset/img';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 0;
  margin-bottom: 40px;
  color: gray;

  ${above.med`
    width: calc(100% - 170px);
    margin: 50px auto 40px;
    padding-left: 0;
  `};
`;

// #region title
export const TitleTestimonial = styled(Title)`
  & *{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Subheading = styled.div`
  text-align: center;
  margin-bottom: 0;
  margin-top: 10px;
`;
// #endregion

// #region customer
export const Customer = styled.div`
  box-shadow: 0 -2px 8px 1px rgba(100,100,250,.1);
  margin: 10px 0;
  padding: 15px;
`;

export const PersonInfo = styled.div`
  width: fit-content;
  display: grid;
  grid-template-areas:
    'image name'
    'image submittedWhen';
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 35px;
  border-radius: 20px;
  grid-area: image;
  margin-right: 15px;
`;

export const Name = styled.div`
  grid-area: name;
  color: black;
  font-weight: 600;
`;

export const SubmittedWhen = styled.div`
  grid-area: submittedWhen;
  color: lightgray;
  font-size: 1.3rem;
`;

export const Description = styled.div`
`;

export const Rating = styled.div`
`;

export const Summary = styled.div`
  background-color: yellow; /* helper */
`;
// #endregion

// #region reserve
export const ReserveContainer = styled.div`
  grid-area: reserve;
  display: flex;
  align-items: center;
  height: 80px;
  margin: 0 auto 10px;

  & .reserve_contact {
    color: gray;
  }

  & span {
    color: black;
    font-weight: 600;
  }

  ${above.med`
    margin: unset;
    margin-top: -25px;
  `};
`;

export const ButtonAbout = styled(Button)`
  margin-right: 15px;
`;
// #endregion

export {
  Squiggly,
  SquigglyLine,
  Button,
  testimony1,
  testimony2,
  testimony3
};