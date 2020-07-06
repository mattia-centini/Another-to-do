document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector(".addBtn");
  const textNode = document.getElementById("form");

  // Create a "close" button and append it to each list item

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
    //add an event to delete the li
    deleteBtn.addEventListener("click", removeItem);

    //complete button
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fas fa-check-square"></i>';
    completeBtn.className = "complete-box";
    addedTodo.appendChild(completeBtn);
    //add an event to complete the li
    completeBtn.addEventListener("click", completeItem);

    //append div to ul
    const list = document.querySelector(".list");
    list.appendChild(addedTodo);
    textNode.value = " ";
  }

  //add list item when clicking on + button
  addBtn.addEventListener("click", () => {
    return textNode.value === " "
      ? alert("you need to input something")
      : addList();
  });

  //add list item when pressing enter key
  textNode.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector(".addBtn").click();
    }
  });

  //turn background li green when pressing check button
  function completeItem() {
    //grab the div container
    let item = this.parentNode;
    console.log(item);
    if (item.className === "todo") {
      item.classList.add("complete");
    } else {
      item.classList.toggle("complete");
    }
  }

  //remove li when pressing trash button
  function removeItem() {
    //grab the div container
    let item = this.parentNode;
    console.log(item);
    if (item.className === "todo") {
      item.classList.add("fall");
      document.addEventListener("transitionend", () => {
        item.remove();
      });
    }
  }
});
