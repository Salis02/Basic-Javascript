var item = prompt('Masukkan makanan/minuman : \n Cth : Nasi, Daging, Sayur, Cola, Junkfood');

switch (item) {
    case 'Nasi':
    case 'Daging':
    case 'Sayur':
        alert('Anda memasukkan makanan/minuman sehat!')
        break;
    case 'Cola':
    case 'Junkfood':
        alert('Anda memasukkan makanan/minuman tidak sehat!')
        break;

    default:
        alert('Makanan/minuman Anda tidak dikenali!')
        break;
}