import logo from './logo.svg';
import UserForm from './components/UserForm/UserForm.js';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <img className='backgroundImg' src={require('./assets/cover_ava.jpg')} alt='cover' />
        <div className='userFormOverlay'>
          <UserForm />
        </div>
      </div>
    </>
  );
}

export default App;
