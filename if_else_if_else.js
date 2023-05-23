var angka = prompt('Masukkan Angka: ');

if (angka %2 == 0){
    alert('Anda memasukkan angka genap');
} else if (angka %2 == 1){
    alert('Anda memasukkan angka ganjil');
}else{
    alert('Angka blok!')
}

var jumlahAngkot = 10;
var angkotBeroperasi = 6;

for(noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++)
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik');
    } else if (noAngkot == angkotBeroperasi + 1 || noAngkot == angkotBeroperasi + 2 || noAngkot == 5) {
        console.log('Angkot no. '+ noAngkot + ' sedang OTW')
    }else {
        console.log('Angkot no. '+ noAngkot + ' sedang diservis');
    }
