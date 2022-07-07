import styled, { StyledComponent } from 'styled-components';

type IRaffle = StyledComponent<'section', any, {}, never> & {
   Participants: StyledComponent<'select', any, {}, never>;
   Button: StyledComponent<'button', any, {}, never>;
   Result: StyledComponent<'p', any, {}, never>;
}

const Raffle = styled.section`
   p {
      font-size: 1.25rem;
      font-weight: 200;
      margin: 2rem 0;
   }
` as IRaffle;

Raffle.Participants = styled.select`
   border-radius: 45px;
   height: 5.125rem;
   width: 70%;
   box-sizing: border-box;
   padding: 0 2rem;
   font-size: 1.25rem;
   border: 2px solid black;
   box-shadow: 0 2px 0 1px #000000;
   :focus {
      outline: none;
   }

   @media screen and (max-width: 800px) {
      width: 100%;
   }
`;

Raffle.Button = styled.button`
   width: 21.875rem;
   height: 5rem;
   font-size: 1.25rem;
   border-radius: 45px;
   background-color: #fe652b;
   box-shadow: 2px 2px 0 1px #000000;
   color: #FFF;
   cursor: pointer;
   margin: 1rem 0;
   :disabled {
      opacity: .6;
      cursor: not-allowed;
   }
   :hover {
      background-color: #4b69fd;
   }

   @media screen and (max-width: 800px) {
      width: 13.75rem;
      margin: 2rem 0;
   }
`;

Raffle.Result = styled.p`
   font-size: 1.5625rem;
   color: #fe652bfc;
`;

const Footer = styled.footer`
   margin: 4rem 0;
`;

export { Raffle, Footer };
