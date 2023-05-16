let root = document.querySelector(":root");
let container = document.querySelector(".container");
let newTaskInput = document.getElementById("new_task_input");
let taskForm = document.getElementById("new_task_form");
let tasksList = document.getElementById("tasksList");
let taskBtns = document.querySelectorAll(".task_check_btn");
let themeBtn = document.querySelector(".theme_toogle_btn");
let getData = localStorage.getItem("todo");
let formData = getData ? JSON.parse(getData) : [];
let checkId = document.querySelector("#id");

if (getData) {
  container.classList.remove("task_list_empty");
}

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let newtaskInputValue = taskForm.elements.new_task_input;
  formData.push(newtaskInputValue.value);
  localStorage.setItem("todo", JSON.stringify(formData));
  newtaskInputValue.value = "";
  location.reload();
});

formData.map((data, index) => {
  const newTaskItem = document.createElement("li");
  newTaskItem.setAttribute("class", "task_item");
  tasksList.appendChild(newTaskItem);

  const newCheckBtn = document.createElement("div");
  newCheckBtn.setAttribute("class", "task_check_btn");
  newCheckBtn.setAttribute("id", index);
  newTaskItem.appendChild(newCheckBtn);

  const editBtn = document.createElement("div");
  editBtn.setAttribute("class", "edit_btn");
  editBtn.innerHTML = "Edit";
  newTaskItem.appendChild(editBtn);

  const newTaskBio = document.createElement("span");
  newTaskBio.setAttribute("class", "task_bio");

  newTaskBio.innerText = data;
  newTaskItem.appendChild(newTaskBio);
});

tasksList.addEventListener("click", (e) => {
  //   console.log(e.target.id);
  afterDelete = JSON.parse(getData);
  afterDelete.splice(e.target.id, 1);
  localStorage.setItem("todo", JSON.stringify(afterDelete));
  location.reload();
});

// //   onTaskComplete(newCheckBtn);
//   newCheckBtn[index].addEventListener("click", function (e) {
//     let parent = e.target.parentElement;
//     parent.classList.add("task_completed");

//     setTimeout(() => {
//       parent.remove();
//     }, 400);

//     if (tasksList.childNodes.length == 1) {
//       setTimeout(() => {
//         container.classList.add("task_list_empty");
//       }, 800);
//     }
//   });

// dark mode
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
