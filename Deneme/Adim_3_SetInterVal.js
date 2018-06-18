var sayi=1;
var interval=setInterval(function() {
    if(sayı==5)
    {
        clearInterval(interval);
    }
    console.log(sayi);
sayi++;
},1000);