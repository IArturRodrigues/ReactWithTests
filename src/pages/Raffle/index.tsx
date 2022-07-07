import { Card } from '@components';
import { useParticipantList } from '@hooks/useParticipantList';
import { useRaffleResult } from '@hooks/useRaffleResult';
import { useState } from 'react';

import { Raffle as SRaffle, Footer } from './Raffle';

function Raffle (): JSX.Element {
   const participantList = useParticipantList();

   const [currentParticipant, setCurrentParticipant] = useState<string>('');
   const [secretFriend, setSecretFriend] = useState<string>('');

   const result = useRaffleResult();

   function raffle (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      // if (!result.has(currentParticipant)) return;
      setSecretFriend(result.get(currentParticipant)!);
   }

   return (
      <Card>
         <SRaffle>
            <form onSubmit={raffle}>
               <SRaffle.Participants
                  name="currentParticipant"
                  id="currentParticipant"
                  placeholder="Selecione o seu nome"
                  value={currentParticipant}
                  onChange={e => setCurrentParticipant(e.target.value)}
                  required
               >
                  {participantList.map(participant => (
                     <option key={participant}>
                        {participant}
                     </option>
                  ))}
               </SRaffle.Participants>
               <SRaffle.Button>Sortear</SRaffle.Button>
            </form>
            {secretFriend && <SRaffle.Result role="alert">{secretFriend}</SRaffle.Result>}
            <Footer>
               <img src="/imgs/aviao.png" alt="Um desenho de um aviao de papel" />
            </Footer>
         </SRaffle>
      </Card>
   );
}

export default Raffle;
