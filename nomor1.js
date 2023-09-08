function changeWord(selectedText, changedText, text) {
    // membuat variavel kata untuk memisahkan teks yang dimasukan menjadi array berdasarkan spasi menggunakan metode split
    const kata = text.split(' ');

    // Menggunakan metode map untuk membuat array baru dari variabel kata
    // kemudian di dalamnya masukkan operator untuk mengganti kata yang dipilih
    const hasil = kata.map((kata) => (kata === selectedText ? changedText : kata));

    // Menggabungkan kembali array menjadi teks menggunakan function atau method join
    return hasil.join(' ');
  }

  let kalimat1 = 'Andini sangat mencintai kamu selamanya';
  let kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

  // Mengganti kata 'mencintai' dengan 'membenci' dalam kalimat1
  console.log(changeWord('mencintai', 'membenci', kalimat1));

  // Mengganti kata 'bromo' dengan 'semeru' dalam kalimat2
  console.log(changeWord('bromo', 'semeru', kalimat2));