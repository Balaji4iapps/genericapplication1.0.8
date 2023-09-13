define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'], 
function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';


  class PageModule {
        paginglinegroupa(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'c_id'
        }));
      return data;
    };

  }
  
  return PageModule;
});