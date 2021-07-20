import React, { useEffect, useState } from 'react';
import { auth } from '../service/firebase';
// Contextを作る
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  //   auth.onAuthStateChanged(setCurrentUser)でステートに変更があったら走る
  //   誰かがログインしたら走ってcurrentUserにログイン情報が上書きされる
  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    //   Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む
    // AuthProviderのvalueにセットされたユーザー情報をのせる。
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
