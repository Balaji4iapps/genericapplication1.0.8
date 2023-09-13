define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'], (PagingDataProviderView,ArrayDataProvider) => {

  'use strict';

 

  class PageModule {

 

 

    pagingSearch(array) {

      var data = new PagingDataProviderView(new ArrayDataProvider(

      array, {

        idAttribute: 'pat_id'

        }));

      return data;

    };
    
getPrimaryKey(naviValue, keyValue) {

      var keyValueResult=null;

      // console.log("naviValue Key===>"+naviValue);

    // console.log("Key===>"+keyValue);

     if(naviValue==="CREATE"){

        keyValueResult="0";

      // console.log("ADD==>"+keyValueResult);

    }else{

      keyValueResult=keyValue;

    //  console.log("ELS==>"+keyValueResult);

    }

    return keyValueResult;

     

    };

 

 

    /**

     *

     * @param {String} arg1

     * @return {String}

     */

    onPageNaviFun(naviValue, keyValue) {

        var navi=null;

        if(naviValue==="CREATE"||naviValue==="Create"){

            navi="POST";

        }else{

          navi="PUT";

        }

        // console.log("navi==>"+navi);

        return navi;

        }}

  return PageModule;

});

 