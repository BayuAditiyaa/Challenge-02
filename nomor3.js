function getAngkaTerbesarKedua(arr) {
  // membuat kondisi jika parameter tidak diisi
  if (arr === undefined ) {
    return "Error : Loh kok gk ada parameternya?";

  // selanjutnya kondisi jika parameter diisi oleh array yang tidak sesuai
  }  else if (!arr || !Array.isArray(arr) || arr.length < 2) {
    return "ERROR: Parameter tidak valid";
  } else {    
  
    // membuat variabel untuk menampung array dari angka yang akan diurutkan
    // kemudian mengurutkan array dari besar ke terkecil tidak lupa juga untuk membuang duplikasi
    const sortedArray = Array.from(new Set(arr)).sort((a, b) => b - a);

    // menentukan angka terbesar kedua setelah array berhasil diurutkan dari besar ke kecil
    // menggunakan index 1 karena index array dimulai dari 0
    return sortedArray[1];
  }



}

  // Data array yang akan diuji
  const dataAngka = [9 , 4, 7, 7, 4, 3, 2, 2, 8];

  // memanggil function getAngkaTerbesarKedua yang telah dibuat
  console.log('angka terbesar kedua = ' + getAngkaTerbesarKedua(dataAngka)); // Output: 8