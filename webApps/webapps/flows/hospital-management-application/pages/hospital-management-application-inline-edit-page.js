define([], () => {
  'use strict';

  class PageModule {

    	  GenerateDetails (array) {
        //console.log("XX2----1>" + JSON.stringify(array));
        var payload = {};
        let isValid = "true";
        let message = null;
        let ldata = 0;
        for (var i = 0; i < array.length; i++) {
          if(array[i].doc_code == null || array[i].doc_code == 0)
          {
            array[i].doc_name = document.getElementById('doc_name' + i) == null ? null : document.getElementById('doc_name' + i).value;
            array[i].doc_gender = document.getElementById('doc_gender' + i) == null ? null : document.getElementById('doc_gender' + i).value;
            array[i].doc_designation = document.getElementById('doc_designation' + i) == null ? null : document.getElementById('doc_designation' + i).value;
            array[i].doc_address = document.getElementById('doc_address' + i) == null ? null : document.getElementById('doc_address' + i).value;
            array[i].doc_code = 0;
          }
            ldata = ldata + 1;
        }

    //console.log("ldata==>ldata==> Start==>" + ldata);
    payload.item = array; // this is used in for loop buttonaction1

    //console.log("XX2----1>Final TEST==>3" + JSON.stringify(payload));
    //console.log("ldata==>ldata==>" + ldata);
    return {
        'isValid': isValid,
        'message': message,
        'payload': payload
    };
};
  }
  
  
  return PageModule;
});
