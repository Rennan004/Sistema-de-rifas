$(document).ready(function() {
    $('.btn-login').click(function(e) {
        e.preventDefault()

        let dados = $('#form-login').serialize()
        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/vendedor/model/login-vendedor.php',
            success: function(dados) {
                if (dados.tipo === 'success') {
                    $(location).attr('href', 'sistema.html');
                } else {
                    console.log("adusda")
                    Swal.fire({
                        title: 'Gerenciamento Rifas',
                        text: dados.mensagem,
                        icon: dados.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })

})