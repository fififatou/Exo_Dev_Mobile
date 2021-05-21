function addTask() {
    if(task.value == "" || task.value == " "){
        alert("Veiullez renseigner une tâche")
    }
    else{
        
        let listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(task.value));
        taskList.appendChild(listItem);
        $(listItem).on('swiperight', function () {
           
            if(listItem.className.indexOf('task-done') == -1){
                listItem.className += ' task-done';
            }
            else{
                listItem.className = listItem.className.replace(' task-done', '');
            }
        });  

        $(listItem).on('swipeleft', function () {
           
            $(listItem).hide('slow',function(){
                listItem.remove();
            });
            
        });  

        


        $(taskList).listview('refresh');
    }       
}
