import styled from 'styled-components';
import colors from '../../theme/colors';

export const Container = styled.View`
  height: 64px;
  width: 160px;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-between;
`;

export const Line = styled.View`
  height: 64px;
  width: 32px;
  background-color: ${colors.paper};
`;

export const SlashedViewsContainer = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: space-between;
  transform: rotate(-7deg) scale(1.3);
`;

export const SlashedView = styled.View`
  background-color: ${colors.secondary};
  height: 16px;
`;
