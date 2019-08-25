import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../elements/Button';
import { above, color } from '../../util';
import { Title, Squiggly, SquigglyLine } from '../../elements/SquigglyTitle';

import { testimony1, testimony2, testimony3 } from '../../asset/img';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 0;
  margin-bottom: 40px;
  color: gray;
  display: grid;
  grid-template-rows: 120px auto auto auto;
  grid-template-areas:
     'title'
     'customers'
     'summary'
     'reservation';

  ${above.med`
    width: calc(100% - 170px);
    margin: 0 auto 40px;
    padding-left: 0;
    grid-template-rows: none;
    grid-template-areas:
     'title title'
     'customers customers'
     'summary reservation';
  `};
`;

// #region title
export const TitleTestimonial = styled(Title)`
  grid-area: title;

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

// #region customers
export const Customers = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -5px;
  margin-bottom: 10px;
  grid-area: customers;

  ${above.med`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
  `};
`;

export const Customer = styled.div`
  box-shadow: 0 0 2px 2px rgba(100,100,250,.1);
  border-radius: 10px;
  width: 95%;
  margin: 0 auto 10px;
  padding: 15px;
  padding-top: 20px;

  ${above.med`
    box-shadow: 0 0px 15px 5px rgba(100,100,250,.1);
    width: 32%;
    margin: unset;
    border-radius: unset;
  `};
`;

export const PersonInfo = styled.div`
  width: fit-content;
  display: grid;
  grid-template-areas:
    'image name'
    'image submittedWhen';
  margin-bottom: 20px;
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
  margin-top: 20px;
  margin-bottom: 15px;
  margin-left: -2px;
  font-size: 1.4rem;

  & > * {
    margin: 0 2px;
  }

  & > .unchecked {
    color: lightgray;
  }

  & > .checked {
    color: ${color.yellow};
  }
`;

export const Summary = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-area: summary;
  margin: 0 auto;

  & div:first-child {
    margin-right: 15px;
    color: black;
    font-weight: 600;
  }

  & div:not(:first-child) {
    width: fit-content;
  }

  /* Star rating */
  & div:nth-child(3) {
    margin: 0;
    margin-right: 10px;
  }

  ${above.med`
    margin: unset;

    & div:first-child {
      width: 100%;
      margin: 0 0 10px;
    }
  `};
`;

export const AverageScore = styled.div`
  margin-right: 10px;
  color: ${color.yellow};
`;

export const Votes = styled.div`
  color: lightgray;
  font-size: 1.4rem;
`;
// #endregion

// #region reserve
export const ReserveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: reservation;
  margin-top: 20px;

  & .reserve_contact {
    color: gray;
  }

  & span {
    color: black;
    font-weight: 600;
  }

  ${above.med`
    margin-top: unset;
    justify-content: flex-end;
  `};
`;

export const ButtonCustomers = styled(Button)`
  margin-left: 6px;
`;
// #endregion

export {
  Squiggly,
  SquigglyLine,
  Button,
  testimony1,
  testimony2,
  testimony3,
  FontAwesomeIcon,
  faStar
};