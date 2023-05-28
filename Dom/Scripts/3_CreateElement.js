function RunCreateElement(){
    const input = prompt('Enter a message');
    const messageEl = document.createElement('p');
    messageEl.innerText = input;

    const messageBox = document.querySelector('.message');
    messageBox.append(messageEl);

    setTimeout(function() { messageEl.hidden = true;},2000);

    //messageEl.remove();
}