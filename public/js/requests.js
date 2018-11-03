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
    $('#serviceType').val('');

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
        return (newRequest.serviceType);

      });

  };
  $('.submit').on('click', addRequest);

});

$(function () {

  /**
   * Render the applications data to the appropriate part of the page.
   * The first parameter is the array of applicationss to render.
   * The second parameter is the parent element to append to (.requests or .applications).
   */
  const render = function (dataList, parent) {
      for (let i = 0; i < dataList.length; i++) {
          const applications = $('<div>').addClass('box');
          applications.append(`<h3>${dataList[i].customerName}</h3>`);
          applications.append(`<p>${dataList[i].customerEmail}</p>`);
          applications.append(`<p>${dataList[i].phoneNumber}</p>`);
          applications.append(`<p>${dataList[i].serviceType}</p>`);


          parent.append(applications)
      }
  }

  /**
   * GET all the requests from the server.
   * Then call render to render the data.
   */
  const getRequests = function () {
      $.ajax({
          method: 'GET',
          url: 'api/requests'
      }).then(function (data) {
          render(data, $('.requests'));
      });
  }

  $(function () {

      /**
       * Render the applications data to the appropriate part of the page.
       * The first parameter is the array of applicationss to render.
       * The second parameter is the parent element to append to (.requests or .applications).
       */
      const render = function (dataList, parent) {
          for (let i = 0; i < dataList.length; i++) {
              const requests = $('<div>').addClass('box');
              applications.append(`<h3>${dataList[i].customerName}</h3>`);
              applications.append(`<p>${dataList[i].customerEmail}</p>`);
              applications.append(`<p>${dataList[i].phoneNumber}</p>`);
              applications.append(`<p>${dataList[i].serviceType}</p>`);

              parent.append(applications)
          }
      }

      /**
       * GET all the requests from the server.
       * Then call render to render the data.
       */
      const getRequests = function () {
          $.ajax({
              method: 'GET',
              url: 'api/requests'
          }).then(function (data) {
              render(data, $('.requests'));
          });
      }




      /**
       * GET all the applications data from the server.
       * Then call render to render the data.
       */
      const getApplications = function () {
          $.ajax({
              method: 'GET',
              url: 'api/applications'
          }).then(function (data) {
              render(data, $('.applications'));
          });
      }

      getRequests();
      getApplications();

      $('#clear').on('click', clearAll);
  });
});