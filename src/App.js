import './App.css';
import EmailInput from './components/email/EmailInput';
import { searchMatchEmails } from './api/requests';

function App() {
  return (
    <div className="main-container">
      <h1>To</h1>
      <EmailInput
        searchFn = {searchMatchEmails} 
      />

    <h1>CC</h1>
    <div className="cc">
        <EmailInput
          searchFn = {searchMatchEmails} 
        />
    </div>
      

    </div>
  );
}

export default App;
