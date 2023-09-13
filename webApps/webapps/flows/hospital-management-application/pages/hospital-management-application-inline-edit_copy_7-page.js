define([], () => {
  'use strict';

  class PageModule {
// original
//     	  GenerateDetails (array) {
//         //console.log("XX2----1>" + JSON.stringify(array));
//         var payload = {};
//         let isValid = "true";
//         let message = null;
//         let ldata = 0;
//         for (var i = 0; i < array.length; i++) {
//           // if(array[i].doc_code == null || array[i].doc_code == 0)
//           // {
//             array[i].doc_name = document.getElementById('doc_name' + i) == null ? null : document.getElementById('doc_name' + i).value;
//             array[i].doc_gender = document.getElementById('doc_gender' + i) == null ? null : document.getElementById('doc_gender' + i).value;
//             array[i].doc_designation = document.getElementById('doc_designation' + i) == null ? null : document.getElementById('doc_designation' + i).value;
//             array[i].doc_address = document.getElementById('doc_address' + i) == null ? null : document.getElementById('doc_address' + i).value;
//             array[i].doc_fees = document.getElementById('doc_fees' + i) == null ? null : document.getElementById('doc_fees' + i).value;
//             array[i].medical_fees = document.getElementById('medical_fees' + i) == null ? null : document.getElementById('medical_fees' + i).value;
//             array[i].total_fees = document.getElementById('total_fees' + i) == null ? null : document.getElementById('total_fees' + i).value;
//             // array[i].doc_code = 0;
// console.log("HELLO " + "i " + i + "doc_name[i] " + array[i].doc_name);
//           // }
//             ldata = ldata + 1;
//         }

//     // console.log("ldata==>ldata==> Start==>" + ldata);
//     payload.item = array; // this is used in for loop buttonaction1

//     // console.log("XX2----1>Final TEST==>3" + JSON.stringify(payload));
//     // console.log("ldata==>ldata==>" + ldata);
//     return {
//         'isValid': isValid,
//         'message': message,
//         'payload': payload
//     };
// };

GenerateDetails(array) {
    var payload = {};
    let isValid = "true";
    let message = null;
    let ldata = 0;

    for (var i = 0; i < array.length; i++) {
        var docNameElement = document.getElementById('doc_name' + i);
        var docGenderElement = document.getElementById('doc_gender' + i);
        var docDesignationElement = document.getElementById('doc_designation' + i);
        var docAddressElement = document.getElementById('doc_address' + i);
        var docFeesElement = document.getElementById('doc_fees' + i);
        var medicalFeesElement = document.getElementById('medical_fees' + i);
        var totalFeesElement = document.getElementById('total_fees' + i);

        array[i].doc_name = docNameElement ? docNameElement.value : array[i].doc_name;
        array[i].doc_gender = docGenderElement ? docGenderElement.value : array[i].doc_gender;
        array[i].doc_designation = docDesignationElement ? docDesignationElement.value : array[i].doc_designation;
        array[i].doc_address = docAddressElement ? docAddressElement.value : array[i].doc_address;
        array[i].doc_fees = docFeesElement ? docFeesElement.value : array[i].doc_fees;
        array[i].medical_fees = medicalFeesElement ? medicalFeesElement.value : array[i].medical_fees;
        array[i].total_fees = totalFeesElement ? totalFeesElement.value : array[i].total_fees;

        console.log("HELLO " + "i " + i + "doc_name[i] " + array[i].doc_name);

        ldata = ldata + 1;
    }

    payload.item = array;

    return {
        'isValid': isValid,
        'message': message,
        'payload': payload
    };
};


 calculation (index) {   	
      let a =  document.getElementById('doc_fees' + index).value;
      let b =  document.getElementById('medical_fees' + index).value;
      document.getElementById('total_fees' + index).value = a + b;  
      console.log(a+b +"888888888888888888888888888888");
    };

printArrayValue(array) {
      console.log("24-08-2023 >" + JSON.stringify(array));
      };

  }

  return PageModule;
});
