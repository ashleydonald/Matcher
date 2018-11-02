$(function () {

    /**
     * Render the applications data to the appropriate part of the page.
     * The first parameter is the array of applicationss to render.
     * The second parameter is the parent element to append to (.requests or .applications).
     */
    const render = function (dataList, parent) {
        for (let i = 0; i < dataList.length; i++) {
            const requests = $('<div>').addClass('box');
            requests.append(`<h3>${dataList[i].customerName}</h3>`);
            requests.append(`<p>${dataList[i].customerEmail}</p>`);
            requests.append(`<p>${dataList[i].phoneNumber}</p>`);

            parent.append(requests)
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
                const applications = $('<div>').addClass('box');
                applications.append(`<h3>${dataList[i].customerName}</h3>`);
                applications.append(`<p>${dataList[i].customerEmail}</p>`);
                applications.append(`<p>${dataList[i].phoneNumber}</p>`);

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