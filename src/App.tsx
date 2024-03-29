import { Github } from 'react-bootstrap-icons';
import './App.css'
import Converter from './components/Converter';
import Generator from './components/Generator';
import GuidGenerator from './components/GuidGenerator';

function App() {
  return (
    <>
      <div className="block-row">
        <Converter />
        <Generator />
        <GuidGenerator />
      </div>
      <div className="socials-row">
        <a className="act-as-button" href="https://github.com/jjh47e"><Github /></a>
      </div>
    </>
  )
}

export default App
