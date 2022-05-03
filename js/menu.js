$(document).ready(function() {

    $('.nav-link').click(function(e) {
        e.preventeDefault()

        let url = $(this).attr('href')

        $('#content').empty()

        $('#content').load(url)
    })
})