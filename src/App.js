// import logo from './logo.svg';
import './App.css';
import React from "react";
import Pagination from './components/Pagination'

function App() {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
  
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(5);

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if(loadedTodos){
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e){
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      // completed: false,
    };

    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id){
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function submitEdits(id){
    const updatedTodos = [...todos].map((todo) => {
      if(todo.id === id){
        todo.text = editingText;
      }
      return todo;
    })
    setTodos(updatedTodos);
    setTodoEditing(null);

  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = todos.slice(indexOfFirstPost, indexOfLastPost);
  
  // console.log('dd' + todos.length);
  // const modList = todos.slice(0,5);
  // console.log(modList[0].text);
  // const noOfPages = todos.length/5;
  
const paginate = (pNumber) => setCurrentPage(pNumber)

  return (
    <div className="App">
      <h2>List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button type="submit">Add</button>
      </form>

      {currentPosts.map((todo) => (
        <><div key={todo.id} className="todo">
          {todo.id === todoEditing ? (
            <input type="text" onChange={(e) => setEditingText(e.target.value)} />

          ) : (
            <div>{todo.text}</div>
          )}
        </div><div className='todo-actions'>
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>

          </>
      ))}
      <footer>
    <Pagination postsPerPage={postsPerPage} totalPosts={todos.length} paginate={paginate}/>
    </footer>
    </div>
    

  );
};

export default App;
