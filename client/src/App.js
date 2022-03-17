
import './App.css';
import RegisterStudent from './components/RegisterStudent';
import RegisterManager from './components/RegisterManager';
import RegisterStaff from './components/RegisterStaff';
import Login from './components/Login';

function App() {
  return (
    <div>
      <RegisterStaff/>
      <Login/>
      <RegisterManager/>;
      <RegisterStudent/>;
    
    </div>
  );
}

export default App;
