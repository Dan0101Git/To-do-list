import { Library } from "./projectState";
import helpers from "./helpers";
const data = (data) => ({
  title:data[0],
  description:data[1],
  date:data[2],
  priority:data[3],
  taskCompletion:data[4],
  view:data[5],
});
const localData=(data)=>({
  title:data.title,
  description:data.description,
  date:data.date,
  priority:data.priority,
  taskCompletion:data.taskCompletion,
  view:data.view,
  id:data.id,
})
export default data;
export {localData}
