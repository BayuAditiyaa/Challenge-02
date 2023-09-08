const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

  function formatRupiah(angka) {
    // Menggunakan toLocaleString dengan pengaturan lokal Indonesia (ID)
    return angka.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  }


  function getInfoPenjualan (dataPenjualan){

    // membuat variabel untuk menghitung totaljual
    let totalJual = 0;
    // membuat perulangan untuk menghitung seluruh data dari hargaJual dan totalTerjual
     for ( i=0 ; i < dataPenjualan.length; i++){
     totalJual += dataPenjualan[i].hargaJual * dataPenjualan[i].totalTerjual;
     }
    
    // membuat variabel untuk menghitung modal
    // kemudian membuat perulangan untuk menghitung totalModal dari rumus hargaBeli * (totalTerjual + sisaStok)
    let uangModal = 0;
     for (j = 0; j < dataPenjualan.length; j++){
     uangModal += dataPenjualan[j].hargaBeli * (dataPenjualan[j].totalTerjual + dataPenjualan[j].sisaStok);
      }
    // membuat variabel untuk menghitung hasil keuntungan
    // kemudian membuat perulangan untuk menghitung hasil keuntungan dari rumus (hargaJual - hargaBeli) * totalTerjual
    let hasilKeuntungan = 0;
      for ( k = 0; k < dataPenjualan.length; k++){
        hasilKeuntungan += (dataPenjualan[k].hargaJual - dataPenjualan[k].hargaBeli) * dataPenjualan[k].totalTerjual;
      }
    
    // membuat variabel untuk menghitung presentase keuntungan
    // menghitung presentase keuntungan dari rumus (hasilKeuntungan / uangModal) * 100, kemudian tambahkan toFixed untuk membatasi angka dibelakang koma
    presentaseKeuntungan = ((hasilKeuntungan / uangModal) * 100).toFixed(2);

    // membuat dua variabel untuk mengetahui buku terlaris
    let bukuTerlaris;
    let banyakTerjual = -1;
    
    // menggunakan perulangan untuk mengetahui apa nama buku terlaris dengan menggunakan data dari value totalTerjual
    for ( l = 0; l < dataPenjualan.length; l++) {
      const harga = dataPenjualan[l].totalTerjual;
  
      if (harga > banyakTerjual) {
        banyakTerjual = harga;
        bukuTerlaris = dataPenjualan[l].namaProduk;
      }
    }


    const penjualanPenulis = {};

    // Menghitung total penjualan untuk setiap penulis
    dataPenjualanNovel.forEach((produk) => {
      if (!penjualanPenulis[produk.penulis]) {
        penjualanPenulis[produk.penulis] = 0;
      }
      penjualanPenulis[produk.penulis] += produk.totalTerjual;
    });
  
    let penjualanTerbanyak = 0;
    let penulisTerpopuler = '';
  
    // Mencari penulis dengan penjualan terbanyak
    for (const penulis in penjualanPenulis) {
      if (penjualanPenulis[penulis] > penjualanTerbanyak) {
        penjualanTerbanyak = penjualanPenulis[penulis];
        penulisTerpopuler = penulis;
      }
    }



    return console.log("Total Keuntungan : " + formatRupiah(hasilKeuntungan) + "\n"),
     console.log("Total Modal : " + formatRupiah(uangModal) + "\n"),
     console.log("Presentase Keuntungan : " + presentaseKeuntungan + "%" + "\n"),
     console.log("Buku Terlaris : " + bukuTerlaris + "\n"),
     console.log("Penulis Terlaris : " + penulisTerpopuler + "\n")
  }



  console.log(getInfoPenjualan(dataPenjualanNovel))