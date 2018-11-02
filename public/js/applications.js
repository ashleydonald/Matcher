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
      customerID: $('#reserve-unique-id').val().trim()
    };
    console.log(newProvider);
    // Clear the form when submitting
    $('#reserve-name').val('');
    $('#reserve-phone').val('');
    $('#reserve-email').val('');
    $('#reserve-unique-id').val('');

    $.ajax({
      method: 'POST',
      url: 'api/applications',
      data: newProvider
    })
      .then(function () {
        console.log("functions");
        return $.ajax({
          method: 'GET',
          url: 'api/requests'

        }) // AP: MOVE THESE TWO PARENTHESES BACK UP HERE AGAIN
      }).then(function (response) {
        // console.log(response);
        var serviceType = newProvider.customerID;
        console.log(response[serviceType]);
      })
    // }) AP: WE MOVED THESE TWO DOWN HERE TO DEBUG BUT TURNS OUT IT CAN STAY IN LINE 36

  } // AP: MOVED CURLY BRACE FROM LINE 46 TO UP HERE IN LINE 44
    $('.submit').on('click', addProvider());
  // } AP: DON't NEED CURLY BRACE HERE
});




// $(function(){

//   /**
//    * Render the applications data to the appropriate part of the page.
//    * The first parameter is the array of applicationss to render.
//    * The second parameter is the parent element to append to (.requests or .applications).
//    */
//   const render = function (dataList, parent){
//     for (let i = 0; i < dataList.length; i++){
//       const applications = $('<div>').addClass('box');
//       applications.append(`<h3>${dataList[i].customerName}</h3>`);
//       applications.append(`<p>${dataList[i].customerEmail}</p>`);
//       applications.append(`<p>${dataList[i].phoneNumber}</p>`);

//       parent.append(applications)
//     }
//   }

//   /**
//    * GET all the requests from the server.
//    * Then call render to render the data.
//    */
//   const getRequests = function(){
//     $.ajax({
//       method: 'GET',
//       url: 'api/requests'
//     }).then(function(data){
//       console.log(data);
//       render(data, $('.requests'));
//     });
//   }

//   /**
//    * GET all the applications data from the server.
//    * Then call render to render the data.
//    */
//   const getApplications = function(){
//     $.ajax({
//       method: 'GET',
//       url: 'api/applications'
//     }).then(function(data){
//       render(data, $('.applications'));
//     });
//   }
  
//   getRequests();
//   getApplications();

//   // $('#clear').on('click', clearAll);
// });