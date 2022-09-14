import styled from 'styled-components';

const PageBlockWrapper = styled.div`
  min-height: ${({vhs}) => vhs && '100vh'};
  display: block;
  position: relative;
  z-index: 1;
  width: 96%;
  max-width: 2560px;
  margin: 0 auto;
`;

export default PageBlockWrapper;
