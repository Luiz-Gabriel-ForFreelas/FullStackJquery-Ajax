$(document).ready(() => {
    $('#documentation').on('click', () => {
        // Utilizando o load() e o get()

        // $('#page').load('documentacao.html')
        
        $.get('documentacao.html', data => {
            $('#page').html(data)
        })
    })	

    $('#suport').on('click', () => {
        // Utilizando o load() e o get()

        // $.get('suporte.html', data => {
        //     $('#page').html(data)
        // })

        $('#page').load('suporte.html')

    })
})