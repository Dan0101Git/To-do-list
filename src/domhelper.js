const domHelper=(function(){
   function getelementData(elementId){
    const elementList=document.querySelector(`li[data-set="${elementId}"]`);
    console.log(elementList)
    return [elementList.getAttribute("data-title"),elementList.getAttribute("data-descrip"),elementList.getAttribute("data-date"),elementList.getAttribute("data-starred"),elementList.getAttribute("completed")];
    }
    return {getelementData}
})();

export default domHelper