$(document).ready(function() {

    $('.botao-lua').click(function(e) {
        e.preventDefault()

        $('.navbar').removeClass('bg-white')
        $('.nav-link').removeClass('text-dark')


        $('.navbar').addClass('bg-dark')
        $('.nav-link').addClass('text-white')


    })

    $('.botao-sol').click(function(e) {
        e.preventDefault()


        $('.navbar').removeClass('bg-dark')
        $('.nav-link').removeClass('text-white')


        $('navbar').addClass('bg-white')
        $('.nav-link').addClass('text-dark')

    })


})