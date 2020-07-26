import styled from 'styled-components';
import colors from '../../theme/colors';

export const Container = styled.View`
  background-color: ${colors.secondary};
  flex: 1;
`;

export const HeaderContainer = styled.View`
  background-color: ${colors.primary};
`;

export const HeaderInfoContainer = styled.View`
  padding-horizontal: 16px;
  padding-top: 32px;
  align-items: center;
`;

export const Balance = styled.Text`
  align-self: stretch;
  color: ${colors.paper};
  text-align: center;
  font-size: 32px;
  font-family: 'SourceCodePro-SemiBold';
  margin-top: 16px;
`;

export const WalletName = styled.Text`
  align-self: stretch;
  color: ${colors.paper};
  font-size: 16px;
  text-align: center;
  font-family: 'SourceCodePro-Regular';
  margin-top: 4px;
`;
