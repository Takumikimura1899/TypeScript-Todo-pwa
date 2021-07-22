// import { useContext, useEffect, useState } from 'react';
// *as Api でApiからexportされているものを全てインポートするという意味になる。一個一個インポートしても良し。
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
  Checkbox,
} from '@material-ui/core';
import * as Api from '../service/Api';
// import { AuthContext } from '../provider/AuthProvider';
// import { signInWithGoogle } from '../service/Firebase';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { NONAME } from 'dns';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 360,
    margin: 'auto',
  },
  ul: {
    paddingLeft: 0,
    listStyle: 'none',
  },
  list: {
    justifyContent: 'space-between',
  },
  button: {
    color: '#FFF',
  },
}));

const ToDoList = ({ todos, fetch }: any) => {
  const classes = useStyles();

  const deleteHandle = async (id: number) => {
    await Api.todoDelete(id);
    await fetch();
  };

  const checkHandle = async (id: any) => {
    // Api経由でisCompleteの値を更新
    await Api.toggleComplete(id);
    fetch();
  };

  const todoList = todos.map((todo: any) => {
    return (
      // <li key={todo.id}>
      //   {todo.content}
      //   <button type='button' onClick={() => deleteHandle(todo.id)}>
      //     削除
      //   </button>
      // </li>
      <ListItem key={todo.id}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>

        <Checkbox
          checked={todo.isComplete}
          onChange={() => checkHandle(todo.id)}
          name='checkedA'
        />
        <ListItemText primary={todo.content} />
        <ListItemSecondaryAction>
          <IconButton
            edge='end'
            aria-label='delete'
            onClick={() => deleteHandle(todo.id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
  return (
    <div className={classes.root}>
      <h2>あなたのToDo</h2>
      <ul className={classes.ul}>{todoList}</ul>
    </div>
  );
};

export default ToDoList;
