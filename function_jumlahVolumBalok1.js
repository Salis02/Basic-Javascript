function jumlahVolumeBalok(a, b, c) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * b * c;
    volumeB = a * b / c;
    total = volumeA + volumeB;

    return total;
}
alert(jumlahVolumeBalok(10, 20, 5));
alert(jumlahVolumeBalok(100, 20, 5)); 