export default class Model {
  constructor() {
    this.array = [];
  }

  addInput(newTask) {
    this.array = [...this.array, newTask];
  }

  deleteTask(selectIndex) {
    this.array = this.array.filter((el, index) => index !== selectIndex);
  }

  sort_of_tasks_descending() {
    this.array = this.array.sort((a, b) =>
      a.toLowerCase() < b.toLowerCase() ? 1 : -1
    );
  }

  sort_of_tasks_ascending() {
    this.array = this.array.sort((a, b) =>
      a.toLowerCase() > b.toLowerCase() ? 1 : -1
    );
  }

  changeTask(index, newTask) {
    this.array[index] = newTask;
  }
}
