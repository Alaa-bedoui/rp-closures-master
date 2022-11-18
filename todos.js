// generateID is a *function* that, when invoked, returns a number representing
// an ID.
var generateID = makeCounter();
// By using a counter, we have a function that will always generate a new number
// -- this is great for generating unique IDs for things.

// Try the following at your console:

// generateID(); // => ?

// What does it return? Try invoking generateID a few more times to be certain
// of how it works.

// EXERCISE 1
var todos = [];
function todoFactory(task) {
  return {
    task: task,
    complete: false,            // todos always start as incomplete
    id: generateID()            // use generateID to make an ID for this todo
  };
}

// EXERCISE 2
function displayTodo(todo) {
  // your code here
}

// var myTodoList = makeTodoList(???);

// makeTodoList accepts an *array* of todo objects as a parameter, and returns
// an object with methods for manipulating todos
function makeTodoList(initialTodos) {
  var todos = initialTodos;

  return {
    display: function() {
      // EXERCISE 3
    },
    add: function(task) {
      // EXERCISE 4
    }
  };
}

// =============================================================================
// HELPER FUNCTIONS

function makeCounter() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}
var generateId=makeCounter() 
var todos = [];
function todoFactory(task) {
  return {
    task: task,
complete: false, 
id: generateId()  
};
}
var generateID = makeCounter();
var todo1 = todoFactory('brush my teeth'); 
var todo2= todoFactory('have breakfast');
var todo3=todoFactory('play football');
var todo4=todoFactory('take a nap')
var todos=[todo1,todo2,todo3] 
function makeToDoList(initialTodos){ 
    var x =''
    for (i=0;i<todos.length;i++){
     x = x+ todos[i].task + ' ' + todos[i].completed + ' ' + todos[i].id + '\n'
}return x}
var todos=[todo1,todo2,todo3,todo4]
function add(task){
   return todos.push(todoFactory(task))
}
