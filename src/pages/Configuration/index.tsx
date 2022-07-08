import { Card, Footer, Form, ParticipantList } from '@components';

function Configuration (): JSX.Element {
   return (
      <Card>
         <section>
            <h2>Vamos começar!</h2>
            <Form />
            <ParticipantList />
            <Footer />
         </section>
      </Card>
   );
}

export default Configuration;
