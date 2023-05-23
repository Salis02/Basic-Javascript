var tanya = true;
while(tanya){
//Menentukan pilihan player
var p = prompt('PERMAINAN SUIT SEDERHANA DENGAN JAVASCRIPT\nMasukkan jargon kamu!\nContoh: Gajah, Semut, dan Human')

//Menentukan pilihan computer
//Membangkitkan bilangan random
var comp = Math.random();

if(comp < 0.34){
    comp = 'Gajah';
}else if (comp >= 0.34 && comp <= 0.67){
    comp = 'Semut';
}else{
    comp = 'Human';
}

//Menentukan rules
var hasil = '';

if(p == comp){
    hasil = 'Seri';
}else if(p == 'Gajah'){
    hasil = (comp == 'Semut') ? 'Menang!' : 'Kalah!';
}else if(p == 'Semut'){
    hasil = (comp == 'Human')? 'Kalah!': 'Menang!';
}else if(p == 'Human'){
    hasil = (comp == 'Gajah')? 'Kalah!' : 'Menang!';
}else{
    hasil = 'Anda memasukkan pilihan yang diluar nurul, tidak ramah, dan mencurigakan';
}

//Tampilkan hasil

alert('Kamu memilih ' + p + ' dan computer memilih ' + comp + hasil);  

tanya = confirm('Ulangi bermain lagi?')
}
alert('Terima kasih sudah bermain')
