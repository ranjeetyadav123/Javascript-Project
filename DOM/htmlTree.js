const rootNode= document.getRootNode();

const htmlElementNode= rootNode.childNodes[1];

console.dir(htmlElementNode);


const sectionTodo= document.querySelector(".section-todo");
console.log(sectionTodo.classList);

sectionTodo.classList.add('bg-dark')
sectionTodo.classList.remove("container")

sectionTodo.classList.toggle("bg-dark")
sectionTodo.classList.toggle("bg-dark")


// document.createElement

const newTodoItem = document.createElement("li");
const newTodoItemText= document.createTextNode("Tech Student")
const todoList = document.querySelector(".todo-list");
newTodoItem.append(newTodoItemText)


todoList.append(newTodoItem)
 

console.log(newTodoItem);
