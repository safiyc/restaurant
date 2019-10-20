import styled from 'styled-components';
import { Button } from '../../elements/Button';
import { above, color } from '../../util';

export const Wrapper = styled.div`
  border-top: 12px solid ${color.yellow};
  margin-bottom: 60px;

  & h3 {
    margin-top: 60px;
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 400px;
  margin: 0 auto 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${above.med`
    width: 760px;
    flex-direction: row;
    flex-wrap: wrap;
  `};
`;

export const FormGroup = styled.div`
  width: 300px;
  margin: 5px auto;
  color: grey;
  display: flex;
  justify-content: space-between;

  input, DatePicker {
    text-align: center;
    width: 200px;
  }

  ${above.med`
    width: auto;
    flex-direction: column;
    justify-content: space-around;
  `};
`;

export const BtnContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  position: relative;
`;

export const ButtonReserve = styled(Button)`
  width: 130px;
  color: black;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
`;