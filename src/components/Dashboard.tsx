import { useContext, useEffect, useState, useCallback } from 'react';
// *as Api でApiからexportされているものを全てインポートするという意味になる。一個一個インポートしても良し。
import * as Api from '../service/Api';
import { AuthContext } from '../provider/AuthProvider';
import { signInWithGoogle } from '../service/Firebase';
import ToDoList from './ToDoList';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  form: {
    width: '100%',
    maxWidth: 360,
    margin: 'auto',
    marginBottom: 40,
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  input: {
    marginRight: '10px',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
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
          className={classes.form}
          action='submit'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <TextField
            type='text'
            className={classes.input}
            value={inputName}
            placeholder='ToDoName'
            onChange={(e) => setInputName(e.currentTarget.value)}
          />
          {/*  <button　type="button" onClick={() => post()}>追加</button>にすると 送信時の更新が発生しないのでこちらでもよし */}
          <Button
            variant='contained'
            color='primary'
            size='small'
            disabled={inputName.length > 0 ? false : true}
            onClick={() => post()}
          >
            追加
          </Button>
        </form>
      );
    } else {
      dom = <button onClick={signInWithGoogle}>ログイン</button>;
    }
    return dom;
  };

  return (
    <div className={classes.root}>
      <br />
      {formRender()}
      <ToDoList todos={todos} fetch={fetch} />
    </div>
  );
};

export default Dashboard;
