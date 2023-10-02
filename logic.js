//Here we have the code to make usefull the 
//chatbot...
const tab = document.querySelector(".chat_tab");
const chat = document.querySelector(".chat_cont");
const close = document.getElementById("close");
const burguer = document.getElementById("burguer");
const menu =document.querySelector(".drop_menu_cont");
const emoMenu = document.querySelector(".emojis_menu");
const btnEmojis = document.querySelector(".emojis");
const btnEmojis1 = document.querySelector(".emojis1");
const files = document.getElementById("files");
const inputFiles = document.getElementById("fileInput");
//writting zone...
const input1 = document.querySelector(".input1");
const send = document.getElementById("send");
const funcs = document.getElementById("notSend");

tab.addEventListener('click', (e) =>{
    e.preventDefault();
    chat.style.display = "flex";
    console.log('hola');
});
close.addEventListener('click', (e) => {
    e.preventDefault();
    chat.style.display = "none";
});
burguer.addEventListener('click', (event) => {
    event.preventDefault();
    //none or flex??...
    const currentDisplay = window.getComputedStyle(menu).display;
    // we chance the display...
    menu.style.display = (currentDisplay === 'none') ? 'flex' : 'none';
});
btnEmojis.addEventListener('click', (event) => {
    event.preventDefault();
    //none or flex??...
    const currentDisplay = window.getComputedStyle(emoMenu).display;
    // we chance the display...
    emoMenu.style.display = (currentDisplay === 'none') ? 'flex' : 'none';
});
btnEmojis1.addEventListener('click', (event) => {
    event.preventDefault();
    //none or flex??...
    const currentDisplay = window.getComputedStyle(emoMenu).display;
    // we chance the display...
    emoMenu.style.display = (currentDisplay === 'none') ? 'flex' : 'none';
});

//subida de archivos...
//aun falta que lo muestre en el input de archicos (hacer uno)
//y falta que lo envie al output como mensaje con btn para descargar...
files.addEventListener('click', () => {
    fileInput.click(); // Abre el explorador de archivos cuando se hace clic en el botón
});
fileInput.addEventListener('change', (event) => {
    const archivoSeleccionado = event.target.files[0];

    if (archivoSeleccionado) {
        // Aquí puedes hacer lo que necesites con el archivo seleccionado, por ejemplo, mostrar información sobre el archivo o subirlo a un servidor
        alert('Archivo seleccionado: ' + archivoSeleccionado.name);
    }
});

//........
input1.addEventListener('focus', (event) => {
    event.preventDefault();
    send.style.display = "flex";
    notSend.style.display = "none";
});
input1.addEventListener('blur', (event) => {
    event.preventDefault();
    send.style.display = "none";
    notSend.style.display = "flex";
})

//Here we hacve the code that makes the user notifications...
input1.addEventListener("submit", notificationMaker());
input1.addEventListener("click", notificationMaker());
//notification maker...
function notificationMaker(input){
    //ya mero...
}