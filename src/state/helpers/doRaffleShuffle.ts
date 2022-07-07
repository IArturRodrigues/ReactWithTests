// import shuffle from 'shuffle-array';

export function doRaffleShuffle (participants: string[]): Map<string, string> {
   const shuffleParticipants = [...participants];
   const shuffled = shuffle(shuffleParticipants);
   const result = new Map<string, string>();

   for (let index = 0; index < participants.length; index++) {
      const friendIndex = index === (participants.length - 1) ? 0 : index + 1;
      result.set(shuffled[index], shuffled[friendIndex]);
   }

   return result;
}

function shuffle (array: any[]) {
   // const shuffledArray = [...array];
   let currentIndex = array.length;
   let randomIndex: number;

   // While there remain elements to shuffle.
   while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      // [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [array[randomIndex], array[currentIndex]];
   }

   // array = shuffledArray;

   return array;
}
