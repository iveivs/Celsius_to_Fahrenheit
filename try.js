let reg = /[0-9]/;
let inp = document.querySelector('#name')
let block = document.querySelector('.block-text')

document.querySelector('.btn').onclick = function(e) {
    e.preventDefault()
    if(!reg.test(inp.value)){
        alert('it not a number')
    } else{
        console.log('yes');
    }
}