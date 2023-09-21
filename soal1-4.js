//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = 'JavaScript ';
let second = 'is ';
let third = 'awesome ';
let fourth = 'and ';
let fifth = 'I ';
let sixth = 'love ';
let seventh = 'it!';

//code here


// ---------------------------------------
console.log(word + second + third + fourth + fifth + sixth + seventh);
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let words = 'wow JavaScript is so cool';
let exampleFirstWord = words[0] + words[1] + words[2];

words[0] = 'wow'
words[1] = 'JavaScript'
words[2] = 'is'
words[3] = 'so'
words[4] = 'cool'

console.log('First Word: ' + exampleFirstWord);

let exampleSecondWord = words[3] + words[4] + words[5] + words[6] + words[7] + words[8] + words[9] + words[10] + words[11] + words[12] + words[13]

let examplethirdWord = words[14] + words[15] + words[16]

let examplefourthWord = words[17] + words[18] + words[19]

let examplefifthWord = words[20] + words[21] + words[22] + words[23]+ words[24]
// ---------------------------------------
console.log(exampleFirstWord  + exampleSecondWord + examplethirdWord + examplefourthWord + examplefifthWord);
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 4);

console.log('First Word: ' + exampleFirstWord3);

let exampleSecondWord3 = word3.substring(4,14)
let examplethirdWord3 = word3.substring(14,17)
let examplefourthWord3 = word3.substring(17,20)
let examplefifthWord3 = word3.substring(20,25)
// ---------------------------------------
console.log(exampleFirstWord3 + exampleSecondWord3 + examplethirdWord3 + examplefourthWord3 + examplefifthWord3);
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 4);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

let exampleSecondWord4 = word3.substring(4,14)
let examplethirdWord4 = word3.substring(14,17)
let examplefourthWord4 = word3.substring(17,20)
let examplefifthWord4 = word3.substring(20,25)

let secondWordLength = exampleSecondWord4.length;
let thirdWordLength = examplethirdWord4.length;
let fourthWordLength = examplefourthWord4.length;
let fifthWordLength = examplefifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('second Word: ' + exampleSecondWord4 + ', with length: ' + secondWordLength);
console.log('third Word: ' + examplethirdWord4 + ', with length: ' + thirdWordLength);
console.log('fourth Word: ' + examplefourthWord4 + ', with length: ' + fourthWordLength);
console.log('fifth Word: ' + examplefifthWord4 + ', with length: ' + fifthWordLength);

console.log(exampleFirstWord4 + exampleSecondWord4 + examplethirdWord4 + examplefourthWord4 + examplefifthWord4);