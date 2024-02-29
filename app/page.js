import { Fragment } from 'react';
import Herosection from './components/Herosection';
import Securesection from './components/Securesection';
import Contentsection from './components/Contentsection';

export default function Home() {
  return (
    <Fragment>
      <Herosection />
      <Securesection />
      <Contentsection />
    </Fragment>
  );
}
