import React from 'react';

import { Card as ICard } from './Card';

export function Card ({ children }: { children?: React.ReactNode }): JSX.Element {
   return (
      <ICard>
         {children}
      </ICard>
   );
}

export default Card;
