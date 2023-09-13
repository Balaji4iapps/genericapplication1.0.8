define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'], 
function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';

  class PageModule {

 

    /**
     *
     * @param {String} arg1
     * @return {String}
     */
    pagingLine(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'seq_inventory'
        }));
      return data;
    };

  }
  
  return PageModule;
});
