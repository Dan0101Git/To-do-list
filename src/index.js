import "./styles.css";
import Task from "./tasks";
import myProject from "./project";
console.log("css imported");


const defaultProject=new myProject("default");
defaultProject.addTask(new Task("complete todo","","today","high"));
defaultProject.addTask(new Task("complete todo","","today","high"));
defaultProject.addTask(new Task("complete todo","","today","high"));
defaultProject.addTask(new Task("complete todo","","today","high"));
defaultProject.addTask(new Task("complete todo","","today","high"));
defaultProject.addTask(new Task("complete todo","","today","high"));
defaultProject.addTask(new Task("complete todo","","today","high"));
defaultProject.addTask(new Task("complete todo","","today","high"));

console.log(defaultProject.getProject());
