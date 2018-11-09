const todoList = document.getElementsByTagName('ul');
const todoInput = document.getElementById('todo-input');

todoInput.addEventListener('keypress', function(e){
    if(e.keyCode == 13 && todoInput.value != '') {
        const todoItem = document.createElement('li');
        todoItem.setAttribute('class', 'list-group-item');
        todoItem.innerHTML = '';
        todoItem.innerHTML = '<i class="far fa-circle"></i>' + todoInput.value;
        todoList[0].appendChild(todoItem);
        todoInput.value = '';

        todoList[0].addEventListener('click', function(e){
            if(e.target.classList.contains('list-group-item')){
                if(e.target.getAttribute('class')== 'list-group-item'){
                    e.target.setAttribute('class', 'list-group-item list-is-active');
                } else {
                    e.target.setAttribute('class', 'list-group-item');
                }
            } 
        });
        todoList[0].addEventListener('dblclick', function(e){
            if(e.target.classList.contains('list-group-item')){
                e.target.remove();
            }
        });
    }});