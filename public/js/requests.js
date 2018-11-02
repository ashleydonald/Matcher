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
      customerID: $('#reserve-unique-id').val().trim()
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
        console.log("functions");
        return $.ajax({
          method: 'GET',
          url: 'api/applications'

       
      }).then(function (response) {
        // console.log(response);
        var serviceType = newRequest.customerID;
        console.log(response[serviceType]);
      })
    })


    $('.submit').on('click', addRequest)
  }
});
