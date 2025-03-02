function cardWork(cardHeading, cardBtnId) {
  document.getElementById(cardBtnId).addEventListener("click", (e) => {
    e.preventDefault();
    alert("Board updated Successfully");
    let assignedNumber = parseInt(
      document.getElementById("assigned-number").innerText
    );

    assignedNumber -= 1;
    document.getElementById("assigned-number").innerText = assignedNumber;

    let completedTaskNumber = parseInt(
      document.getElementById("completed-task-number").innerText
    );

    completedTaskNumber += 1;
    document.getElementById("completed-task-number").innerText =
      completedTaskNumber;
    const cardBtn = document.getElementById(cardBtnId);
    cardBtn.classList.add("bg-slate-200");
    cardBtn.setAttribute("disabled", "true");

    let cardHeadingText = document.getElementById(cardHeading).innerText;
    const now = new Date();
    const time = now.toLocaleTimeString();

    let div = document.createElement("div");
    div.innerHTML = `
       <div class="bg-[#F4F7FF] p-3 rounded-lg mt-2 ">
<p>You have Complete The Task ${cardHeadingText} at ${time}</p>
</div>`;

    document.getElementById("activity-wall").appendChild(div);

    let btnHasDis = [];
    const buttons = document.querySelectorAll(".card button");
    buttons.forEach((button) => {
      if (button.hasAttribute("disabled")) {
        btnHasDis.push(button);
      }
    });
    if (btnHasDis.length === 6) {
      alert("Congrates!!! You have completed all the current task");
    }
  });
}

cardWork("card-1-heading", "card-1-btn");
cardWork("card-2-heading", "card-2-btn");
cardWork("card-3-heading", "card-3-btn");
cardWork("card-4-heading", "card-4-btn");
cardWork("card-5-heading", "card-5-btn");
cardWork("card-6-heading", "card-6-btn");
