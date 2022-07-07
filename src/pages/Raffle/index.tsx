import { useParticipantList } from '@hooks/useParticipantList';

function Raffle (): JSX.Element {
   const participantList = useParticipantList();
   
   return (
      <section>
         <form action="">
            <select name="currentParticipant" id="currentParticipant">
               {participantList.map(participant => (
                  <option key={participant}>
                     {participant}
                  </option>
               ))}
            </select>
         </form>
      </section>
   );
}

export default Raffle;
