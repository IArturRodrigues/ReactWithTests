import { useRecoilState, useSetRecoilState } from 'recoil';
import { errorState, participantListState } from '../atom';

const FIVE_SECONDS = 5000;

export const useAddParticipant = () => {
   const [list, setList] = useRecoilState(participantListState);
   // const setList = useSetRecoilState(participantListState);
   // const list = useRecoilValue(participantListState);
   const setError = useSetRecoilState(errorState);
   return (participantName: string) => {
      if (list.includes(participantName)) {
         setError('Nomes duplicados nao sao permitidos!');
         setTimeout(() => {
            setError('');
         }, FIVE_SECONDS);
         return;
      }
      return setList(currentList => [...currentList, participantName]);
   };
};
