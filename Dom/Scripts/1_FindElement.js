let stColor = false;

function RunFindElement(){
    console.log('\r\n',"-".repeat(20),'\r\nFindElement:');

    const elements = document.querySelectorAll('.last'); //li:last-child

    let elementsArray = Array.from(elements);
    elementsArray.forEach(function(element) {
        if(stColor === true)
            element.style.color = '#f00';
        else
            element.style.color = '#0f0';

        console.log(element.id,element.style.color,stColor);
    });

    stColor = !stColor;
}
