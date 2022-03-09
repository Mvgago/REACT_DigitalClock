import './App.css';
import Digitalclock from './components/Digitalclock';
import Countdown from './components/Countdown';
import Stopwatch from './components/Stopwatch';

function App() {

  const endTime = new Date().getTime() + 60000 * 2; //2 minutes
  const [timeLeft, setEndTime] = Countdown(endTime);


  const minutes = Math.floor(timeLeft/ 60000) % 60;
  const seconds = Math.floor(timeLeft/ 1000) % 60;
  
   return (
    <div className="App">
      <Digitalclock />
      <Stopwatch /> 

      <p>{`${minutes}:${seconds}`}</p>
      <button onClick={() => setEndTime(endTime)}>Reset</button>

    
     
    </div>
  );
}

export default App;
