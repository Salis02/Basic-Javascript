
function tambah(a, b) {
    return a + b;
}  
var tanya = true;
while (tanya) {
    
    alert('OPERASI PENJUMLAHAN DENGAN FUNCTION');
    var a = parseInt(prompt('Masukkan bilangan 1 : '));
    var b = parseInt(prompt('Masukkan bilangan 2 : '));
    
    var hasil = tambah(a,b);
    alert(hasil);

    tanya = confirm('Ulangi?');
}
    alert('Terima kasih')

function kambuh() {
    return arguments;
}

var kembung = kambuh(3,9,32,"Assalamu'alaikum", true);
console.log(kembung);

function jumlah() {
    var hasil = 0;
    for( var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
    
}
var total = jumlah(4,2,6,7);
alert(total);