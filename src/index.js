/**
 * 1. Вывод текстур
 * 2. Клик -> добавление элемента в центр экрана
 * 3. Добаленный элемент можно двигать внутри сцены
 * 4. Добавление новго элемента блокирует возможности перемещения предыдущего
 * 5. Экспорт сцены
 * */

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