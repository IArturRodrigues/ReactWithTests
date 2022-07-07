import styled, { StyledComponent } from 'styled-components';

type IForm = StyledComponent<'form', any, {}, never> & {
   Input: StyledComponent<'input', any, {}, never>;
   Button: StyledComponent<'button', any, {}, never>;
   AlertError: StyledComponent<'p', any, {}, never>;
}

const Form = styled.form`
   margin-bottom: 2rem/* 32px */;
` as IForm;

Form.Input = styled.input`
   border-top-left-radius: 2.8125rem/* 45px */;
   border-bottom-left-radius: 2.8125rem/* 45px */;
   height: 5.125rem/* 82px */;
   padding-left: 2rem/* 32px */;
   font-size: 1.25rem/* 20px */;
   line-height: 1.75rem/* 28px */;
   border: 2px solid black;
   box-shadow: 0 2px 0 1px #000000;
   width: 70%;
   box-sizing: border-box;
   :focus {
      outline: none;
   }

   @media screen and (max-width: 800px) {
      display: block;
      width: 100%;
      border-radius: 45px;
      margin-bottom: 1.125rem;
   }
`;

Form.Button = styled.button`
   border-top-right-radius: 2.8125rem/* 45px */;
   border-bottom-right-radius: 2.8125rem/* 45px */;
   height: 5.125rem/* 82px */;
   width: 30%;
   font-size: 1.25rem/* 20px */;
   line-height: 1.75rem/* 28px */;
   border: 2px solid black;
   color: #000000;
   box-shadow: 2px 2px 0 1px #000000;
   cursor: pointer;
   background-color: #c4c4c4;
   :hover {
      opacity: .8;
   }
   :disabled {
      opacity: .6;
      cursor: not-allowed;
   }

   @media screen and (max-width: 800px) {
      display: block;
      margin-top: 1rem;
      width: 13.75rem;
      margin: 0 auto;
      border-radius: 45px;
   }
`;

Form.AlertError = styled.p`
   color: #842029;
   background-color: #f8d7da;
   padding: 1rem;
   border: 1px solid #f5c2c7;
   border-radius: 0.5rem;

   @media screen and (max-width: 800px) {
      margin: 3rem 0;
   }
`;

export { Form };
