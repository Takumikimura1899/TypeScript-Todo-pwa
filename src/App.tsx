import './App.css';
import Header from './components/Header';
import { AuthProvider } from './provider/AuthProvider';
// 初期化されたfirebaseを呼び出す
import './service/firebase';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Header />
      </div>
    </AuthProvider>
  );
}

export default App;
