import TodoApp from "./componentes/todo-app";
import "./App.css";
import Logo from './funval-logo.png';

function App() {
  return (
      <div className="contenedor">
        <div className="imgContenedor">
        <img src={Logo} alt=""/>
        </div>
        <TodoApp></TodoApp>
      </div>
  );
}

export default App;
