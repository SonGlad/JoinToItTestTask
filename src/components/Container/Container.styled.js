import { styled } from 'styled-components';

export const ContainersStyle = styled.div`
  min-width: 18.75rem;
  margin: 0 auto;
  /* max-width: 320px; */
  padding: 0 0.625rem;

  /* outline: 2px solid red;
  outline-offset: -2px; */

  @media screen and (min-width: 834px) {
    /* max-width: 834px; */
    padding: 0 1.5625rem;
  }

  @media screen and (min-width: 1440px) {
    /* max-width: 1440px; */
    padding: 0 2.1875rem;
  }
`;
