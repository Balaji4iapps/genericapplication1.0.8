define([], () => {
  'use strict';

  class PageModule {
   
         getDates() {
            var startDate = document.getElementById("start_date").value;
            var endDate = document.getElementById("end_date").value;
            
            console.log("Start Date:", startDate);
            console.log("End Date:", endDate);

            // You can use the 'startDate' and 'endDate' variables for further processing here
        }
  }
  
  return PageModule;
});
