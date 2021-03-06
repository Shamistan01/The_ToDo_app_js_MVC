export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  //the entry of program
  init() {
    this.view.init();
    this.view.form.addEventListener("submit", (event) => {
      event.preventDefault(); //prevent the reboot of page
      const data = new FormData(event.target); //To get the values,
      //the data of the form fields must be represented in the FormData object.
      const task = data.get("task_input");
      // the creating of task
      if (task !== "") {
        this.view.ul.className = "ul_list";
        this.model.addInput(task);

        this.render();
        this.view.input.value = "";
      }
    });

    // sorting of tasks
    this.view.buttonSort.addEventListener("click", (event) => {
      event.target.classList.toggle("button_sort");
      if (event.target.className !== "button_sort") {
        this.model.sort_of_tasks_ascending();
        this.view.defaultAsc();
      } else {
        this.model.sort_of_tasks_descending();
        this.view.defaultDesc();
      }
      this.render();
    });

    // this.dragdrop();
  }

  render() {
    this.view.ul.innerHTML = "";
    this.model.array.forEach((el, index) => {
      // correcting the task
      this.li = this.view.createLi({
        class: "correcting_task",
      });

      this.newInput = this.view.createInput({
        text: el,
        name: "inputTask",
        id: "correcting_input",
        draggable: "true",
      });

      this.view.ul.append(this.li);
      this.li.append(this.newInput);

      // saving of corrected task
      this.newInput.addEventListener("keyup", (event) => {
        this.model.changeTask(index, event.target.value);
      });

      // deleting of task
      this.deleteButton = this.view.createButton({
        text: "x",
        class: "deleteTask",
        type: "button",
      });

      this.li.append(this.deleteButton);

      this.deleteButton.addEventListener("click", () => {
        this.model.deleteTask(index);
        this.render();
        if (this.view.ul.innerHTML === "") {
          this.view.ul.className = "";
        }
      });

      const draggables = document.querySelectorAll(".correcting_task");
      const containers = document.querySelectorAll("#ul_list");

      draggables.forEach((draggable) => {
        draggable.addEventListener("dragstart", () => {
          draggable.classList.add("dragging");
        });

        draggable.addEventListener("dragend", () => {
          draggable.classList.remove("dragging");
        });
      });

      containers.forEach((container) => {
        container.addEventListener("dragover", (e) => {
          e.preventDefault();
          const afterElement = getDragAfterElement(container, e.clientY);
          const draggable = document.querySelector(".dragging");
          if (afterElement == null) {
            container.appendChild(draggable);
          } else {
            container.insertBefore(draggable, afterElement);
          }
        });
      });

      function getDragAfterElement(container, y) {
        const draggableElements = [
          ...container.querySelectorAll(".correcting_task:not(.dragging)"),
        ];

        return draggableElements.reduce(
          (closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
              return { offset: offset, element: child };
            } else {
              return closest;
            }
          },
          { offset: Number.NEGATIVE_INFINITY }
        ).element;
      }
    });
  }
}
