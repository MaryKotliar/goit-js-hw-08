import throttle from "lodash.throttle";
const formRef = document.querySelector('.feedback-form');
const data = {};
const LOCALE_STORAGE = "feedback-form-state";

initiatePage();

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onInput(event) {
const {name, value} = event.target;
data[name] = value;
    try{
localStorage.setItem(LOCALE_STORAGE, JSON.stringify(data));
}catch (error) {
    console.error('Get state error: ', error.message);
}
}

function initiatePage() {
    try{
const saveData = JSON.parse(localStorage.getItem(LOCALE_STORAGE));
if(saveData){
    console.log(saveData);
    console.log(Object.entries(saveData));
    Object.entries(saveData).forEach(([name, value]) => {
    formRef.elements[name].value = value;
    })}
}catch (error) {
    console.error('Get state error: ', error.message);
}
};

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: {email, message },
    } = event.currentTarget;
    
    console.log({email: email.value, message: message.value });

event.currentTarget.reset();
    try{
localStorage.removeItem(LOCALE_STORAGE);
}catch (error) {
    console.error('Get state error: ', error.message);
}
}