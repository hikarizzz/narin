$(function () {
    //标签页定位
    $('#menu-nav .navbar-collapse a').click(function (e) {
        var href = $(this).attr('href');
        var tabId = $(this).attr('data-tab');

        if (href !== '#') {
            e.preventDefault();
            $(document).scrollTop($(href).offset().top - 70);
            if (tabId) {
                $('#members-tab a[href=#' + tabId + ']').tab('show');
            }
        }
    });
});

