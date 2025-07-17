import "./styles.css";
import Task from "./tasks";
import myProject from "./project";
console.log("css imported");


const defaultProject=new myProject("default");
defaultProject.addTask(new Task("complete todo","","today","high"));
defaultProject.addTask(new Task("complete gertodo","","today","high"));
defaultProject.addTask(new Task("completegrge todo","","today","high"));
defaultProject.getProject()[0].createSubTasks("complete js first");
defaultProject.getProject()[0].createSubTasks("start adding dom");
defaultProject.getProject()[0].createSubTasks("start making ui");


defaultProject.getProject()[0].taskArray[0].toggleCompletion();
console.log(defaultProject.getProject()[0].taskArray);
console.log(defaultProject.getProject());
