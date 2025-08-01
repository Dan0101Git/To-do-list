import { Library } from "../projectState";

const getData=(function(){
  function returnUpdatedData(){   
    if(localStorage.getItem("library"))
        return JSON.parse(localStorage.getItem("library"));
    else
        return "unable to fetch data";
}
return {returnUpdatedData};
})();
export default getData;