import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

import './App.css';

function App() {
  return (
    <div className="container__page">
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
