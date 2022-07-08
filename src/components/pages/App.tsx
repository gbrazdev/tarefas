import React from 'react';
import List from '../list';
import Form from '../form';
import style from './App.module.scss';
import Crono from '../crono';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Crono />
      
      
      
    </div>
  );
}

export default App;
