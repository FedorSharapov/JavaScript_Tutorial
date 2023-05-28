function RunDialogWindows(){
    // предупреждение
    alert('Hello world!');

    PromptName();

    ConfirmAge();
}

function PromptName(){
    // запрос данных от пользователя
    return prompt('Enter yor name:');
    // отмена - null
}

function ConfirmAge(){
    // подтверждение
    return confirm('Are you over 18 years old?');
    // да - true
    // отмена - false
}