import { useSelector } from 'react-redux';
import './App.css';
import Add from './components/Add';
import Notes from './components/Notes';
import Edit from './components/Edit';
import Filter from './components/Filter';

function App() {
  const {isEditSwitch, isFilter} = useSelector(state => state.serviceSwitch);
  const notes = useSelector(state => state.serviceList)

  return (
    <div className="App">
      {!isEditSwitch ? <Add /> : <Edit />}
      <Filter />
      {notes.length && !isFilter ? <Notes /> : ''}
    </div>
  );
}

export default App;
