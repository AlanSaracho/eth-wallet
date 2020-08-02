import styled from 'styled-components';
import colors from '../../theme/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const LogoContainer = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 20%;
  padding-bottom: 50%;
  flex: 1;
`;

export const AnimatedLogo = styled.View`
  width: 100;
  height: 100;
  background-color: ${colors.secondary};
`;

export const LoginContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

export const Separator = styled.View``;

export const LoginContent = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 64px;
  background-color: ${colors.secondary};
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.TextInput`
  align-self: stretch;
  color: white;
  margin-horizontal: 32px;
  text-align: center;
  font-size: 32px;
  border-bottom-width: 4px;
  border-bottom-color: white;
  font-family: 'SourceCodePro-Regular';
`;
