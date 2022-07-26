import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;

  font-weight: 500;
  color: #d1512d;
  font-size: 18px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: #411530;
    border-bottom: #411530 solid 4px;
    border-radius: 2px;
  }
`;
