function changeMessage(){

    const msg = document.getElementById("msg");

    msg.innerHTML = "Git도 연습하고 JavaScript도 공부 중입니다! 🚀";

}

const now = new Date();

document.getElementById("date").innerHTML = now.toLocaleString();


function showTime() {
    const now = new Date();
    document.getElementById("date").innerHTML = now.toLocaleString();
}

showTime();              // 처음 한 번 실행
setInterval(showTime, 1000); // 1초마다 갱신