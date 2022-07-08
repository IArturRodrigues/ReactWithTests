import { useParticipantList } from '@hooks/useParticipantList';
import { useShuffle } from '@hooks/useShuffle';
import { useNavigate } from 'react-router-dom';
import { Footer as SFooter } from './Footer';

function Footer (): JSX.Element {
   const participantList: string[] = useParticipantList();

   const navigate = useNavigate();

   const raffle = useShuffle();

   function start () {
      raffle();
      navigate('/sorteio');
   }

   return (
      <SFooter>
         <SFooter.Button
            disabled={participantList?.length < 3 ?? false}
            onClick={start}
         >
            Iniciar brincadeira
         </SFooter.Button>
         <img src="/imgs/sacolas.png" alt="Sacolas de compras" />
      </SFooter>
   );
}

export default Footer;
