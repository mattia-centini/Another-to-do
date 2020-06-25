const addBtn = document.querySelector(".addBtn");
const textNode = document.getElementById("form");

function addList() {
  //CREATING EACH DIV BLOCK containing the added todo text
  const addedTodo = document.createElement("div");
  addedTodo.className = "todo";
  const li = document.createElement("li");
  li.innerText = textNode.value;
  addedTodo.appendChild(li);

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.className = "delete-box";
  addedTodo.appendChild(deleteBtn);

  //complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="fas fa-check-square"></i>';
  completeBtn.className = "complete-box";
  addedTodo.appendChild(completeBtn);

  // // complete button
  // const completeBtn = document.createElement("span");
  // completeBtn.className = "fas fa-check-square";
  // li.appendChild(completeBtn);
  // // delete button
  // const deleteBtn = document.createElement("span");
  // deleteBtn.className = "fas fa-trash-alt";
  // li.appendChild(deleteBtn);

  //append div to ul
  const list = document.querySelector(".list");
  list.appendChild(addedTodo);
  textNode.value = " ";
  //add delete button
}

function createTodo() {
  addBtn.addEventListener("click", () => {
    return textNode.value === " "
      ? alert("you need to input something")
      : addList();
  });
}
createTodo();

// liItems.forEach((item, index) => {
//   if (item[index] >= 0) {
//     item.className = "fas fa-trash-alt";
//   }
// });
//
// use loops to iterate through li items
// queryselectorAll (li elements) [...]
