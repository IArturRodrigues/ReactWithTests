import { participantListState } from '../atom';
import { useRecoilValue } from 'recoil';

export const useParticipantList = (): string[] => {
   return useRecoilValue(participantListState);
};
