define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'],

function(PagingDataProviderView,ArrayDataProvider) {

  'use strict';

  class PageModule {
     
 pagingLine(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'product_num'
        }));
      return data;
    }

  }
  
  return PageModule;
});
