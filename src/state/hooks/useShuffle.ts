import { useParticipantList } from './useParticipantList';
import shuffle from 'just-shuffle';
import { useSetRecoilState } from 'recoil';
import { resultSecretFriend } from '@state/atom';

export function useShuffle () {
   const participants = useParticipantList();

   const setResult = useSetRecoilState(resultSecretFriend);
   return () => {
      const shuffled = shuffle(participants);

      const result = new Map<string, string>();

      for (let index = 0; index < participants.length; index++) {
         const friendIndex = index === (participants.length - 1) ? 0 : index + 1;

         result.set(shuffled[index], shuffled[friendIndex]);
      }

      setResult(result);
   };
}
