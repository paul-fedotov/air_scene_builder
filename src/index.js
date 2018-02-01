import View from './view';
import Model from './model';
import "./styles/style.scss";
import {content} from "../res.json";

const app = document.querySelector("#app");
const res = content.assets;

const model = new Model();
const view = new View(app, res);
view.setModel(model);
view.setCanvas();