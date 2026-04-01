import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
}

const list = [{myName: 'Kaitlyn', myYear: 'Senior', myMajor: 'Television, Radio, and Film'}];

        function App (){
            return (
                <div> 
                <h1>My Information</h1>
                <ul>
                    {list.map(function(item) {
                        
                    })}
                </ul>
                </div>
            )
        }

        function App () {
            const handleChange = (event) => {
                console.log(event);
                console.log(event.target.value);
            };
            return (
                <div>
                    <label htmlFor="search">Search: </label>
                    <input id="search" type="text" onChange={handleChange}></input>
                </div>
            )
        }


export default App
