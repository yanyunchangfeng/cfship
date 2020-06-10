import React,{useRef} from 'react';
import logo from './logo.svg';
import './styles/index.scss';
import Button from './components/Button/button'
import useClickOutside from './hooks/useClickOutside';


function App() {
  const ref = useRef<HTMLInputElement>(null)
  useClickOutside(ref,()=>{
    console.log('不在input框类')
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button href={'ddd'} autoFocus>Hello</Button>
        <Button btnType={'primary'} size ={'lg'} disabled>Hello</Button>
        <Button btnType={'link'} href={'http://baidu.com'} disabled >Hello</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input type="text" ref={ref}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
