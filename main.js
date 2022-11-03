var allTodos = [];
const titleInp = document.querySelector("#title");
const descroptionInp = document.querySelector("#description");
const prioInp = document.querySelector("#prio");
const SaveInfoBtn = document.querySelector("#saveInfo");
const todoDataAreaTbody = document.querySelector(".todo-data-area");

SaveInfoBtn.addEventListener("click",function (){
    var todoTmp = getTodoObject(titleInp.value,
        descroptionInp.value,
        prioInp.value
        );
        todoDataAreaTbody.innerHTML += todoTmp.getTableTr();
        allTodos.push(todoTmp);
        clearInputValues();
});

function clearInputValues(){
    var allInputs = document.querySelectorAll("input");
    allInputs.forEach(inputItem => {
        inputItem.value = ""
    })
    document.querySelector("textarea").value = "";
}

function getPrioClass(prio){
    if(prio == "High"){
        return "btn-danger"
    }else if (prio == "Medium"){
        return "btn-warning"
    } else if ( prio == "Low"){
        return "btn-primary"
    }
}

function getTodoObject (title,descroption,prio){
    return{
        title : title ,
        descroption : descroption , 
        prio : prio,
        getTableTr : function(){
            return `<tr>
                    <td>${this.title}</td>
                    <td>${this.descroption}</td>
                    <td class = "btn ${getPrioClass(this.prio)}">${this.prio}</td>
                    </tr>`
        }
    }

}