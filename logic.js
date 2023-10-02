//Here we have the code to make usefull the 
//chatbot...
const tab = document.querySelector(".chat_tab");
const chat = document.querySelector(".chat_cont");
const close = document.getElementById("close");

tab.addEventListener('click', (e) =>{
    e.preventDefault();
    chat.style.display = "flex";
    console.log('hola');
});
close.addEventListener('click', (e) => {
    e.preventDefault();
    chat.style.display = "none";
})