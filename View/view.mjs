export default class View {
  constructor() {
    this.root = document.getElementById("root");
  }

  init() {
    this.form = this.createForm({
      id: "form",
    });

    this.top_div_yellow = this.createDiv({
      id: "top_div_yellow",
    });

    this.label = this.createLable({
      text: "To-do list",
      id: "label",
    });

    this.input = this.createInput({
      id: "task_input",
      name: "task_input",
    });

    this.button = this.createButton({
      id: "button",
    });

    this.plus = this.createDiv({
      text: "+",
      id: "plus",
    });

    this.buttonText = this.createDiv({
      text: "Добавить",
      id: "button_text",
    });

    this.ul = this.createUl({
      id: "ul_list",
    });

    this.buttonSort = this.createButton({
      id: "button_sort",
      type: "button",
    });

    this.img_sort = this.createImg({
      id: "sort_default_img",
      src: "./assets/img/Group 74.png",
    });

    this.root.append(this.form);

    this.form.append(this.top_div_yellow);
    this.form.append(this.label);
    this.form.append(this.ul);
    this.form.append(this.button);

    this.buttonSort.append(this.img_sort);

    this.label.append(this.buttonSort);
    this.label.append(this.input);

    this.button.append(this.plus);
    this.button.append(this.buttonText);
  }

  createForm(props) {
    const form = document.createElement("form");

    props.id && (form.id = props.id);

    return form;
  }

  createDiv(props) {
    const div = document.createElement("div");

    props.text && (div.innerText = props.text);
    props.id && (div.id = props.id);

    return div;
  }

  createLable(props) {
    const label = document.createElement("label");

    props.text && (label.innerText = props.text);
    props.id && (label.id = props.id);

    return label;
  }

  createInput(props) {
    const input = document.createElement("input");

    props.text && (input.value = props.text);
    props.name && (input.name = props.name);
    props.id && (input.id = props.id);

    return input;
  }

  createImg(props) {
    const img = document.createElement("img");

    props.class && (img.className = props.class);
    props.src && (img.src = props.src);

    return img;
  }

  createButton(props) {
    const button = document.createElement("button");

    props.text && (button.innerText = props.text);
    props.id && (button.id = props.id);
    props.class && (button.className = props.class);
    props.type && (button.type = props.type);
    return button;
  }

  createUl(props) {
    const ul = document.createElement("ul");

    props.id && (ul.id = props.id);

    return ul;
  }

  createLi(props) {
    const li = document.createElement("li");

    props.text && (li.innerHTML = props.text);
    props.class && (li.className = props.class);

    return li;
  }

  defaultAsc() {
    this.img_sort.src = "./assets/img/Group 90.png";
  }

  defaultDesc() {
    this.img_sort.src = "./assets/img/Group 74.png";
  }
}
