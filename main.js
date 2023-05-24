const root = document.querySelector(":root");
const container = document.querySelector(".container");
const newTaskInput = document.getElementById("new_task_input");
const taskForm = document.getElementById("new_task_form");
const tasksList = document.getElementById("tasksList");
const taskBtns = document.querySelectorAll(".task_check_btn");
const themeBtn = document.querySelector(".theme_toogle_btn");

// date
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

function bodyLoad() {
  const dateValue = new Date();
  const monthValue = dateValue.getMonth();
  //   const dateValue = new Date();
}

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let newtaskInputValue = taskForm.elements.new_task_input;
  addTask(newtaskInputValue.value);

  // if anything will be inserted in list taskListEmpty class will be removed
  newtaskInputValue.value = "";
  container.classList.remove("task_list_empty");
});

function addTask(newTask) {
  const newTaskItem = document.createElement("li");
  newTaskItem.setAttribute("class", "task_item");
  tasksList.appendChild(newTaskItem);

  const newCheckBtn = document.createElement("div");
  newCheckBtn.setAttribute("class", "task_check_btn");
  newTaskItem.appendChild(newCheckBtn);

  const newTaskBio = document.createElement("span");
  newTaskBio.setAttribute("class", "task_bio");
  newTaskBio.innerText = newTask;
  newTaskItem.appendChild(newTaskBio);

  onTaskComplete(newCheckBtn);
}

function onTaskComplete(btn) {
  btn.addEventListener("click", function (e) {
    let parent = e.target.parentElement;
    parent.classList.add("task_completed");

    setTimeout(() => {
      parent.remove();
    }, 400);

    if (tasksList.childNodes.length == 1) {
      setTimeout(() => {
        container.classList.add("task_list_empty");
      }, 800);
    }
  });
}

themeBtn.addEventListener("click", function () {
  let darkTheme = themeBtn.classList.toggle("dark");

  if (darkTheme) {
    root.style.setProperty("--theme-transition", "1s");
    root.style.setProperty("--primary-color", "#1E1E1E");
    root.style.setProperty("--secondary-color", "#3B3B3B");
    root.style.setProperty("--text-color", "#EAEAEA");
    root.style.setProperty("--task-color", "#3B3B3B");
    root.style.setProperty("--footer-color", "#1E1E1E");
    root.style.setProperty("--theme-btn", `url('assets/Light-theme-btn.svg')`);
    root.style.setProperty("--container-bg", `url('./assets/Dark-empty.svg')`);
    root.style.setProperty("--filter", "invert()");
  } else {
    root.style.setProperty("transition", "1s");
    root.style.setProperty("--primary-color", "white");
    root.style.setProperty("--secondary-color", "#1E1E1E");
    root.style.setProperty("--text-color", "black");
    root.style.setProperty("--task-color", "white");
    root.style.setProperty("--footer-color", "#1E1E1E");
    root.style.setProperty("--theme-btn", `url('assets/Dark-theme-btn.svg')`);
    root.style.setProperty("--container-bg", `url('./assets/Light-empty.svg')`);
  }
});
