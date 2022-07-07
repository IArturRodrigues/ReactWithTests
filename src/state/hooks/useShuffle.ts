import { useParticipantList } from './useParticipantList';
import { useSetRecoilState } from 'recoil';
import { resultSecretFriend } from '@state/atom';
import { doRaffleShuffle } from '../helpers/doRaffleShuffle';

export function useShuffle () {
   const participants = useParticipantList();

   const setResult = useSetRecoilState(resultSecretFriend);
   return () => {
      const result = doRaffleShuffle(participants);
      setResult(result);
   };
}
