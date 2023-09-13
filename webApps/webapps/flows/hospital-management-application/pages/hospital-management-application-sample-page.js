define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'], 
function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';

 

  var PageModule = function PageModule() {};

 

    PageModule.prototype.pagingSearchData = function(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'doc_code'
        }));
      return data;
    };

 


  return PageModule;
});