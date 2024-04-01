// finding Element

var todoContaine=document.querySelector(".container");
var todoForm=document.querySelector(".todo-form");
var todoInput=document.querySelector("#todoInput");
var todoButton=document.querySelector("#addTodo");
var lists=document.querySelector("#lists");
var messege=document.querySelector(".pre")




// add todos localstorage
var addTodosLocalStore=function(){
    return localStorage.getItem("myTodos")? JSON.
    parse(localStorage.getItem("myTodos")):[];
}


// formSubmit
var formSubmit=function(event){
    event.preventDefault();
    var toduValue=todoInput.value;
    var idNum=Date.now().toString();
    creteTodo(toduValue,idNum);
    showMessege("todo Added here","success");
    
        var todos=addTodosLocalStore()
        todos.push({toduValue,idNum});
        localStorage.setItem("myTodos",JSON.stringify(todos));
        todoInput.value="";
        
}

// messageShow

var showMessege=function(text,stutus){
    messege.innerHTML=`${text}`
    messege.classList.add(`bg-${stutus}`)
    setTimeout(() => {
        messege.innerHTML=``;
        messege.classList.remove(`bg-${stutus}`)

    }, 1000);
}

// add to localstore 



// createTodo
var creteTodo=function(toduValue,idNum){
    var listElement=document.createElement("li");
    listElement.classList.add("list-style");
    listElement.innerHTML=`
        <span> ${toduValue} </span>
        <span>  
        <button class="deletBtn"  id="trasBtn"> <i class="fa-solid fa-trash"></i> </button> 
        </span>
    `;
    lists.appendChild(listElement);
    var deletButon=listElement.querySelector("#trasBtn");
    // deletbutton

    deletButon.addEventListener("click",todoDeleted);
    
}

// Delete Element
var todoDeleted=function(e){
    showMessege("Todo delete successfully","danger")
    var selectList=e.target.parentElement.parentElement.parentElement;
    lists.removeChild(selectList);
    var todos=addTodosLocalStore();
    var todos=todos.filter((todo)=>todo.idNum == selectList.id);
    localStorage.setItem("myTodos",JSON.stringify(todos));

}

var contentLoad=function(){
    var todos=addTodosLocalStore();
    todos.map((tod)=> creteTodo(tod.toduValue))
}




// finding Element
todoForm.addEventListener("submit",formSubmit);
window.addEventListener("DOMContentLoaded",contentLoad);