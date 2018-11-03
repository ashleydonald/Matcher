// $(function () {

//   /**
//    * Get the form info from the page.
//    * Clear the form. 
//    * Send the data in a POST request.
//    */
//   const addProvider = function (event) {
//     event.preventDefault();

//     // Here we grab the form elements
//     const newProvider = {
//       customerName: $('#reserve-name').val().trim(),
//       phoneNumber: $('#reserve-phone').val().trim(),
//       customerEmail: $('#reserve-email').val().trim(),
//       serviceType: $("#serviceType :selected").val() 
//     };
//     console.log(newProvider);
//     // Clear the form when submitting
//     $('#reserve-name').val('');
//     $('#reserve-phone').val('');
//     $('#reserve-email').val('');
//     $('#reserve-unique-id').val('');

//     console.log(newProvider);

//     $.ajax({
//       method: 'POST',
//       url: 'api/applications',
//       data: newProvider
//     })
//       .then(function () {
//         console.log("functions");
//         return $.ajax({
//           method: 'GET',
//           url: 'api/requests'

//         }); 
//       }).then(function (response) {
              
//         console.log(response[serviceType]);
//       });
   

//   }; 
//     $('.submit').on('click', addProvider);
 
// });



