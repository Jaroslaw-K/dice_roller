import { Component } from 'react';

import './scss/normalize.scss';
import DiceRoller from './js/DiceRoller';

class App extends Component {
  render () {
    return (
      <DiceRoller/>
    )
  }
}

export default App;
