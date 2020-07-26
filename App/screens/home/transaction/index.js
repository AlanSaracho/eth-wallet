import React from 'react';
import PropTypes from 'prop-types';
import {toUpper} from 'lodash';
import colors from '../../../theme/colors';
import {
  Container,
  Arrow,
  CenterColumn,
  Address,
  OperationType,
  RightColumn,
  Amount,
  Date,
} from './styled';

const Transaction = () => {
  const isDeposit = false;
  const color = isDeposit ? colors.primary : colors.paper;
  const rotate = isDeposit ? '-215deg' : '-30deg';

  return (
    <Container>
      <Arrow style={{color, transform: [{rotate}]}}>{'->'}</Arrow>
      <CenterColumn>
        <OperationType
          style={{color}}
          children={isDeposit ? 'Deposit' : 'Transfer'}
        />
        <Address children={'0xFF382B2A3C'} />
      </CenterColumn>
      <RightColumn>
        <Amount children={'200 RSK'} />
        <Date children={'May 26'} />
      </RightColumn>
    </Container>
  );
};

export default Transaction;
