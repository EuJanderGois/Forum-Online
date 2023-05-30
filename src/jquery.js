
const requesterName = $('#rName');
const requesterNameDiv = $('#rNameDiv');
const requestedName = $('#rdName');
const requestedNameDiv = $('rdNameDiv');

function validateData(){
    // NOME
    // RECLAMANTE
    if (requesterName.value !== null){
        if(requesterName.hasClass('is-invalid')){
            return;
        }else {
            requesterNameDiv.removeClass('is-invalid');
            requesterName.removeClass('is-invalid');
        }
    }else {
        requesterName.addClass('is-invalid');
        requesterNameDiv.addClass('is-invalid');
        app.scrollTo(30, 30);
    }
    //RECLAMADO
    if (requestedName.value !== null){
        requestedNameDiv.removeClass('is-invalid');
        requestedName.removeClass('is-invalid');
    }else {
        requestedNameDiv.addClass('is-invalid');
        requestedName.addClass('is-invalid');
        app.scrollTo(1400, 1400);
    }
}
window.onload = ()=>{
    $('#sendBtn').on('click', ()=>{
        validateData();
        alert('clicado')
    });
}