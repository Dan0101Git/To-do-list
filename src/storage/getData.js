import { Library } from "../projectState";

const getData=(function(){
  function returnUpdatedData(){    return JSON.parse(localStorage.getItem("library"));
}
return {returnUpdatedData};
})();
export default getData;