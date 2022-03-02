
import './App.css';
import { add, div, mul, sub } from './Cal/Cul';

function App() {
  return (
    <div>
        <ul>
          <li>sum of two num is {add(40,5)}</li>
          <li>sub of two num is {sub(40,15)}</li>
          <li>mul of two num is {mul(12,4)}</li>
          <li>div of two num is {div(14,3)}</li>
        </ul>
    </div>
  );
}

export default App;
