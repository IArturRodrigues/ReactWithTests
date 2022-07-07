import styled, { StyledComponent } from 'styled-components';

type IFooter = StyledComponent<'footer', any, {}, never> & {
   Button: StyledComponent<'button', any, {}, never>;
}

const Footer = styled.footer`
   display: flex;
   align-items: center;
   justify-content: space-between;

   @media screen and (max-width: 800px) {
      flex-direction: column;
      img {
         margin-top: 2rem;
      }
   }
` as IFooter;

Footer.Button = styled.button`
   width: 21.875rem;
   height: 5rem;
   font-size: 1.25rem;
   box-shadow: 2px 2px 0 1px #000000;
   border-radius: 45px;
   background-color: #f3652b;
   color: #FFF;
   cursor: pointer;

   :hover {
      background-color: #4b69fd;
   }

   :disabled {
      opacity: .6;
      cursor: not-allowed;
   }

   @media screen and (max-width: 800px) {
      width: 13.75rem;
      margin: 2rem 0;
   }
`;

export { Footer };
