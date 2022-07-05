import { useSetRecoilState } from 'recoil';
import { participantListState } from '../state/atom';

export const useAddParticipant = () => {
   const setList = useSetRecoilState(participantListState);
   return (participantName: string) => {
      return setList(currentList => [...currentList, participantName]);
   };
};
