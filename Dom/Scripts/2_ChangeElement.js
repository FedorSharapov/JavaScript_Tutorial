let stFormatText = false;

function RunChangeElement(){
    console.log('\r\n',"-".repeat(20),'\r\nChangeElement:');

    const element = document.querySelector('.note');
    
    console.log('element.textContent',element.textContent);
    console.log('element.innerHTML',element.innerHTML);

    stFormatText = !stFormatText;

    element.textContent = 'Пример параграфа';

    if(stFormatText)
        element.innerHTML = `<b>${element.textContent+'(Bold)'}</b>`;
    else
        element.innerHTML = `<i>${element.textContent+'(Italic)'}</i>`;
}
