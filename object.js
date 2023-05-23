let mhs = ['Salis Nizar Qomaruzaman', true, [3.63,3.56,3.14,3.67,3.56]];

function IPKumulatif(IPSemester) {
    let total = o;
    for (let i = 0; i < IPSemester.length; i++) {
        total += IPSemester[i];
    }
    return total/IPSemester.length;
};


//Membuat Object

//1. Literal
let mahasiswa = {
    nama : 'Salis Nizar Qomaruzaman',
    lulus : true,
    IPSemester : [3.63,3.56,3.14,3.67,3.56],
    IPKumulatif : function () {
        let total = 0;
        let ips = this.IPSemester;
        for (let i = 0; i < ips.length; i++) {
            total += ips[i];
        }
        return total/ips.length;
    },
    alamat : {
        Jl : 'Taman Sari',
        Kota : 'Kebumen',
        Profesi : 'Software Engineering',
    },
};

//2. Function Declration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
    let mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

let mhs1 = buatObjectMahasiswa('Salis Nizar Qomaruzaman','203200140','203200140','Teknik Informatika');


//3. Constructor
function Mahasiswa(nama, nim, email, jurusan) {
    //let this = {};
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    //return this;
}

let mhs2 = new Mahasiswa('Al Ghifari','20393919','nizarsalis@gmail.com','Awokawok');
