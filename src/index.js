import View from './view';
import Model from './model';
import "./styles/style.scss";
import {content} from "../res.json";

const element = document.querySelector("#app");
const res = content.assets;

const model = new Model();
const view = new View(element, res);
view.setModel(model);
view.setCanvas();