define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'], 
function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';


  class PageModule {
        pagingLine1(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 's_no'
        }));
      return data;
    };
    pagingLine2(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 's_no'
        }));
      return data;
    };
    pagingLine3(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 's_no'
        }));
      return data;
    };
    pagingLine4(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 's_no'
        }));
      return data;
    };
    pagingLine5(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 's_no'
        }));
      return data;
    };
    pagingLine6(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 's_no'
        }));
      return data;
    };
    pagingLine7(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 's_no'
        }));
      return data;
    };
    pagingLine8(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 's_no'
        }));
      return data;
    };
  }
  
  return PageModule;
});
