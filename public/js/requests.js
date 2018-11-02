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

        }) // AP: MOVE THESE TWO PARENTHESES BACK UP HERE AGAIN
      }).then(function (response) {
        // console.log(response);
        var serviceType = newRequest.customerID;
        console.log(response[serviceType]);
        return(serviceType);
      })
    // }) AP: WE MOVED THESE TWO DOWN HERE TO DEBUG BUT TURNS OUT IT CAN STAY IN LINE 36

  } // AP: MOVED CURLY BRACE FROM LINE 46 TO UP HERE IN LINE 44
    $('.submit').on('click', addRequest)
  // } AP: DON't NEED CURLY BRACE HERE
});
