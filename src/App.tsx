/*
 * @Author: kingford
 * @Date: 2021-05-14 22:19:53
 * @LastEditTime: 2021-05-17 21:52:28
 */
import React from 'react';
import Button from './components/Button'
import Icon from './components/Icon'
import { faCoffee, faAngleDown, faAd } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <Button>Hello</Button>
      <Icon icon={faCoffee} spin></Icon>
      <Icon icon={faAngleDown} pulse></Icon>
      <Icon icon={faAd} ></Icon>

    </div>
  );
}

export default App;
