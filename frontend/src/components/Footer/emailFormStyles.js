import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { color } from '../../util';

export const form = styled.form`
  position: relative;
  border: 1px solid ${color.gray};
  font-size: 1.15rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  & > svg {
    color: ${color.yellow};
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const input = styled.input`
  border: none;
  height: 30px;
  width: calc(100% - 70px);
  padding-left: 30px;
  font-weight: 600;
`;

export const button = styled.button`
  background-color: ${color.yellow};
  border: none;
  border-radius: none;
  height: 30px;
  width: 70px;
  font-weight: 600;
  text-transform: uppercase;

  &:hover {
    color: white;
  }
`;

export { FontAwesomeIcon, faEnvelope };