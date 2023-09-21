const display = document.querySelector('.display');
const div = document.createElement('div');
const resultDiv = document.createElement('div');
const clear = document.querySelector('.btn-clear');
const equal = document.querySelector('.btn-equal')
const deletebtn = document.querySelector('.btn-delete');
let btns = document.querySelectorAll('.btn');
let result;
let string = '';
function deleteDisplay() {
    display.removeChild(div);
    display.removeChild(resultDiv);
}

div.classList.add('display-content')
display.appendChild(div);
div.textContent = '0';
resultDiv.textContent = 'r';
resultDiv.classList.add('display-content');
display.appendChild(resultDiv);
btns = Array.from(btns);

clear.addEventListener('click', () => location.reload());

deletebtn.addEventListener('click', () => {
    string = string.slice(0, string.length - 1)
    deleteDisplay();
    div.textContent = string;
    display.appendChild(div);
    display.appendChild(resultDiv);
});


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        deleteDisplay();
        if (string.length < 32) {
            string += btn.innerHTML;          
        }
        div.textContent = string;
        if (string.length > 14) {
            div.classList.add('small')
        }
        else div.classList.remove('small');
        display.appendChild(div);
        display.appendChild(resultDiv);
    });
});


equal.addEventListener('click', () => {
    result = eval(string);
    resultDiv.textContent = result;
    if (result.toString().length > 14) {
        resultDiv.classList.add('small');
    }
    else resultDiv.classList.remove('small'); 
    display.appendChild(resultDiv);
    string = '';
   
});

