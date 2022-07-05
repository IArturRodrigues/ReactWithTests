import styled, { StyledComponent } from 'styled-components';

type IHeader = StyledComponent<'header', any, {}, never> & {
   Logo: StyledComponent<'div', any, {}, never>;
   Participant: StyledComponent<'img', any, {}, never>;
}

const Header = styled.header`
   display: flex;
   justify-content: space-around;
   padding-top: 7.5rem;

   @media screen and (max-width: 800px) {
      padding-top: 3.75rem;
      flex-direction: column;
      align-items: center;
   }
` as IHeader;

Header.Logo = styled.div`
   background-image: url('/imgs/logo.png');
   width: 21.9375rem;
   height: 7.3125rem;

   @media screen and (max-width: 800px) {
      background-image: url('/imgs/logo-pequeno.png');
      width: 14.6875rem;
      height: 12.4375rem;
   }
`;

Header.Participant = styled.img`
   z-index: 1;
`;

export default Header;
