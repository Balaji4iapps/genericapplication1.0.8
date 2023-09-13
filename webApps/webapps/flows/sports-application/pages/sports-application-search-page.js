define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'], 
function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';

  class PageModule {
pagingLine(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'player_id'
        }));
      return data;
  };
  }
  return PageModule;
});
