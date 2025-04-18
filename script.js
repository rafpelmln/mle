const dataMobil = {
    evo3: {
        gambar: "mle3.png",
        nama: "Mitsubishi Lancer Evo III",
        namadesk: "Mitsubishi Lancer Evo III (Evo 3)",
        deskripsi:"Mitsubishi Lancer Evolution III, atau sering disebut Evo 3, adalah generasi ketiga dari jajaran mobil sport legendaris Mitsubishi Lancer Evolution. Diluncurkan pada tahun 1995, mobil ini dikembangkan khusus untuk memenuhi regulasi World Rally Championship (WRC), sehingga performanya benar-benar dibuat serius di jalan maupun lintasan balap.",
        spek: [
            "Mesin: 2.0L turbocharged DOHC inline-4 (4G63T)",
            "Tenaga: Sekitar 270 PS (266 hp)",
            "Torsi: Sekitar 309 Nm",
            "Transmisi: Manual 5-speed",
            "Drivetrain: AWD (All-Wheel Drive)",
            "Berat: ± 1260 kg"
        ],
        fitur: [
            "Desain Aerodinamis Baru: bumper depan lebih besar, side skirt, dan spoiler belakang tinggi",
            "Intercooler lebih besar & sistem turbo ditingkatkan",
            "Limited-slip differential (LSD) untuk traksi maksimal",
            "Handling luar biasa berkat suspensi sport + AWD"
        ]
    },
    evo8: {
        gambar: "mle8.png",
        nama: "Mitsubishi Lancer Evo VIII",
        namadesk: "Mitsubishi Lancer Evo VIII (Evo 8)",
        deskripsi: "Mitsubishi Lancer Evolution VIII, atau biasa disebut Evo 8, adalah generasi ke-8 dari seri Lancer Evolution. Mobil ini diluncurkan sekitar tahun 2003, dan jadi salah satu Evo paling populer berkat tampilannya yang sangar dan performa yang buas. Di generasi ini, Mitsubishi mulai lebih serius mengincar pasar global, termasuk Amerika Serikat.",
        spek: [
            "Mesin: 2.0L turbocharged DOHC inline-4 (4G63T)",
            "Tenaga: Sekitar 280 PS (276 hp)",
            "Torsi: Sekitar 392 Nm",
            "Transmisi: Manual 5-speed atau 6-speed",
            "Drivetrain: AWD",
            "Berat: ± 1400 kg"
        ],
        fitur: [
            "Active Center Differential (ACD)",
            "Desain baru yang lebih agresif",
            "Suspensi lebih canggih dibanding Evo 3",
            "Interior lebih modern dengan fitur kenyamanan tambahan"
        ]
    },
    evo9: {
        gambar: "mle9.png",
        nama: "Mitsubishi Lancer Evo IX",
        namadesk: "Mitsubishi Lancer Evo IX (Evo 9)",
        deskripsi: "Evo 9 dirilis sekitar tahun 2005, dan masih mengandalkan platform yang sama dengan Evo 8, tapi dikasih banyak peningkatan dari sisi teknologi dan performa mesin. Ini generasi terakhir sebelum Mitsubishi pindah ke desain dan platform baru di Evo X.",
        spek: [
            "Mesin: 2.0L turbocharged MIVEC DOHC inline-4 (4G63)",
            "Tenaga: Sekitar 280 PS (276 hp)",
            "Torsi: Sekitar 400 Nm",
            "Transmisi: Manual 6-speed",
            "Drivetrain: AWD dengan Super AYC",
            "Berat: ± 1410 kg"
        ],
        fitur: [
            "Teknologi MIVEC untuk efisiensi & performa",
            "Super Active Yaw Control (Super AYC)",
            "Handling sangat presisi di kecepatan tinggi",
            "Desain lebih aerodinamis dari Evo 8"
        ]
    }
};

function gantiMobil(kode) {
    const mobil = dataMobil[kode];
    document.getElementById('mobil').src = mobil.gambar;
    document.getElementById('mle').innerHTML = mobil.nama;
    document.getElementById("nama-desk").innerHTML = mobil.namadesk;
    document.getElementById("desk").innerHTML = mobil.deskripsi;

    const spekList = document.getElementById("spek-list");
    spekList.innerHTML = mobil.spek.map(item => `<li>${item}</li>`).join("");

    const fiturList = document.getElementById("fitur-list");
    fiturList.innerHTML = mobil.fitur.map(item => `<li>${item}</li>`).join("");
}
document.getElementById("mle3").onclick = () => gantiMobil("evo3")
document.getElementById("mle8").onclick = () => gantiMobil("evo8")
document.getElementById("mle9").onclick = () => gantiMobil("evo9")

// document.getElementById("mle3").onclick = () => gantiMobil("mle3.png", "Mitsubishi Lancer Evo III")
// document.getElementById("mle8").onclick = () => gantiMobil("mle8.png", "Mitsubishi Lancer Evo VIII")
// document.getElementById("mle9").onclick = () => gantiMobil("mle9.png", "Mitsubishi Lancer Evo IX")

// document.getElementById("mle3").onclick= function () {
//     document.getElementById("mobil").src="mle3.png"
//     document.getElementById("mle").innerHTML = "Mitsubishi Lancer Evo III";
// }
// document.getElementById("mle8").onclick= function () {
//     document.getElementById("mobil").src="mle8.png"
//     document.getElementById("mle").innerHTML = "Mitsubishi Lancer Evo VIII";
// }
// document.getElementById("mle9").onclick= function () {
//     document.getElementById("mobil").src="mle9.png"
//     document.getElementById("mle").innerHTML = "Mitsubishi Lancer Evo IX";
// }