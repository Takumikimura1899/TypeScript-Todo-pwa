// import { useContext, useEffect, useState } from 'react';
// *as Api でApiからexportされているものを全てインポートするという意味になる。一個一個インポートしても良し。
import * as Api from '../service/Api';
// import { AuthContext } from '../provider/AuthProvider';
// import { signInWithGoogle } from '../service/Firebase';

const ToDoList = ({ todos, fetch }: any) => {
  const deleteHandle = async (id: number) => {
    await Api.todoDelete(id);
    await fetch();
  };
  const todoList = todos.map((todo: any) => {
    return (
      <li key={todo.id}>
        {todo.content}
        <button type='button' onClick={() => deleteHandle(todo.id)}>
          削除
        </button>
      </li>
    );
  });
  return (
    <div>
      <h2>あなたのToDo</h2>
      <ul>{todoList}</ul>
    </div>
  );
};

export default ToDoList;
