var item = prompt('Masukkan makanan/minuman : \n Cth : Nasi, Daging, Sayur, Cola, Junkfood');

switch (item) {
    case 'Nasi':
        alert('Anda memasukkan makanan/minuman sehat!')
        break;
    case 'Daging':
        alert('Anda memasukkan makanan/minuman sehat!')
        break;
    case 'Sayur':
        alert('Anda memasukkan makanan/minuman sehat!')
        break;
    case 'Cola':
        alert('Anda memasukkan makanan/minuman tidak sehat!')
        break;
    case 'Junkfood':
        alert('Anda memasukkan makanan/minuman tidak sehat!')
        break;

    default:
        alert('Makanan/minuman Anda tidak dikenali!')
        break;
}