import { useParticipantList } from '@hooks/useParticipantList';
import { useRaffleResult } from '@hooks/useRaffleResult';
import { useState } from 'react';

function Raffle (): JSX.Element {
   const participantList = useParticipantList();

   const [currentParticipant, setCurrentParticipant] = useState<string>('');
   const [secretFriend, setSecretFriend] = useState<string>('');

   const result = useRaffleResult();

   function raffle (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      if (!result.has(currentParticipant)) return;
      setSecretFriend(result.get(currentParticipant)!);
   }

   return (
      <section>
         <form onSubmit={raffle}>
            <select
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
            </select>
            <button>Sortear</button>
         </form>
         {secretFriend && <p role="alert">{secretFriend}</p>}
      </section>
   );
}

export default Raffle;
