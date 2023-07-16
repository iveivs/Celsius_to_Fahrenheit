const inputNum = document.getElementById('inputNum')
const createBtn = document.getElementById('btn')
const output = document.getElementById('output')
const clearBtn = document.getElementById('clear')

inputNum.value = ''
// console.log(inputNum.value);
createBtn.onclick = function () {
    if(inputNum.value !== '') {
        let toFaringeit = (9 / 5) * Number(inputNum.value) + 32 
        console.log(toFaringeit);
        toFaringeit += ' °F'
        output.innerHTML = toFaringeit
        inputNum.value += ' °C'
        inputNum.innerHTML = inputNum.value
    } else {
        alert('Введите данные')
    }
}

clearBtn.onclick = function (e) {
    inputNum.value = ''
    output.innerHTML = ''
}
