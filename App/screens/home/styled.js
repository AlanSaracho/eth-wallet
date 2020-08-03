import styled from 'styled-components';
import colors from '../../theme/colors';

export const Container = styled.View`
  background-color: ${colors.primary};
  flex: 1;
`;

export const LoaderContainer = styled.View`
  padding-vertical: 30%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
`;

export const NoTransactions = styled.Text`
  text-align: center;
  color: ${colors.paper};
  font-size: 32px;
`;
