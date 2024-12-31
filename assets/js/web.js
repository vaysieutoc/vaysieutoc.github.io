$(document).ready(function () {
    console.log('web.js loaded...');
    $('.form-post-ajax').submit(function (e) {
        e.preventDefault();
        $('#error-text').addClass('d-none');
        let url = $(this).attr('action');
        let method = $(this).attr('method');
        let data = $(this).serialize();

        $.ajax({
            url: url,
            method: method,
            data: data,
            success: function (response) {
                console.log(response);

                if (response.status === 'error') {
                    $('#error-text').text(response.message);
                    $('#error-text').removeClass('d-none');
                    return;
                }
                if (response.status === 'success') {
                    window.location.href = '/';
                }
            },
            error: function (error) {
                console.log('ajax err', error);
            },
        });
    });
});
