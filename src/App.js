import { useSelector } from 'react-redux';
import './App.css';
import Add from './components/Add';
import Notes from './components/Notes';
import Edit from './components/Edit';
import Filter from './components/Filter';

function App() {
  const {isEditSwitch} = useSelector(state => state.serviceEditSwitch);
  const notes = useSelector(state => state.serviceList)

  return (
    <div className="App">
      {!isEditSwitch ? <Add /> : <Edit />}
      {notes.length > 1 ? <Filter /> : ''}
      {notes.length ? <Notes /> : 'Список пуст...'}
    </div>
  );
}

export default App;
