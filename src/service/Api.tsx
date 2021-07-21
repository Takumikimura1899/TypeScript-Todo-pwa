import firebase from 'firebase';
import { db } from './Firebase';

// 追加する方法は色々あるがIDを自動で生成してくれるaddメソッドを使う

export const addTodo = (content?: string | null, uid?: string | null) => {
  db.collection('todo').add({
    content: content,
    uid: uid,
    isComplete: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
