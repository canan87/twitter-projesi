//console.log('lo')

const buyukDiv=document.getElementById('buyukDiv')
//console.log(buyukDiv)

//innerText
//innerText html elmaının içerisine bir yaz ekler

buyukDiv.innerText='<i class="fa-brands fa-twitter"></i>'

//<i class="fa-brands fa-twitter"></i>

//innerHTML 
//innerHTML elemntin içine html etiketi koymayı sağlar

buyukDiv.innerHTML=`<i class="fa-brands fa-twitter"></i>`

const toplama=(sayi1,sayi2)=>{
    
  console.log(sayi1+sayi2)
}

toplama(2,4)