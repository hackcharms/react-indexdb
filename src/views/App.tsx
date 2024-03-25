import { useEffect, useState } from "react";
import TodoCard from "../components/todo/Card";
// import { useDatabase } from "../hooks/database";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  // const { todos, addTodo, removeTodo } = useTodo([]);
  useEffect(() => {
    setTimeout(() => {
      const db = window.db as IDBDatabase;
      const transaction = db?.transaction(["todoSchema"], "readwrite");
      if (transaction) {
        console.log("transaction.oncomplete");
        const objectStore = transaction?.objectStore("todoSchema");
        console.log("objectStore", objectStore);
        if (transaction) updateTheList(objectStore);
        transaction.oncomplete = () => {};
        console.log("transaction avaiable now", transaction);
      } else {
        console.log("transaction not avaiable", transaction);
      }
      // transaction.oncomplete=(){}
    }, 100);
  }, []);
  function updateTheList(objectStore: IDBObjectStore) {
    if (!objectStore) return;
    const allEntries = objectStore?.getAll();
    allEntries.onsuccess = (event) => {
      console.log("allEntries.onsuccess", event?.target?.result);
      setTodos(event?.target?.result);
      // (event?.target?.result as ITodo[]).forEach((todo) => {
      //   addTodo(todo);
      // });
    };
  }
  function addTodoInIDB(todo: ITodo) {
    const transaction = window.db.transaction(["todoSchema"], "readwrite");
    const objectStore = transaction.objectStore("todoSchema");
    const query = objectStore.add(todo);
    query.addEventListener("success", () => {
      setTitle("");
      updateTheList(objectStore);
    });
    transaction.addEventListener("complete", () => {
      console.log("completed");
      updateTheList(objectStore);
    });
    transaction.addEventListener("error", () =>
      console.log("Transaction error")
    );
  }
  async function storeTodo() {
    const todo = {
      id: Date.now(),
      title: title,
      description: description ,
      createdAt: new Date().toLocaleString(),
      updatedAt: "",
    };
    addTodoInIDB(todo);
  }
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h2 className="text-base font-bold text-indigo-600">
          We have the best equipment
        </h2>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Check our Todo List
        </h1>
        {JSON.stringify(todos)}
      </div>
      <div className="text-end">
        <form className="w-full max-w-xl  rounded-lg px-4 pt-2">
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Add a new comment
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <input
                value={title}
                onInput={(event) => setTitle(event?.target?.value)}
                placeholder="Type Your Title"
                className="bg-gray-300 rounded border border-gray-400 leading-normal w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-gray-400"
              />
              <textarea
                className="bg-gray-300 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-gray-400"
                name="body"
                placeholder="Type Your Comment"
                value={description}
                onInput={(event) => setDescription(event?.target?.value)}
                required
              ></textarea>
            </div>
            <div className="w-full md:w-full flex items-start  px-3">
              <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                <svg
                  fill="none"
                  className="w-5 h-5 text-gray-600 mr-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xs md:text-sm pt-px">Some HTML is okay.</p>
              </div>
              <div className="-mr-1">
                <button
                  type="button"
                  onClick={storeTodo}
                  className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Add Todo
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {todos.map((todo) => (
          <TodoCard {...todo} key={todo.id} />
        ))}
      </div>
    </section>
  );
}

export default App;
