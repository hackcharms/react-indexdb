function AddTodo(params) {
  return (
    <div className="min-w-screen min-h-screen bg-gray-800 flex items-center justify-center px-5 py-5">
      <div
        className="w-full mx-auto rounded-lg border border-gray-700 p-8 lg:py-12 lg:px-14 text-gray-300"
        style="max-width: 800px"
        x-data="app()"
        x-init="addItem()"
      >
        <div className="mb-10">
          <h1 className="text-2xl font-bold">
            <i className="mdi mdi-star text-yellow-300 text-3xl leading-none align-bottom"></i>{" "}
            Todos
          </h1>
        </div>
        <div className="mb-10">
          <ul v-if="todos.length" className="-mx-1">
            <li
              x-for="(item,index) in todos"
              onClick="focusItem(index)"
              onDoubleClick="openItem(index)"
              className={
                item.open
                  ? "bg-gray-700 shadow-lg px-4 py-4 my-10 -mx-2 "
                  : " mb-1 cursor-pointer " + item.focused
                  ? " bg-indigo-800 "
                  : "" + " px-2 py-2 rounded transition-all flex text-md"
              }
              key="index"
            >
              <div className="flex-none w-10 leading-none">
                <input
                  type="checkbox"
                  checked="{item.checked}"
                  onClick="item.checked=!item.checked"
                />
              </div>
              <div className="flex-grow max-w-full">
                <div className="w-full leading-none">
                  <h3
                    className={
                      "text-md leading-none truncate w-full pr-10 " +
                      item.title.length
                        ? "text-gray-300"
                        : "text-gray-500"
                    }
                    x-show="!item.open"
                  >
                    {item.title || "New todo..."}
                  </h3>
                  <input
                    type="text"
                    x-show="item.open"
                    className="text-md w-full bg-transparent text-gray-300 leading-none focus:outline-none mb-2"
                    x-model="item.title"
                    id={`titleField${index}`}
                    placeholder="New todo..."
                  />
                </div>
                <div className="w-full" x-show="item.open">
                  <textarea
                    className="text-md w-full bg-transparent text-gray-300 leading-tight focus:outline-none"
                    rows="10"
                    x-model="item.notes"
                    placeholder="Notes"
                  ></textarea>
                </div>
                <div className="w-full flex justify-end" x-show="item.open">
                  <button
                    className="p-1 -mr-1 focus:outline-none hover:text-red-300"
                    onClick={() => removeItem(index)}
                  >
                    <i className="mdi mdi-trash-can-outline"></i>
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <template x-if="!todos.length">
            <p className="text-gray-500">No todos</p>
          </template>
        </div>
        <div className="flex justify-center">
          <button
            className="py-1 px-10 border border-gray-800 hover:border-gray-700 rounded leading-none focus:outline-none text-xl"
            onClick="addItem()"
          >
            <i className="mdi mdi-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;