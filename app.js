const addBtn = document.querySelector(".addBtn");
const textNode = document.getElementById("form");

function addList() {
  //CREATING EACH DIV BLOCK containing the added todo text
  const addedTodo = document.createElement("div");
  const li = document.createElement("li");
  li.innerText = textNode.value;
  addedTodo.appendChild(li);
  // complete button
  const completeBtn = document.createElement("span");
  completeBtn.className = "fas fa-check-square";
  li.appendChild(completeBtn);
  // delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.className = "fas fa-trash-alt";
  li.appendChild(deleteBtn);
  //append div to ul
  const list = document.querySelector(".list");
  list.appendChild(addedTodo);
  textNode.value = " ";
  checked();
  deleted();
}

function createTodo() {
  addBtn.addEventListener("click", () => {
    return textNode.value === " "
      ? alert("you need to input something")
      : addList();
  });
}
createTodo();

//add a line-through when clicking on complete
const checked = () => {
  const check = document.querySelector(".fa-check-square");
  check.addEventListener("click", () => {
    let li = document.querySelector("li");
    li.style.textDecoration = "line-through";
  });
};

//delete row when clicking on trash
const deleted = () => {
  const trash = document.querySelector(".fa-trash-alt");
  trash.addEventListener("click", () => {
    let li = document.querySelector("li");
    li.style.display = "none";
  });
};

//
// use loops to iterate through li items
// queryselectorAll (li elements) [...]
