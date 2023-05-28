function buttonClick(){
    const nameTextField1 = '.text-field1';
    const text = getInputText(nameTextField1);
    clearInput(nameTextField1)

    const nameList = '.list1';
    addElementToList(text,nameList);
}

function getInputText(nameEl){
    const input = document.querySelector(nameEl);
    return input.value;
}

function clearInput(nameEl){
    const input = document.querySelector(nameEl);
    input.value='';
}

function addElementToList(text,nameList){
    const listItem = document.createElement('li');
    listItem.innerText = text;

    const list = document.querySelector(nameList);
    list.append(listItem);
}

// click - срабатывает после нажатия и отпускания левой клавишей мыши, пока указатель находится внутри элемента. click срабатывает после mousedownи,mouseup
// contextmenu - срабатывает после нажатия и отпускания правой клавишей мыши, пока указатель находится внутри элемента.

// mouseover - наведение курсора мыши на элемент
// mousedown - увод курсора мыши с элемента

// mousedown - нажатие на элемент
// mouseup - отпускание элемента


// keydown - нажатие клавиши
// keyup - отжатие клавиши


// submit - форма отправлена
// focus - фокус на интарактивном элементе

/*
<button onclick="handler()">
    button
</button>

function handler(){
    
}*/