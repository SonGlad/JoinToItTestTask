import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { RotatingLoader } from './CustomLoaders/CustomLoaders';
import { Header } from './Header/Header';
import { AsidePanel } from './AsidePanel/AsidePanel';
import { SharedLayoutStyled } from './SharedLayout.styled';
import { Container } from './Container/Container';



export const SharedLayout = () => {


  return(
    <SharedLayoutStyled>
      <Header />
      <Container>
        <div className='main'>
          <AsidePanel/>
          <Suspense fallback={<RotatingLoader/>}>
            <main>
              <Outlet />
            </main>
          </Suspense>
        </div>
      </Container>
    </SharedLayoutStyled>
  );
};