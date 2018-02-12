import styled from 'react-emotion';

const Panel = styled.div`
  background: #fff;
  border-radius: ${p => p.theme.borderRadius};
  border: 1px solid ${p => p.theme.borderDark};
  box-shadow: ${p => p.theme.dropShadowLight};
  margin-bottom: ${p => p.theme.grid * 4}px;
  position: relative;
`;

export default Panel;
