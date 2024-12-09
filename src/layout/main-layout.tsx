import styled from '@emotion/styled';

interface MainLayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  width: 100%;
`;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
};
