import './App.css';
import Frequency from './components/frequency';
import ListPeriodicals from './components/periodicals';
window.console.log = () => {}
function App() {
  return (
    <div className="App">
      <ListPeriodicals />
      <Frequency />
    </div>
  );
}

export default App;
