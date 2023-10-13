import logo from './logo.svg';
import './App.css';
// import TaskListComponent from './components/container/TaskList';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import Ejemplo3 from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <Ejemplo3></Ejemplo3> */}
        <Ejemplo4 nombre={'Roman'}>
          <div>Hola locoooo</div>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
