import SHeader from './Header';

function Header (): JSX.Element {
   return (
      <SHeader>
         <SHeader.Logo aria-label='Logo do sorteador' role="img"></SHeader.Logo>
         <SHeader.Participant src='/imgs/participante.png' />
      </SHeader>
   );
}

export default Header;
