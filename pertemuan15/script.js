function hitungTotal() {

    let nama = document.getElementById("nama").value;
    let belanja = document.getElementById("belanja").value;

    if (nama.trim() === "" || belanja === "") {
        alert("Nama pembeli dan total belanja harus diisi!");
        return;
    }

    belanja = Number(belanja);

    if (belanja <= 0) {
        alert("Total belanja harus lebih dari 0!");
        return;
    }

    let diskon;

    if (belanja >= 500000) {
        diskon = 20;
    } else if (belanja >= 300000) {
        diskon = 15;
    } else if (belanja >= 100000) {
        diskon = 10;
    } else {
        diskon = 0;
    }

    let potongan = belanja * diskon / 100;
    let totalBayar = belanja - potongan;

    let rupiah = new Intl.NumberFormat('id-ID');

    document.getElementById("hasil").innerHTML =
        "Nama Pembeli: " + nama + "<br>" +
        "Total Belanja: Rp " + rupiah.format(belanja) + "<br>" +
        "Diskon: " + diskon + "%<br>" +
        "Potongan: Rp " + rupiah.format(potongan) + "<br>" +
        "Total Bayar: Rp " + rupiah.format(totalBayar);
}