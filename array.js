var binatang =['Sapi','Beruang','Gajah','Harimau','Kucing','Singa','Elang','Buaya'];

//Menampilkan key dan value
alert(binatang[5]);

//Membuktikan tipe Array
alert(typeof(binatang));

//Menghitung jumlah elemen array - function/method length
alert(binatang.length);

//Elemen pada array boleh memiliki tipe data yang berbeda

var mhs =['Salis','Nizar','Qomaruzaman'] //String
var nmr = [3,65,32,0.55]; //Integer
var arr = ['Awokawok',43, true]; //String + Integer + Boolean
var myArr = function teks() {
    alert('Halo'+ teks)
    return teks;
}
var myArray = ['Awokawok', 43, false, teks ]; //Function di dalam Array
var arrayInArray = ['Awokawok', 43, false, teks,['Awokawok', 43, false, teks]]; //Array didalam Array - array multidimensi/array bersarang
alert(arrayInArray[4][1]);