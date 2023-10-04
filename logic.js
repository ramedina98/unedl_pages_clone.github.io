//Here we have the code to make usefull the 
//chatbot...
const tab = document.querySelector(".chat_tab");
const chat = document.querySelector(".chat_cont");
const close = document.getElementById("close");
const burguer = document.getElementById("burguer");
const menuList =document.querySelectorAll(".list_changes li");
const menu = document.querySelector(".drop_menu_cont");
const emoMenu = document.querySelector(".emojis_menu");
const btnEmojis = document.querySelector(".emojis");
const btnEmojis1 = document.querySelector(".emojis1");
const files = document.getElementById("files");
const inputFiles = document.getElementById("fileInput");
const cancelChanges = document.querySelectorAll(".cancel");
const sendChanges1 = document.getElementById("sendName");
const sendChanges2 = document.getElementById("sendCorreo");
const changesName = document.getElementById("nombre");
const changesEmail = document.getElementById("correo");
const loadCircle1 = document.getElementById("wind1");
const loadCircle2 = document.getElementById("wind2");
//writting zone...
const input1 = document.querySelector(".input1");
const form = document.getElementById("menssageForm");
const send = document.getElementById("send");
const funcs = document.getElementById("notSend");
const emojisMenu = document.getElementById("emojisList").getElementsByTagName("li");7
const likeBtn = document.getElementById("like");

tab.addEventListener('click', (e) =>{
    e.preventDefault();
    chat.style.display = "flex";
    tab.style.display = "none";
});
close.addEventListener('click', (e) => {
    e.preventDefault();
    chat.style.display = "none";
    tab.style.display = "flex";
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
likeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const like = '👍';
    notiMakerUser(like);
});
cancelChanges.forEach(boton => {
    boton.addEventListener('click', (event) => {
        event.preventDefault();
        changesName.style.display = "none";
        changesEmail.style.display = "none";
    })
})
sendChanges1.addEventListener('click', (event) => {
    event.preventDefault();
    loadCircle1.style.display = "block";
    setTimeout(function(){
        changesName.style.display = "none";
        loadCircle1.style.display = "none";
        document.getElementById("inname").value = '';
    }, 2000);
})
sendChanges2.addEventListener('click', (event) => {
    event.preventDefault();
    loadCircle2.style.display = "block";
    setTimeout(function(){
        changesEmail.style.display = "none";
        loadCircle2.style.display = "none";
        document.getElementById("incorreo").value = '';
    }, 2000);
})
//subida de archivos...
//aun falta que lo muestre en el input de archicos (hacer uno)
//y falta que lo envie al output como mensaje con btn para descargar...
files.addEventListener('click', () => {
    fileInput.click(); // Abre el explorador de archivos cuando se hace clic en el botón
});
fileInput.addEventListener('change', (event) => {
    const fileSelected = event.target.files[0];
    const fileName = fileSelected.name;
    let fileSize = fileSelected.size;
    const units = ['B','KB','MB','GB','TB'];
    let unitIndex = 0;

    while (fileSize >= 1024 && unitIndex < units.length - 1) {
        fileSize /= 1024;
        unitIndex++;
    }
    fileSize = `${fileSize.toFixed(2)} ${units[unitIndex]}`;
    const extension = fileName.split(".").pop().toLowerCase();

    if (fileSelected) {
        if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
            const img = new Image();
            img.src = URL.createObjectURL(fileSelected);
            img.onload = () => {
                document.querySelector('.output').appendChild(createDocumentNotification(img, fileName, fileSize, 'IMG'));
            };
        } else if (extension === 'pdf') {
            // Asumiendo que no tienes una imagen para PDF, se mostrará un ícono
            document.querySelector('.output').appendChild(createDocumentNotification(null, fileName, fileSize, 'PDF'));
        } else {
            document.querySelector('.output').appendChild(createDocumentNotification(null, fileName, fileSize, 'NO'));
        }
    }
});
//the maker of files notifications...
function createDocumentNotification(file, name, size, type) {
    const contAllDocs = document.createElement('div');
    contAllDocs.classList.add('contAllDocs');

    const notificationDoc = document.createElement('div');
    notificationDoc.classList.add('notificationDoc');

    const cont_doc = document.createElement('div');
    cont_doc.classList.add('cont_doc');

    // Aquí se decide si mostrar una imagen o un ícono para PDF
    let documentIcon;
    if (type === 'IMG') {
        documentIcon = document.createElement('img');
        documentIcon.src = file.src;
        documentIcon.alt = '';
    } else if (type === 'PDF') {
        documentIcon = document.createElement('object');
        documentIcon.type = 'application/pdf';
        documentIcon.data = file;
    } else {
        documentIcon = document.createElement('i');
        documentIcon.classList.add('bx', 'bx-question-mark');
    }

    cont_doc.appendChild(documentIcon);

    const cont_info = document.createElement('div');
    cont_info.classList.add('cont_info');

    const fileNamePara = document.createElement('p');
    fileNamePara.classList.add('fileName');
    fileNamePara.innerText = name;

    const fileSizePara = document.createElement('p');
    fileSizePara.classList.add('fileSize');
    fileSizePara.innerText = size;

    const downloadButton = document.createElement('a');
    downloadButton.classList.add('downloadButton');
    if(type === 'IMG'){
        downloadButton.href = file.src;
    }else if (type === 'PDF') {
        const pdfBlob = new Blob([file], { type: 'application/pdf' });
        const pdfRuta = URL.createObjectURL(pdfBlob);
        downloadButton.href = pdfRuta;
        downloadButton.download = name;
    }
    downloadButton.download = name;
    downloadButton.innerHTML = 'Descargar <i class="bx bx-download"></i>';

    // Acción para descargar el archivo
    downloadButton.addEventListener('click', () => {
        // Aquí debes definir la lógica para descargar el archivo
        // Puedes usar file.src para una imagen o el nombre para un PDF
        // Por ejemplo:
        // window.open(file.src); // Para imágenes
        // window.open('ruta al servidor/' + name); // Para PDF, ajusta la ruta
    });

    cont_info.appendChild(fileNamePara);
    cont_info.appendChild(fileSizePara);
    cont_info.appendChild(downloadButton);

    notificationDoc.appendChild(cont_doc);
    notificationDoc.appendChild(cont_info);

    contAllDocs.appendChild(notificationDoc);

    return contAllDocs;
}
/*In this piece of code we have the validation of if the
input isn't empty the btn send appears and if it is 
empty it disappears...*/
input1.addEventListener('keyup',inputValidation1);
function inputValidation1(){
    const trimmedValue = input1.value.trim();
    if (trimmedValue === '') {
        send.style.display = "none";
        funcs.style.display = "flex";
    }else{
        send.style.display = "flex";
        funcs.style.display = "none";
    }
}
//::::::::::::
//here we make the first mensagges of the chat...
function notiMkaerChat(){
    const mainElement = document.querySelector(".output");

    const chatMessage = document.createElement('div');
    chatMessage.classList.add('chat_menssage');
    const existingChatMenssage = document.querySelector(".chat_menssage");
    
    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    const avatarCont = document.createElement('div');
    avatarCont.classList.add('avatar_cont');
    const avatarImage = document.createElement('img');
    avatarImage.src = 'https://embed.tawk.to/_s/v4/assets/images/default-profile.svg';
    avatarImage.alt = 'UNEDL AVATAR';

    const messageNoti = document.createElement('div');
    messageNoti.classList.add('menssage_noti');
    const messageParrafo = document.createElement('p');
    const otherMenssage = 'hola';
    const first = 'Estamos en directo y listos para chatear con usted ahora. Diga algo para aclarar cualquier duda de nuestra oferta académica.';
    //this is to know if there is a element or not...
    if(existingChatMenssage){
        messageParrafo.innerText = otherMenssage;
    }else{
        messageParrafo.innerText = first;
    }

    const time = document.createElement('div');
    time.classList.add('time');
    const timeParrafo = document.createElement('p');
    timeParrafo.classList.add('time_text');

    const horaActual = new Date();
    const hora = horaActual.getHours();
    const minutos = horaActual.getMinutes();
    const horaFormateada = `${hora < 10 ? '0' : ''}${hora}:${minutos < 10 ? '0' : ''}${minutos}`;

    timeParrafo.innerText = horaFormateada;

    mainElement.appendChild(chatMessage);
    chatMessage.appendChild(avatar);
    avatar.appendChild(avatarCont);
    avatarCont.appendChild(avatarImage);
    chatMessage.appendChild(messageNoti);
    messageNoti.appendChild(messageParrafo);
    chatMessage.appendChild(time);
    time.appendChild(timeParrafo);
}
function openChat(){
    setTimeout(function() {
        tab.style.display = "none";
        chat.style.display = "flex";
    }, 5000);
}
openChat();
function activarNotiMkaerChatDespuesDe5Segundos() {
    setTimeout(function() {
        notiMkaerChat();
    }, 6000); // 1500 milisegundos = 1.5 segundos
}
activarNotiMkaerChatDespuesDe5Segundos();

//Here we have the code that makes the user notifications...
//here we want listen a key event...
input1.addEventListener('keydown', (event) => {
    if(event.key === "Enter"){
        event.preventDefault();
        notiMakerUser(event.target.value);
        event.target.value = '';
    }
    emoMenu.style.display = "none";
});
//and here a submit event...
form.addEventListener('submit', (event) => {
    event.preventDefault();
    notiMakerUser(input1.value);
    input1.value = '';
    emoMenu.style.display = "none";
});
//the user notification maker...
function notiMakerUser(info){
    const mainElement = document.querySelector(".output");
    const container = document.createElement('div');
    container.classList.add('people_menssage');
    const menssage = document.createElement('div');
    menssage.classList.add('cont_menssage_people');
    const parrafo = document.createElement('p');

    parrafo.innerText = info;

    mainElement.appendChild(container);
    container.appendChild(menssage);
    menssage.appendChild(parrafo);
}
//Here we make sure that the input get the correct emoji from the
//emojis menu...
function menuOfemojis(){
    for (let i = 0; i < emojisMenu.length; i++) {
        emojisMenu[i].addEventListener('click', function() {
            const emojiSeleccionado = this.innerText;
            // assigns the selected emoji to the input...
            let cont = input1.value;
            input1.value = cont + " " + emojiSeleccionado;
        });
    }
}
menuOfemojis();
//Here we are workin
function sound() {
    const sonido = document.getElementById("sonido");
    if(sonido.value === 0) {
        sonido.value = 1; 
        const audio = new Audio('sound/noti.mp3')
        audio.play();
        sonido.innerHTML = `<i class='bx bx-bell'></i> Sonido activado`;
    }else{ //checar por que no cambia??
        sonido.value = 0;
        sonido.innerHTML = `<i class='bx bx-bell-off'></i> Sonido desactivado`;
    }
}
function acctionsOfmenu(option){
    switch(option){
        case 0:
            menu.style.display = "none";
            changesName.style.display = "flex";
        break;
        case 1:
            menu.style.display = "none";
            changesEmail.style.display = "flex";
        break;
        case 2:
            sound();
        break;
        case 3:
            window.open("https://tawk.to/chat/5a5721cad7591465c706a328/default?pop=1", "_blank");
        break;
        case 4:
            window.open("https://www.tawk.to/?utm_source=tawk-messenger&utm_medium=link&utm_campaign=referral&utm_term=5a5721cad7591465c706a328", "_blank");
        break;
    }
}
function menuChanges() {
    for (let i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener('click', function() {
            let optionIndex = i; 
            acctionsOfmenu(optionIndex);
        });
    }
}
menuChanges();