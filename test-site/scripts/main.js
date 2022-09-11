let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/beautiful.jpg') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/beautiful.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '哈哈' + myName + '你来了';
    }
   
  }

    if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = '哈哈' + storedName + '你来了';
      }

      myButton.onclick = function() {
        setUserName();
     }

      
