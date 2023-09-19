// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (tanggal) {
    case 0: tanggal > 0 && tanggal < 32
        break;
}
// untuk tanggal kalo di kasi angka 31 keatas gabisa, gmn ya puh masa ada tanggal 40 januari

switch (bulan) {
    case 1:
        bulan = "januari";
        break;
    case 2:
        bulan = "februari";
        break;
    case 3:
        bulan = "maret";
        break;
    case 4:
        bulan = "april";
        break;
    case 5:
        bulan = "mei";
        break;
    case 6:
        bulan = "juni";
        break;
    case 7:
        bulan = "juli";
        break;
    case 8:
        bulan = "agustus";
        break;
    case 9:
        bulan = "september";
        break;
    case 10:
        bulan = "oktober";
        break;
    case 11:
        bulan = "november";
        break;
    case 12:
        bulan = "desember";
        break;
}

switch (tahun) {
  case 0:
    tahun => 1900 && tahun <= 2100
    break;
}
// untuk tahun sama aja di kasi angka lain manut aja lagi, tolong ya puh 


console.log(tanggal,bulan,tahun);

//code switch case kamu disini