document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleTodo(e.target.new_todo.value)
    form.reset()
  })
});

function handleTodo (todo) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete)
  btn.textContext = "x";
  li.textContent = todo;
  li.appendChild(btn);
   document.querySelector("#tasks").appendChild(li);
}

function handleDelete(e){
e.target.parentNode.remove()
}