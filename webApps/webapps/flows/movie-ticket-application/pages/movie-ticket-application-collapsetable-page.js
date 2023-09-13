define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'],

 function (PagingDataProviderView,ArrayDataProvider) {
  'use strict';

var PageModule = function PageModule() {};


    PageModule.prototype.pagingSearchData = function(array) {



    var data = new PagingDataProviderView(new ArrayDataProvider(



    array, {



      idAttribute: 'moviesno'

   }));

       return data;
    };

    PageModule.prototype.pagingSearchData1 = function(array) {



    var data = new PagingDataProviderView(new ArrayDataProvider(



    array, {



      idAttribute: 'spectatorno'

   }));

       return data;
    };
return PageModule;



});








