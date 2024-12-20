

function increase()
{
    let counter = document.querySelector("#counter")
    let error = document.querySelector('.error-msg')
    let clear = document.querySelector('#clear')
    counter.innerHTML=Number(counter.textContent)+1;
    error.style.display=Number(counter.textContent)==0 ? "block":"none";
    clear.style.display=Number(counter.textContent)==0 ? "none":"inline";

}

function decrease()
{
    let counter = document.querySelector("#counter")
    let error = document.querySelector('.error-msg')
    let clear = document.querySelector('#clear')
    if(Number(counter.textContent)>0)
    counter.innerHTML=Number(counter.textContent)-1;
    error.style.display=Number(counter.textContent)==0 ? "block":"none";
    clear.style.display=Number(counter.textContent)==0 ? "none":"inline";

}

function reset()
{
    let counter = document.querySelector("#counter")
    let clear = document.querySelector('#clear')
    let error = document.querySelector('.error-msg')
    counter.innerHTML=0;
    error.style.display=Number(counter.textContent)==0 ? "block":"none";
    clear.style.display=Number(counter.textContent)==0 ? "none":"inline";
}