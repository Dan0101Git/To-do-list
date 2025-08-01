import { Library } from "../App/projectState";
const setData=(function(){
    function setLibraryData(Library){
        localStorage.setItem("library",JSON.stringify(Library));
    }
    return {setLibraryData};
})();
export default setData;