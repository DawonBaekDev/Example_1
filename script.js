function changeMessage(){

    const msg = document.getElementById("msg");

    msg.innerHTML = "Git도 연습하고 JavaScript도 공부 중입니다! 🚀";

}

const now = new Date();

document.getElementById("msg").innerHTML = now.toLocaleString();