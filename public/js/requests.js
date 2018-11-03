$(function () {

    /**
     * Get the form info from the page.
     * Clear the form. 
     * Send the data in a POST request.
     */
    const addRequest = function (event) {
      event.preventDefault();
  
      // Here we grab the form elements
      const newRequest = {
        customerName: $('#reserve-name').val().trim(),
        phoneNumber: $('#reserve-phone').val().trim(),
        customerEmail: $('#reserve-email').val().trim(),
        serviceType: $("#serviceType :selected").val() 
      };
      console.log(newRequest);
  
      // Clear the form when submitting
      $('#reserve-name').val('');
      $('#reserve-phone').val('');
      $('#reserve-email').val('');
      $('#reserve-unique-id').val('');
  
      $.ajax({
        method: 'POST',
        url: 'api/requests',
        data: newRequest
      })
        .then(function () {
          return $.ajax({
            method: 'GET',
            url: 'api/applications'
  
          });
        }).then(function (serviceType) {
  
     
          console.log(newRequest.serviceType);
          // return (newRequest);
  
        });
  
    };
    $('.submit').on('click', addRequest);
  
  });
  