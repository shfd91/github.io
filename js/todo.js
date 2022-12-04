const toDoForm = document.querySelector("body form#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.querySelector("body ul#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// local strage는 array를 저장할 수 없어서
// JSON으로 변환해 형태만 array인 text를 저장한다.
// 추후에 JSON.parse를 이용해 text를 array로 변환한다.
function saveToDos(){
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();

}

function paintTodo(newTodo){
	const li = document.createElement("li");
	const span = document.createElement("span"); // 가운데 정렬
	const button = document.createElement("button");
	span.style.display = "inline-block";
	span.style.width = "300px"; //
	// span.style.textAlign = "center"; // ?
	li.id = newTodo.id;
	span.innerText = newTodo.text;
	button.innerText = "❌";
	button.addEventListener("click", deleteToDo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleTodoSubmit(event){
	event.preventDefault();
	const newTodo = {
		text:toDoInput.value,
		id:Date.now()
	}
	toDoInput.value = "";
	toDos.push(newTodo);
	paintTodo(newTodo);
	saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos){
	const parsedToDos = JSON.parse(savedToDos);
	parsedToDos.forEach(paintTodo);
	toDos = parsedToDos;
}


