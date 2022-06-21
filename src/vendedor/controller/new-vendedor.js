$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()


        $('.modal-title').append('Adicionar novo vendedor')

        $('.modal-body').load('src/vendedor/view/form-vendedor.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-vendedor').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-vendedor').modal('hide')
    })
})