import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import { Average } from 'components/atoms/Average/Average';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => (
  <Wrapper>
    <Average value={average}>{average}</Average>
    <StyledInfo>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </StyledInfo>
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
