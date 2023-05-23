//Manipulasi Array

//1. Menambah isi Array

let arr = ['Salis'];
arr[1] = 'Nizar';
arr[2] = 'Qomaruzaman';
arr[4] = 'Al'; //ketika indexnya terlewat satu maka nilai nya dianggap undefined
//console.log(arr);

//2. Menghapus isi Array
let arr2 = ['Salis','Nizar','Qomaruzaman'];
arr2[2] = undefined;
//console.log(arr2);

//3. Menampilkan isi Array
// let arr3 = ['Salis','Nizar','Qomaruzaman','Al','Ghifari'];
// for (let i = 0; i < arr3.length; i++) {
//     console.log('Mahasiswa ke-' + (i+1) + ' ' + arr3[i]);
// }



//Method pada Array


//1. Length
// let arr3 = ['Salis','Nizar','Qomaruzaman','Al','Ghifari'];
// for (let i = 0; i < arr3.length; i++) {
//     console.log('Mahasiswa ke-' + (i+1) + ' ' + arr3[i]);
// }

//2. Join
let arr4 = ['Salis','Nizar','Qomaruzaman'];
//console.log(arr4.join(' '));

//3. Push, Pop, Shift, dan Unshift
  //a. Push (menambahkan elemen diakhir array)
  arr4.push('Al Ghifari', 'Sansqoz');
//   console.log(arr4.join(' - '));
  //b. Pop (menghapus elemen di akhir array)
  arr4.pop();
//   console.log(arr4.join(' - '));
    //!!!!Pada push kita bisa langsung menambahkan elemen lebih dari satu!!!!!!

  //c. Unshift (menambahkan elemen di awal array)
  arr4.unshift('Muhammad');
//   console.log(arr4.join(' _ '));
  //d. Shift (menghapus elemen di awal array)
  arr4.shift();
//   console.log(arr4.join(' - '));

//4. Slice dan Splice
  //a. Slice (mengiris-mengambil beberapa elemen array menjadi sebuah array yang baru)
  //Rumusnya : slice(indexAwal, indexAkhir), dimana indexAkhirnya tidak ikut teriris/terambil!
  let arr5 = ['Nizar','Martini','Mukafi','Syifa','Nayla', 'Dhuha','Tawa'];
  let arr6 = arr5.slice(1,3);
//   console.log(arr5.join(' - '));
  //b. Splice (menyambung-menyisipkan elemen ditengah array)
  //Rumusnya : splice(indexAwal, mauDihapusBerapa(opsi), elemenBaru1(opsi), elemenBaru2(opsi)...) 
  let arr7 = ['Serigala','Kumbang','Jaguar','Cicak','Kalajengking'];
//   arr7.splice(1,0,'Sego Kucing');
//   arr7.splice(1,1,'Sego Kucing');
  arr7.splice(1,3,'Sego Kucing');
//   console.log(arr7.join(' - '));

//5. Foreach
let arr8 = [1,2,3,4,5,6,7,8];
let mhs = ['Salis','Nizar','Qomaruzaman'];
arr8.forEach(function (e) {
    // console.log(e);
})
mhs.forEach(function (e, i) {
    // console.log('Mahasiswa ke- ' + (i+1) + ' adalah ' + e); //i = mengacu ke Index dan e = elemen
})

//6. Map
let arr9 = [1,2,4,6,7,3];
let kaliArr9 = arr9.map(function (e) { //jika arr9.map diganti dengan arr9.forEach maka Error, karena forEach tidak mengembalikan array
    return e * 2;
})
// alert(kaliArr9.join(' - '));

//7. Sort
let arr10 = [4,3,7,2,9,1,6,23,11,33];
console.log(arr10.join(' - '));
arr10.sort(function (a,b) {
    return a-b;
});
// console.log(arr10.join(' - '));

//8. Filter dan Find (dua method ini digunakan untuk mencari sebuah elemen dalam array)
  //a. Filter (bisa mengembalikan/menampilkan banyak nilai)
  let arr11 = [23,67,21,4,34,6,8,90];
  let arr111 = arr11.filter(function (x) {
      return x > 5;
  });
  // alert(arr111.join(' - '));
  //b. Find (hanya mengembalikan satu nilai pertama yang ditemukan && tidak bisa menghasilkan sebuah array)
  let arr112 = arr11.find(function (x) {
      return x > 5;
  });
  alert(arr112);
