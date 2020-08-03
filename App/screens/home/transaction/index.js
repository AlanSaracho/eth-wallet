import React, {useMemo} from 'react';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {toUpper} from 'lodash';
import EthVal from 'ethval';
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

const Transaction = ({value, timestamp, from, to}) => {
  const address = useSelector((state) => state.wallet.address);
  const isDeposit = toUpper(from) === toUpper(address);
  const color = isDeposit ? colors.primary : colors.paper;
  const rotate = isDeposit ? '-215deg' : '-30deg';
  const date = useMemo(() => moment.unix(timestamp).format('ll'), [timestamp]);
  const ethValue = useMemo(() => new EthVal(value).toEth().toFixed(4), [value]);
  return (
    <Container>
      <Arrow style={{color, transform: [{rotate}]}}>{'->'}</Arrow>
      <CenterColumn>
        <OperationType
          style={{color}}
          children={isDeposit ? 'Deposit' : 'Transfer'}
        />
        <Address children={isDeposit ? from : to} />
      </CenterColumn>
      <RightColumn>
        <Amount children={`${ethValue} ETH`} />
        <Date children={date} />
      </RightColumn>
    </Container>
  );
};

export default Transaction;
