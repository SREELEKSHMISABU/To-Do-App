function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
  
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => li.remove();
  
    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  