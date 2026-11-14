// ex function 1
function sapa(nama) {
    console.log("Halo, nama saya " + nama);
}
// panggil function 1
sapa("Joko");
sapa("Juli");

// ex function 2
function perkenalan(nama, usia, alamat) {
    console.log("Nama : " + nama);
    console.log(" Usia : " + usia);
    console.log("Alamat : " + alamat);
}
// panggil function 2
perkenalan("Alince", "24", "Paris");

// ex function with return 
function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}
let hasil = hitungLuas(10, 5);
console.log("Luas = " + hitungLuas);

// ex function with expression 
const tambah = function (a, b) {
    return a + b;
};
console.log(tambah(10, 6));

// OBJECT 
let mhs = {
    nama: "Budi",
    nim: "202463482034",
    kelas: "05SIESE004",
};
mhs.semester = "5"; // add data
mhs.nama = "Coki"; // change data 
console.log(mhs);
console.log(mhs.nama);

// METHODE fungsi yang di miliki oleh object 
let mobil = {
    merek: "Honda",
    model: "Civic",
    warna: "Hitam",
    tahun: "2026",

    tampilkanInfo: function () {
        console.log("Merek : " + this.merek);
        console.log("Model : " + this.model);
        console.log("Warna : " + this.warna);
    },
};
// panggil data 
mobil.tampilkanInfo();

// Method 2
let kalkulator = {
    tambah: function (a, b) {
        return a + b;
    },
    kurang: function (a, b) {
        return a - b;
    },
};
console.log(kalkulator.tambah(10, 9));
console.log(kalkulator.kurang(40, 8));

// studi kasus menghitung hasil akhir dan menentukan grade 

let mahasiswa = {
    nama: "Jule",
    nim: "202464816481",
    kelas: "05SISE004",
    prodi: "Sistem Informasi",
    nilaiTugas: 80, // 30%
    nilaiUTS: 70, // 30%
    nilaiUAS: 80, // 30%
    // membuat method untuk menghitung nilai akhir
    hitungNilaiAkhir: function () {
        return this.nilaiTugas * 0.3 + this.nilaiUTS * 0.3 + this.nilaiUAS * 0.4;
    },
    // membuat method untuk menampilkan data mahasiswa
    tampilkanData: function () {
        console.log("Nama : " + this.nama);
        console.log("Nim : " + this.nim);
        console.log("Kelas : " + this.kelas);
        console.log("Program Studi : " + this.prdi);
        console.log("Nilai Akhir : " + this.hitungNilaiAkhir());
    },
};
// membuat function untuk menentukan grade 
function tentukanGrade(nilai) {
    if (nilai >= 85) {
        return "A";
    } else if (nilai >= 75) {
        return "B";
    } else if (nilai >= 65) {
        return "C";
    } else {
        return "D";
    }
}
// panggil method object
mahasiswa.tampilkanData();
// panggil function grade
let nilaiAkhir = mahasiswa.hitungNilaiAkhir();
console.log("Grade : ", tentukanGrade(nilaiAkhir));