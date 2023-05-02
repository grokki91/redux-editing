import { useSelector } from 'react-redux';
import './App.css';
import Add from './components/Add';
import Notes from './components/Notes';
import Edit from './components/Edit';

function App() {
  const {valueEditSwitch} = useSelector(state => state.serviceEditSwitch);

  return (
    <div className="App">
      {!valueEditSwitch ? <Add /> : <Edit />}
      <Notes />
    </div>
  );
}

export default App;
