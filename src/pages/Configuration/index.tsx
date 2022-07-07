import { Card, Footer, Form, ParticipantList } from '@components';

function Configuration (): JSX.Element {
   return (
      <Card>
         <section>
            <Form />
            <ParticipantList />
            <Footer />
         </section>
      </Card>
   );
}

export default Configuration;
