function Add(e){
    const element = document.getElementById('inputBox')
    const list = document.getElementById('list');
    const node = document.createElement("li");
    node.innerText = element.value;
    node.id = element.value
    
    const removeButton = document.createElement('button')
    removeButton.innerText = 'X'
    removeButton.addEventListener("click", remove);
    
    node.appendChild(removeButton);
    list.appendChild(node);
}

function remove(){
    const list = document.getElementById('list');
    console.log(this.parentElement)
    list.removeChild(this.parentElement)
}