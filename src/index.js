import View from './view';
import Model from './model';
import "./styles/style.scss";

let app = document.querySelector("#app");

const model = new Model();
const view = new View(app);
view.setModel(model);
