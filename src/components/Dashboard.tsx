import { useContext, useEffect, useState, useCallback } from 'react';
// *as Api でApiからexportされているものを全てインポートするという意味になる。一個一個インポートしても良し。
import * as Api from '../service/Api';
import { AuthContext } from '../provider/AuthProvider';
import { signInWithGoogle } from '../service/Firebase';
import ToDoList from './ToDoList';

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);
  console.log(inputName);
  console.log(todos);

  const fetch = useCallback(async () => {
    if (currentUser.currentUser) {
      const data = await Api.initGet(currentUser.currentUser.uid);
      setTodos(data);
    }
  }, [currentUser.currentUser]);

  useEffect(() => {
    // Todo一覧を取得
    fetch();
  }, [fetch]);

  const post = () => {
    // asでインポートしてきているので.繋ぎでアクセスできる。
    Api.addTodo(inputName, currentUser.currentUser.uid);
    setInputName('');
    fetch();
  };

  const formRender = () => {
    let dom;

    if (currentUser.currentUser) {
      dom = (
        <form
          action='submit'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type='text'
            value={inputName}
            placeholder='ToDoName'
            onChange={(e) => setInputName(e.currentTarget.value)}
          />
          {/*  <button　type="button" onClick={() => post()}>追加</button>にすると 送信時の更新が発生しないのでこちらでもよし */}
          <button onClick={() => post()}>追加</button>
        </form>
      );
    } else {
      dom = <button onClick={signInWithGoogle}>ログイン</button>;
    }
    return dom;
  };

  return (
    <div>
      <br />
      {formRender()}
      <ToDoList todos={todos} fetch={fetch} />
    </div>
  );
};

export default Dashboard;
