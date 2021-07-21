import firebase from 'firebase';
import { db } from './Firebase';

// async/awaitで非同期処理を実現　通信が発生する処理なので取ってくる前にreturnするのを防ぐため
export const initGet: any = async (uid: string) => {
  // データベースから取ってくるまでawaitで待つ
  const todo = await db
    // collectionのtodoから
    .collection('todo')
    // 作られたのが新しい順から
    .orderBy('createdAt', 'desc')
    // uidが自分の物と一致するものから
    .where('uid', '==', uid);

  return todo.get().then((snapShot: any) => {
    let todos: { id: string; content: string; isComplete: boolean }[] = [];
    snapShot.forEach((doc: any) => {
      console.log(doc);

      todos.push({
        id: doc.id,
        content: doc.data().content,
        isComplete: doc.data().isComplete,
      });
    });
    return todos;
  });
};
// snapshotはtodo一個づつを表す。それをforEachで一個づつ回す
// firebaseから取得するデータは生データではなく引数で指定しているdocという形になっているので
// doc.data().content[カラム名]のように指定する必要がある。
// なので、新しく空の配列を用意してそこに必要な物を抽出してpushして新しい配列を作成してreturnする

// 追加する方法は色々あるがIDを自動で生成してくれるaddメソッドを使う
export const addTodo = (content?: string | null, uid?: string | null) => {
  db.collection('todo').add({
    content: content,
    uid: uid,
    isComplete: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
