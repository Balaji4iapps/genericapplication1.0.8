define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'],

function(PagingDataProviderView,ArrayDataProvider) {

  'use strict';

  class PageModule {
     
 pagingLine(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'depart_num'
        }));
      return data;
   
 }

  }
  
  return PageModule;
});