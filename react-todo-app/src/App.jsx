import { useEffect } from "react";
import { useState } from "react";
import classes from "./styles.module.css";
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDailog, setOpenDailog] = useState(false);

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      let result = await apiResponse.json();
      console.log(result);
      if (result?.todos && result?.todos?.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg(" ");
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg(" ");
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("some error occured ");
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
    /*here what happend is we want to get the id of current todo so we
  are passing this method function as a prop to other component
  their a button will activate and we get the todo.id and that id
  will automatically passed in the getcurrentTodoId parameter and we log it */
    console.log(getCurrentTodoId);

    try {
      const apiResponses = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoId}`
      );
      const details = await apiResponses.json();
      console.log(details);
      if (details) {
        setTodoDetails(details);
        setOpenDailog(true);
      } else {
        setTodoDetails([]);
        setOpenDailog(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    //if  we keep the dependencies empty means
    // we are fetching the data on page load
    fetchListOfTodos();
  }, []);

if(loading) return <Skeleton variant="rectangulat" width={900} height={900}/>


  return (
    <div className=" p-12">
      <h1 className="text-5xl  font-extrabold mb-5 ">
        Todo App using material UI
      </h1>

      <div className="grid gap-4 grid-cols-4">
        {todoList && todoList.length > 0
          ? // here the todolist s item is mapped to todoitem component and get
            // rendered until all the item is not passed
            todoList.map((todoitem) => (
              <TodoItem
                key={todoitem.id}
                fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
                todo={todoitem}
              />
            ))
          : null}
      </div>
      <TodoDetails
        setTodoDetails={setTodoDetails}
        setOpenDailog={setOpenDailog}
        openDailog={openDailog}
        todoDetails={todoDetails}
      />
    </div>
  );
}

export default App;
