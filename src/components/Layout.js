import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 960px;
  padding: 0 16px;
  margin: 0 auto;
`;

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  );
};
