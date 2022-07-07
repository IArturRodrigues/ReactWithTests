import { resultSecretFriend } from './../atom';
import { useRecoilValue } from 'recoil';

export function useRaffleResult () {
   return useRecoilValue(resultSecretFriend);
}
