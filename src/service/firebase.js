import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// firebaseの初期化
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

// firebase.auth(認証系)からグーグルログインに関するProviderを呼び出す。
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

// サインインに関する関数
export const signInWithGoogle = () => {
  // サインインに関するポップアップを出す。引数として上で定数に格納したもの。
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

//ログアウト用の関数
export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // ログアウトが成功したら表示
      console.log('logged out');
      // 画面を一度更新する
      document.location.reload();
    })
    .catch((error) => {
      console.log(error.message);
    });
};
