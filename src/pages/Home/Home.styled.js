import { styled } from 'styled-components';

const MainHeader = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: 50px auto;
  text-align: center;
  max-width: 550px;
`;

const HeaderSpan = styled.span`
  color: #c14646;
`;

export { MainHeader, HeaderSpan };
