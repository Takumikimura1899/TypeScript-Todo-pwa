import { useContext, useEffect, useState } from 'react';

import AuthProvider, { AuthContext } from '../provider/AuthProvider';
import { signInWithGoogle } from '../service/firebase';

const Dashboard = () => {
  const currentUser = useContext(AuthContext);

  const formRender = () => {
    let dom;

    if (currentUser.currentUser) {
      dom = (
        <form action=''>
          <input type='text' placeholder='ToDoName' />
          <button>追加</button>
        </form>
      );
    } else {
      dom = <button onClick={signInWithGoogle}>ログイン</button>;
    }
    return dom;
  };

  return <div>{formRender()}</div>;
};

export default Dashboard;
