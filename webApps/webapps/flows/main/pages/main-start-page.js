define([], function() {

  'use strict';




  var PageModule = function PageModule() {};

    PageModule.prototype.createIn = function(names){

var surrounded = '\''+names.split(',').join('\',\'')+'\'';

var query = 'name in ('+surrounded+')'

var ret = {"q" : query};

return ret;

}

  return PageModule;
});
