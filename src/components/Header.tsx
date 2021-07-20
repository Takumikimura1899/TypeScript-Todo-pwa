import { signInWithGoogle } from '../service/firebase';

const Header: React.FC = () => {
  return (
    <header>
      ヘッダー
      <button onClick={signInWithGoogle}>ログイン</button>
    </header>
  );
};

export default Header;
