// document.getElementById("card-1-btn").addEventListener("click", (e) => {
//   e.preventDefault();
//   alert("Board updated Successfully");
//  let assignedNumber = parseInt(document.getElementById("assigned-number").innerText)
//   console.log(assignedNumber);
//   assignedNumber -= 1;
//   document.getElementById("assigned-number").innerText = assignedNumber;

//   let completedTaskNumber = parseInt(document.getElementById("completed-task-number").innerText)
//   completedTaskNumber += 1;
//   document.getElementById("completed-task-number").innerText = completedTaskNumber;
//  const cardBtn =  document.getElementById("card-1-btn")
//  cardBtn.classList.add("bg-slate-200")
//  cardBtn.setAttribute("disabled", "true")

// });

function cardWork(cardId){

    document.getElementById(cardId).addEventListener("click", (e) => {
        e.preventDefault();
        alert("Board updated Successfully");
       let assignedNumber = parseInt(document.getElementById("assigned-number").innerText)
        console.log(assignedNumber);
        assignedNumber -= 1;
        document.getElementById("assigned-number").innerText = assignedNumber;
      
        let completedTaskNumber = parseInt(document.getElementById("completed-task-number").innerText)
        completedTaskNumber += 1;
        document.getElementById("completed-task-number").innerText = completedTaskNumber;
       const cardBtn =  document.getElementById(cardId)
       cardBtn.classList.add("bg-slate-200")
       cardBtn.setAttribute("disabled", "true")


       
      
      });
      
}


cardWork("card-1-btn")
cardWork("card-2-btn")
cardWork("card-3-btn")
cardWork("card-4-btn")
cardWork("card-5-btn")
cardWork("card-6-btn")