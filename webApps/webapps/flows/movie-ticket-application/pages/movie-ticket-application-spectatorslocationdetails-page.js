define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'],



function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';
  var PageModule = function PageModule() {};
// Search
    PageModule.prototype.pagingSearchData = function(array) {



    var data = new PagingDataProviderView(new ArrayDataProvider(



    array, {



      idAttribute: 'locationno'



      }));



    return data;
    };
    
  return PageModule;



});