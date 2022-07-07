import { doRaffleShuffle } from './doRaffleShuffle';

describe('dado um sorteio de amigo secreto', () => {
   const participants = ['Artur', 'Isabela', 'Ricardo', 'Manu', 'Bia'];

   test('cada participante nao sorteie o proprio nome', () => {
      const raffle = doRaffleShuffle(participants);
      participants.forEach(participant => {
         const secretFriend = raffle.get(participant);
         expect(secretFriend).not.toEqual(participant);
      });
   });
});

export {};
