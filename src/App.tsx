import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { AuthProvider } from './provider/AuthProvider';
// 初期化されたfirebaseを呼び出す
import './service/Firebase';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Header />
        <Dashboard />
      </div>
    </AuthProvider>
  );
}

export default App;
