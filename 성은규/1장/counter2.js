const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = curret + 1;
}; // +1 버튼이 눌리면, id가 number인 DOM을 선택해서 innerText 속성을 1씩 더해준다.

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
}
