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
const mapElement=function(element,parentId){
    if(element==="project")
        return Library
    if(element==="task") 
    {
                return helpers.detectItem(parentId).child;
    }
}
export default data;
export {mapElement};