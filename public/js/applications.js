$(function () {

  /**
   * Get the form info from the page.
   * Clear the form. 
   * Send the data in a POST request.
   */
  const addProvider = function (event) {
    event.preventDefault();

    // Here we grab the form elements
    const newProvider = {
      customerName: $('#reserve-name').val().trim(),
      phoneNumber: $('#reserve-phone').val().trim(),
      customerEmail: $('#reserve-email').val().trim(),
      serviceType: $("#serviceType :selected").val() 
    };
    console.log(newProvider);
    // Clear the form when submitting
    $('#reserve-name').val('');
    $('#reserve-phone').val('');
    $('#reserve-email').val('');
    $("#serviceType :selected").val(); 

    console.log(newProvider);

    $.ajax({
      method: 'GET',
      url: 'api/applications',
      data: newProvider
    })
      .then(function () {
        console.log("functions");
        return $.ajax({
          method: 'GET',
          url: 'api/applications'

        }); 
      }).then(function (response) {
              
        console.log(response[serviceType]);
      });
   

  }; 
    $('.submit').on('load', addProvider);
 
});

$(function () {

  /**
   * Get the form info from the page.
   * Clear the form. 
   * Send the data in a POST request.
   */
  const addProvider = function (event) {
      event.preventDefault();

      // Here we grab the form elements
      const newProvider = {
          customerName: $('#reserve-name').val().trim(),
          phoneNumber: $('#reserve-phone').val().trim(),
          customerEmail: $('#reserve-email').val().trim(),
          serviceType: $("#serviceType :selected").val()
      };

      // Clear the form when submitting
      $('#reserve-name').val('');
      $('#reserve-phone').val('');
      $('#reserve-email').val('');
      $("#serviceType :selected").val();

      $.ajax({
        method: 'POST',
        url: 'api/applications',
        data: newProvider
      })
        .then(function () {
          return $.ajax({
            method: 'GET',
            url: 'api/applications'
  
          });
        }).then(function (serviceType) {
  
     
          console.log(newProvider.serviceType);
          return (newProvider.serviceType);
  
        });
  
    };
    $('.submit').on('click', addProvider);
  
  });
  

    