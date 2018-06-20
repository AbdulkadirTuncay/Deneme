var sayi=1;
var interval=setInterval(function() {
    if(sayi==5)
    {
        clearInterval(interval);
    }
    console.log(sayi);
sayi++;
},1000);