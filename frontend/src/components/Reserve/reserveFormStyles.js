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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${above.med`
    width: calc(100% - 170px);
    margin: 0 auto;
    flex-wrap: wrap;
    flex-direction: row;
  `};
`;

export const FormGroup = styled.div`
  width: 300px;
  margin: 5px auto;
  color: grey;
  display: flex;
  justify-content: space-between;

  ${above.med`
    width: auto;
    flex-direction: column;
    justify-content: space-around;
  `};
`;

export const FormGroupBtn = styled(FormGroup)`
  margin: 30px auto 0;

  ${above.med`
    width: 100%;
  `};
`;

export const ButtonReserve = styled(Button)`
  width: 130px;
  color: black;
  margin: 0 auto;
`;