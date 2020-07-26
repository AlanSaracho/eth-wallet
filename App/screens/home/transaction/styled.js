import styled from 'styled-components';
import colors from '../../../theme/colors';

export const Container = styled.View`
  padding-vertical: 8px;
  padding-horizontal: 16px;
  flex-direction: row;
  align-items: center;
`;

export const Arrow = styled.Text`
  font-size: 32px;
  transform: rotate(-30deg);
  color: white;
  font-family: 'SourceCodePro-Bold';
`;

export const CenterColumn = styled.View`
  flex: 1;
  align-self: stretch;
  margin-left: 24px;
`;
export const OperationType = styled.Text`
  font-size: 20px;
  color: ${colors.paper};
  font-family: 'SourceCodePro-Bold';
`;
export const Address = styled.Text`
  color: ${colors.paper};
  font-size: 14px;
  font-family: 'SourceCodePro-SemiBold';
  opacity: 0.7;
`;

export const RightColumn = styled.View`
  flex: 1;
  align-self: stretch;
  align-items: flex-end;
  margin-right: 16px;
`;
export const Amount = styled.Text`
  color: ${colors.paper};
  font-size: 14px;
  font-family: 'SourceCodePro-Black';
  font-size: 20px;
`;

export const Date = styled.Text`
  color: ${colors.paper};
  font-size: 14px;
  font-family: 'SourceCodePro-SemiBold';
  opacity: 0.7;
`;
