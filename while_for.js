var jumlahAngkot = 20;
var angkotBeroperasi = 12;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
    console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik')
    noAngkot++;
}
for(noAngkot <= angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++){
    console.log('Angkot no. ' + noAngkot + ' sedang diservice');
}