import { useParticipantList } from '@hooks/useParticipantList';

function ParticipantList (): JSX.Element {
   const participantList: string[] = useParticipantList();

   return (
      <ul>
         {participantList?.map(participant => <li key={participant}>{participant}</li>)}
      </ul>
   );
}

export default ParticipantList;
