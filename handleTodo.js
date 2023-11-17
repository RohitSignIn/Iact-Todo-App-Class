const todoText = document.getElementById("todo_text");
const todoListCon = document.getElementById("todo_list_con");

function handleOnClick() {
  receivedTodo = todoText.value;

  const con = document.createElement("div");
  const input = document.createElement("input");
  const RemButton = document.createElement("button");
  const EditButton = document.createElement("button");

  con.classList.add("todo_list");
  input.setAttribute("disabled", "disabled");
  input.setAttribute("value", receivedTodo);
  RemButton.textContent = "Remove";
  EditButton.textContent = "Edit";

  RemButton.addEventListener("click", (e) => handleRemoveClick(e));
  EditButton.addEventListener("click", (e) => handleEditClick(e));

  con.appendChild(input);
  con.appendChild(RemButton);
  con.appendChild(EditButton);

  todoListCon.appendChild(con);

  todoText.value = "";
}

function handleRemoveClick(e) {
  e.target.parentNode.remove();
}

function handleEditClick(e) {
  const inputTag = e.target.previousElementSibling.previousElementSibling;
  if (inputTag.hasAttribute("disabled")) {
    inputTag.removeAttribute("disabled");
  } else {
    inputTag.setAttribute("disabled", "disabled");
  }
}
