$(document).ready(myContacts)

/**
 * Função principal da página "contacts".
 */

function myContacts(){
    /**
     * Altera o título da página contacts
     */
    changeTitle ('Faça contato')

    $(document).on('submit', '#cForm', sendContact)

}

function sendContact(ev) {

    var formJSON = {}

    const formData = new FormData(ev.target);

    for (const [key, value] of formData) {
        formJSON[key] = value
    }
    
    // Gera o JSON a ser enviado para a API.
    formJSON = JSON.stringify(formJSON)

    console.log(formJSON)
    
    // console.log(JSON.parse(formJSON))

 return false

}