function checkTypeNumber(givenNumber) {

    // membuat pengkondisian jika parameter tidak ada alias undefined
    if (givenNumber === undefined) {
      return "Error : Bro where is the parameter?";
    } else {
        //memastikan parameter adalah integer
      if (Number.isInteger(givenNumber)) {
        // membuat kondisi jika angka yang dimasukkan habis dibagi 2 yaitu genap, else ganjil
        if (givenNumber % 2 === 0) {
          return "GENAP";
        } else {
          return "GANJIL";
        }
      } else {
        //eror jika memasukkan parameter selain ganjil dan genap, atau {}. [], dan "3" seperti di challenge
        return "Error : invalid data type";
      }
    }
    
  }

  console.log(checkTypeNumber())