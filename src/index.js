import "./styles.css";
import { Library } from "./projectState";
import data from "./data";
import stateObject from "./projectState";
import helper from "./helpers";
console.log("css imported");


const firstProject=Library.addChild("Testing");//adding project
const defaultProject=Library.addChild("Default");



const task1=firstProject.addChild(data("complete todo","","today","high"));//adding tasks
const task2=defaultProject.addChild(data("complete danishtodo","y8","today","higjtyh"));
const task3=defaultProject.addChild(data("complete gertodo","","today","high"));

const subTask1=task1.addChild(data("complete js first"));
const subTask2=task2.addChild(data("start adding dom"));
const subTask3=task3.addChild(data("start making ui"));
const subTask4=task3.addChild(data("write down dom"));
const subTask5=task3.addChild(data("check for bugs"));

const itemDelete=helper.detectItem(subTask2.id);
itemDelete.parent.deleteChild(itemDelete.child)

const itemUpdate=helper.detectItem(task2.id);
itemUpdate.parent.updateChild(itemUpdate.child,data("danish nayyar"));
console.log(stateObject.myLibrary.nestedArray);
