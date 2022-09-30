import './App.css';
import Exercise from './Components/Exercise/Exercise';
import Header from './Components/Header/Header';
import Answer from './Components/Answers/Answer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Exercise></Exercise>
      <Answer></Answer>
    </div>
  );
}

export default App;
