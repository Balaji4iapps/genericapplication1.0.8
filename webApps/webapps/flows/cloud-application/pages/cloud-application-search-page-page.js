define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'],



function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';
  var PageModule = function PageModule() {};
// Search
    PageModule.prototype.pagingcloudtable = function(array) {



    var data = new PagingDataProviderView(new ArrayDataProvider(



    array, {



      idAttribute: 'cloud_id'



      }
      
      ));



    return data;
    };
  return PageModule;



});