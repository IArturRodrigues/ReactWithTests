import { atom } from 'recoil';

export const participantListState = atom<string[]>({
   key: 'participantListState',
   default: []
});

export const resultSecretFriend = atom<Map<string, string>>({
   key: 'resultSecretFriend',
   default: new Map()
});

export const errorState = atom<string>({
   key: 'errorState',
   default: ''
});
