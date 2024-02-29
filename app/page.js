import { Fragment } from 'react';
import Herosection from './components/Herosection';
import Securesection from './components/Securesection';

export default function Home() {
  return (
    <Fragment>
      <Herosection />
      <Securesection />
    </Fragment>
  );
}
