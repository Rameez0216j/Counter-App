let counter=document.querySelector("#counter");

let minus =()=>{
    let val=parseInt(counter.innerText);
    val=val-1;
    counter.innerText=val;
}

let plus = () => {
    let val=parseInt(counter.innerText);
    val=val+1;
    counter.innerText=val;
}