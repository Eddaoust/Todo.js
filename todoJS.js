const todoList = document.getElementsByClassName('content');
const todoInput = document.getElementById('todo-input');

todoInput.addEventListener('keypress', function(e){
    if(e.keyCode == 13 && todoInput.value != '') {
        let structure = createStructure(todoInput.value);
        todoList[0].appendChild(structure);
        todoInput.value = '';
        const radio = Array.from(document.getElementsByClassName('radio'));
        for(let item of radio){
            item.addEventListener('click', function(){
                const selectedInput = document.getElementsByClassName('selected');
                selectedInput[radio.indexOf(item)].style.color = '#ced4da';
                selectedInput[radio.indexOf(item)].style.textDecoration = 'line-through';
            });
        }
    }
});

function createStructure(todoItem){
    let div = document.createElement('div');
    div.setAttribute('class', 'input-group input-group-lg')
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'input-group-prepend');
    let div3 = document.createElement('div');
    div3.setAttribute('class', 'input-group-text');
    let radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('class', 'radio');
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control selected');
    input.setAttribute('disabled', '');
    input.setAttribute('value', todoItem);

    div3.appendChild(radio);
    div2.appendChild(div3);
    div.appendChild(div2);
    div.appendChild(input);

    return div;
}
