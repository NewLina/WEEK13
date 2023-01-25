const usernameInput=document.querySelector('.username__input');
const pictureInput=document.querySelector('.userpic__input');
const commentInput=document.querySelector('.text__input');
const avatar=document.querySelector('.avatar');
const username=document.querySelector('.comment__username');
const comment=document.querySelector('.comment__content');
const button=document.querySelector('.button');
const chat=document.querySelector('.chat-block');
const form=document.querySelector('.form__body');
const answerYes=document.querySelector('.answer--1');
const date=document.querySelector('.comment__date');


function capitalize(cleanModifier) {
    return cleanModifier.replace(/(^|\s)\S/g, function(upperCase) {return upperCase.toUpperCase()})
}

function checkName() {
    if (answerYes.checked===true) {
        const usernameValue=usernameInput.value;
        const modifier=usernameValue.toLowerCase();
const cleanModifier=modifier.trim();
username.textContent=capitalize(cleanModifier);
    } else {
        username.textContent="username";
    }
}

function getPicture(){
    const pictureSource=pictureInput.value;
    switch(pictureSource) {
        case '':
    choosePicture();
        break;
        default:
            avatar.src=pictureSource;
    }
}

function choosePicture() {
let picNumber=Math.random()*6|0;
let randomPicture = (picNumber===0) ? 'https://cdn.fishki.net/upload/post/2017/08/31/2369165/wallpaper-strange-funny-weird-crazy-absurd-awesome-259.jpg':(picNumber===1) ? 'https://pix.avax.news/avaxnews/98/b7/0002b798.jpeg':(picNumber===2) ? 'https://zefirka.net/wp-content/uploads/2018/09/konkurs-samyx-smeshnyx-fotografij-zhivotnyx-2018-1.jpg':(picNumber===3) ? 'https://i.pinimg.com/originals/55/a6/20/55a62058b47af5222a44fdd6e70b02e1.jpg':(picNumber===4) ? 'https://zooblog.ru/uploads/posts/2014-10/1412669433_zhivotnye-sposobnye-ubit-1.jpg' : 'https://4tololo.ru/sites/default/files/images/20170811210729.jpg';
avatar.src=randomPicture;}

function showDate() {
    const dateNow=new Date();
    const options= {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC',
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric'
    };
    date.textContent=`${dateNow.toLocaleString('ru', options)}`;
}

button.addEventListener('click', publishComment); 

function publishComment() {
    showDate();
getPicture();
checkName();
const commentValue=commentInput.value;
const filter = commentValue.replace(/viagra|XXX/ig, "***");
comment.textContent=filter;
chat.style.display='block';
}

button.addEventListener('click', clear); 

function clear(evt) {
    evt.preventDefault();
    usernameInput.value=""; 
    pictureInput.value="";
    commentInput.value="";
    };
