import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const onSubitHandler = (event) => {
    event.preventDefault();
    console.error('cant add validation to uncontrol');
    alert('uncontrolled:' + inputRef.current.value);
    alert('controlled:' + inputValue);
  };
  return (
    <div className="App-header">
      <h1>Uncontrol</h1>
      <form
        onSubmit={onSubitHandler}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <input ref={inputRef} />
        <button
          type="submit"
          disabled={inputRef.current && inputRef.current.value.length < 3}
        >
          Submit With Validation
        </button>
      </form>
      <hr style={{ width: '100%' }} />
      <h1>Control</h1>
      <form
        onSubmit={onSubitHandler}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit" disabled={inputValue.length < 3}>
          Submit With Validation
        </button>
      </form>
    </div>
  );
}

export default App;
