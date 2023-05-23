var jumlahAngkot = 20;
var angkotBeroperasi = 12;

for (var noAngkot =1; noAngkot <= jumlahAngkot; noAngkot++){
    if (noAngkot <= 12) {
        console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik.');
    } else {
        console.log('Angkot no. ' + noAngkot + ` sedang diservis.`)
    }
}