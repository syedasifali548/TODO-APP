var list = document.getElementById("list")

function addTodo(){
  var todo_items =document.getElementById("todo-item");

  // li tag
  var li = document.createElement("li")
   var liText = document.createTextNode(todo_items.value)
   li.appendChild(liText);


// Delete button

var delBtn = document.createElement("button")
var delText =document.createTextNode("X")
delBtn.appendChild(delText)
delBtn.setAttribute("onclick","deleteItem(this)")


// Edit button

var editBtn = document.createElement("button")
var editText = document.createTextNode("EDIT")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick","editItem(this)")


li.appendChild(editBtn)
li.appendChild(delBtn)

   list.appendChild(li);
   todo_items.value =""
  console.log(li)
}

function deleteItem(e)
{
  e.parentNode.remove()
}

function deleteALL()
{
  list.innerHTML =""
}

// Edited value

function editItem(e)
{
 var val = e.parentNode.firstChild.nodeValue;
//  var editValue = prompt("Update your value:",val)
//  e.parentNode.firstChild.nodeValue = editValue;
var text = document.getElementById("todo-item").value=val;
var x = e.parentNode.firstChild.nodeValue = text;

}
function remove(){
  text.innerHTML=""
}
