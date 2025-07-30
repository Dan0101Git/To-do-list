const renderTask=(function (){
        function addTasks(task,state,isLastTask){
        let taskListHtml;
        const starImage=task.priority==="true"?starFilled:starUnfilled;
        let listClass=task.priority==="true"?"starred-list":null;
        const circleImage=task.taskCompletion==="true"?tick:circleList;
        const completionClass=task.taskCompletion==="true"?"completed-list":null;
        const newClass=state==="create"?"isTaskNew":null;
   
        if(state==="create" && isLastTask==="yes" && !document.querySelector(".starred-layout.view-tasks"))
            listClass+=" is-empty";  // taskCreation="is-empty"
       
        let dateClassTheme;
        let noDate;
        if(task.date==="Invalid Date")
        {
            noDate="no-date"
        }
        if(task.date==="Today")
            dateClassTheme="urgent";
        else if(task.date==="Tomorrow")
            dateClassTheme="mild-urgent";
        else
            dateClassTheme="not-urgent";
    if(state==="create-button"&& isLastTask===task.id){
       taskListHtml=`<div class="task-container">
  <li 
    data-set="${task.id}" 
    data-title="${task.title}" 
    data-descrip="${task.description}" 
    data-date="${task.date}" 
    data-starred="${task.priority}" 
    completed="${task.taskCompletion}" 
    class="all-tasks ${listClass} ${completionClass} isNew" 
    id="final-task-read"
  >
    <div class="tasks-lists">
      <div class="mark-list" data-set="${task.id}">
        <span class="strike-line"></span>
        <span class="toggle-completion clickable">
          <img src="${circleImage}">
        </span>
        <span class="task-title">${task.title}</span>
      </div>
      <div class="task-buttons">
     
        <button data-set="${task.id}" class="star-task">
          <img class="star" src="${starImage}">
        </button>
        <button data-set="${task.id}" class="delete-task">
          <img class="delete" src="${deleteBin}">
        </button>
      </div>
    </div>
    <button class="${dateClassTheme} ${noDate}" dataset="${task.id}" id="date-button">${task.date}</button>
  </li>

  <li 
    data-set="${task.id}" 
    class="all-tasks on isNew" 
    id="final-task-edit"
  >
    <div class="tasks-lists">
      <div data-set="${task.id}">
        <span class="toggle-completion clickable">
          <img src="${circleList}">
        </span>
        <input 
          placeholder="list your heart out !" 
          type="text" 
          id="edit-input-task" 
          class="edit-task-title" 
          value="${task.title}"
        >
      </div>
    </div>

    <div class="edit-task">
      <form action="" class="edit-task-form">
        <div id="edit-details" data-set="${task.id}">
          <img src="${desciptionImage}">
          <textarea 
            value="${task.description}" 
            placeholder="Details" 
            name="Description" 
            id="edit-task-descrip" 
            cols="10" 
            rows="5"
          >${task.description}</textarea>
        </div>

        <div class="inputs" data-set="${task.id}">
          <button value="Today" class="date-shortcut">Today</button>
          <button value="Tomorrow" class="date-shortcut">Tomorrow</button>
          <button class="clickable" id="openDate">
            <img data-set="${task.id}" class="date-shortcut" src="${calanderImage}">
          </button>
          <input 
            value="${task.date}" 
            class="clickable" 
            type="date" 
            id="hiddenDate"
          />
        </div>
      </form>
    </div>
  </li>
</div>
`;
    }
         
else
         taskListHtml= `
<div class="task-container" data-set="${task.id}">
  <li data-set="${task.id}" data-title="${task.title}" data-descrip="${task.description}" data-date="${task.date}" data-starred="${task.priority}" completed="${task.taskCompletion}" class="all-tasks on ${listClass} ${completionClass} ${newClass}" id="final-task-read">
    <div class="tasks-lists">
      <div class="mark-list" data-set="${task.id}">
        <span class="strike-line"></span>
        <span class="toggle-completion clickable"><img src="${circleImage}"></span>
        <span class="task-title">${task.title}</span>
      </div>
      <div class="task-buttons">
        <button data-set="${task.id}" class="star-task"><img class="star" src="${starImage}"></button>
        <button data-set="${task.id}" class="delete-task"><img class="delete" src="${deleteBin}"></button>
      </div>
    </div>
    <button class="${dateClassTheme} ${noDate}" dataset="${task.id}" id="date-button">${task.date}</button>
  </li>

  <li data-set="${task.id}" class="all-tasks" id="final-task-edit">
    <div class="tasks-lists">
      <div data-set="${task.id}">
        <span class="toggle-completion clickable"><img src="${circleList}"></span>
        <input type="text" id="edit-input-task" class="edit-task-title" value="${task.title}">
      </div>
    </div>
    <div class="edit-task">
      <form action="" class="edit-task-form">
        <div id="edit-details" data-set="${task.id}">
          <img src="${desciptionImage}">
          <textarea value="${task.description}" placeholder="Details" name="Description" id="edit-task-descrip" cols="10" rows="5">${task.description}</textarea>
        </div>
        <div class="inputs" data-set="${task.id}">
          <button value="Today" class="date-shortcut">Today</button>
          <button value="Tomorrow" class="date-shortcut">Tomorrow</button>
          <button class="clickable" id="openDate"><img data-set="${task.id}" class="date-shortcut" src="${calanderImage}"></button>
          <input value="${task.date}" class="clickable" type="date" id="hiddenDate" />
        </div>
      </form>
    </div>
  </li>
</div>
`;

    return {taskListHtml,completionClass}
    }
    return {addTasks}
})();

export default renderTask;