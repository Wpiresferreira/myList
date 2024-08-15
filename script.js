function OnLoad(e) {
  if (!localStorage.getItem("list")) {
    return;
  }
  let listItems = [];
  listItems = JSON.parse(localStorage.getItem("list"));
  const list = document.getElementById("list");
  for (let i = 0; i < listItems.length; i++) {
    const node = document.createElement("li");
    node.innerText = listItems[i];
    node.id = listItems[i];
    const removeButton = document.createElement("button");
    removeButton.innerText = "X";
    removeButton.addEventListener("click", remove);
    node.appendChild(removeButton);
    list.appendChild(node);
  }
}

function Add(e) {
  const element = document.getElementById("inputBox");
  const list = document.getElementById("list");
  const node = document.createElement("li");
  node.innerText = element.value;
  node.id = element.value;
  const removeButton = document.createElement("button");
  removeButton.innerText = "X";
  removeButton.addEventListener("click", remove);
  node.appendChild(removeButton);
  list.appendChild(node);
  let listOfItems = [];
  if (localStorage.getItem("list")) {
    listOfItems = JSON.parse(localStorage.getItem("list"));
  }
  listOfItems.push(element.value);
  localStorage.setItem("list", JSON.stringify(listOfItems));
}

function remove() {
  const list = document.getElementById("list");
  list.removeChild(this.parentElement);
  const listItems = JSON.parse(localStorage.getItem("list"));
  let result = [];
  result = listItems.filter((item) => item !== this.parentElement.id);
  localStorage.setItem("list", JSON.stringify(result));
}
