import "./App.scss";
import React, { useEffect, useState } from "react";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
import queryString from 'query-string'
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";
import MagicBox from "./components/MagicBox";
function App() {
  const [postList, setPostList] = useState([]);

  const[pagination, setPagination]= useState({
    _page:1,
    _limit:10,
    _totalRows:1
  })

  const[filters, setFilters] = useState({
    _limit:10,
    _page:1,
    // title_like:''
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters)
        const requestUrl =`http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        //su dung thu vien fetch
        const respose = await fetch(requestUrl);
        const responseJSON = await respose.json();
        console.log({ responseJSON });

        //lay data
        const { data ,pagination} = responseJSON;
        setPostList(data);
        setPagination(pagination)
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostList();
  }, [filters]); //chay dung 1 lan dau)

  function handlePageChange(newPage){
    console.log('New page :', newPage)
    setFilters({
      ...filters,
      _page:newPage
    })
  }

  const [todoList, setTodoList] = useState([
    { id: 1, title: "chao khai" },
    { id: 2, title: "chao khai 1" },
    { id: 3, title: "chao khai 2" },
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    //clone new array
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  //lay props
  function handleTodoFormSubmit(formValues) {
    //add new todo current todo
    const newTodoList = [...todoList];
    const newTodo = {
      id: todoList.length + 1,
      ...formValues, //lay tat ca key trong form values
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleFiltersChange(newFilters){
    console.log('New filters :', newFilters)
    setFilters({
      ...filters,
      _page:1,
      title_like: newFilters.searchTerm
    })

  }

  const [showClock, setShowClock] = useState(true)

  return (
    <div className="App">

      <MagicBox />
      {/* <h1>Post List</h1>
      <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
    
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

      {/* {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
      <button onClick={() => setShowClock(true)}>Show Clock</button>
      <BetterClock /> */}

    </div>
  );
}

export default App;
