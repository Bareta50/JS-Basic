function sumOfArrayNumbers() {
  let Array = [5, 12, 43, 65, 1, 7, 3, 9];
  var sumOfArray = 0;

  for (let i = 0; i < Array.length; i++) {
    sumOfArray += Array[i];
  }
  alert(`The sum of the Array ${Array} is : ${sumOfArray}`);
  console.log(`The sum of the Array is [${sumOfArray}]`);
}

sumOfArrayNumbers();

/*
 if (Array[i] === !isNaN) {
     sumOfArray += Array[i];
    } 
    else {
      alert(`The array element ${Array[i]} is invalid`);
      break;
    }
    
    Ova trebase da bide bonus kodot no ne mi raboti. Ovojk komentar moze da se promeni vo idnina ako najdam resenie.
*/
