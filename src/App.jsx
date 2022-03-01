import { useState } from 'react';
import *  as math from 'mathjs'
import './App.css';

function App() {

  const [display, setDisplay] = useState("")
  const [bracketPair, setBracketPair] = useState(false)
  
  const escreveNumero = (e) => {
    setDisplay(display + e.target.firstChild.data)
  }

  const escreveOperador = (e) => {
    setDisplay(display + ' ' + e.target.firstChild.data + ' ')
  }

  const Power = () => {
    setDisplay(display + ' ^ ')
  }

  const SqRoot = (e) => {
    setDisplay(math.sqrt(display))
  }

  const limpar = () => {
    setDisplay("")
    setBracketPair(false)
  }

  const calcular = () => {
    setDisplay(math.evaluate(display))
  }

  const bracket = () => {
    if (bracketPair === false){
      setBracketPair(true)
      setDisplay(display + "(")
    } else {
      setBracketPair(false)
      setDisplay(display + ")")
    }
  }

  return (
    <div className="App">
      <div className="calcDisplay">{display}</div>
      <div className="linha">
        <button className="operators" onClick={limpar}>Clear</button>
        <button className="operators" onClick={bracket}>( )</button>
        <button className="operators" onClick={Power}>Pow</button>
        <button className="operators" onClick={SqRoot}>SqRoot</button>
      </div>
      <div className="linha">
      </div>
      <div className="linha">
        <button className="numbers" onClick={escreveNumero}>1</button>
        <button className="numbers" onClick={escreveNumero}>2</button>
        <button className="numbers" onClick={escreveNumero}>3</button>
        <button className="operators" onClick={escreveOperador}>+</button>
      </div>
      <div className="linha">
        <button className="numbers" onClick={escreveNumero}>4</button>
        <button className="numbers" onClick={escreveNumero}>5</button>
        <button className="numbers" onClick={escreveNumero}>6</button>
        <button className="operators" onClick={escreveOperador}>-</button>
      </div>
      <div className="linha">
        <button className="numbers" onClick={escreveNumero}>7</button>
        <button className="numbers" onClick={escreveNumero}>8</button>
        <button className="numbers" onClick={escreveNumero}>9</button>
        <button className="operators" onClick={escreveOperador}>*</button>
      </div>
      <div className="linha">
        <button>,</button>
        <button className="numbers" onClick={escreveNumero}>0</button>
        <button id='equals' onClick={calcular}>=</button>
        <button className="operators" onClick={escreveOperador}>/</button>
      </div>
    </div>
  );
}

export default App;
