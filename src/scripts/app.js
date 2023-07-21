/*
    16/07 - Foram corrigidos diversos aspectos de multiplos reclamantes
    e reclamados.

    17/06 - Foram corrigidas as funções de injeção dos valores no documento
    final conforme o necessário atendendo as alterações que adiciona mais 
    reclamantes e reclamados.

    Ainda necessita de correção:

    - Soma de valores no campo de imput de VALOR DA CAUSA.
    Descrição: Os campos somam corretamente até numeros maiores onde
    os problemas de soma aparecem, aparentemente o erro ocorre com as
    EXPREÇÕES REGULARES, elas acabam formatando o numero de forma a
    comprometer somas maiores à 999.999,000.

    - Corrigir Scroll dos demais reclamantes/reclamados.
    Descrição: Ao preencher de forma incorreta o campo apresenta o erro
    corretamente porém não realiza o scroll da página ao campo incorreto.

    - Finalizar adaptação do codigo para total funcionalidade com mais 
    reclamantes e reclamados.


*/




window.onload = ()=>{

    // updated 19/07 12:20
    const firstTermTargets = {
        display: $('#firstTerm'),
        headerTime: $('#firstTermHeaderTimeTarget'),
        headerDate: $('#firstTermHeaderDateTarget'),
        name: $('#firstTermNameTarget'),
        document: $('#firstTermDocumentTarget'),
        street: $('#firstTermStreetTarget'),
        number: $('#firstTermNumberTarget'),
        district: $('#firstTermDistrictTarget'),
        cityState: $('#firstTermCityStateTarget'),
        postalCode: $('#firstTermPostalCodeTarget'),
        phone: $('#firstTermPhoneTarget'),
        email: $('#firstTermEmailTarget'),
        fullDate: $('#firstTermDateTarget'),
        signerName: $('#firstTermSignerTarget')
    }
    const secondTermTargets = {
        display: $('#secondTerm'),
        headerTime: $('#secondTermHeaderTimeTarget'),
        headerDate: $('#secondTermHeaderDateTarget'),
        name: $('#secondTermNameTarget'),
        document: $('#secondTermDocumentTarget'),
        street: $('#secondTermStreetTarget'),
        number: $('#secondTermNumberTarget'),
        district: $('#secondTermDistrictTarget'),
        cityState: $('#secondTermCityStateTarget'),
        postalCode: $('#secondTermPostalCodeTarget'),
        phone: $('#secondTermPhoneTarget'),
        email: $('#secondTermEmailTarget'),
        fullDate: $('#secondTermDateTarget'),
        signerName: $('#secondTermSignerTarget')
    }
    const thirdTermTargets = {
        display: $('#thirdTerm'),
        headerTime: $('#thirdTermHeaderTimeTarget'),
        headerDate: $('#thirdTermHeaderDateTarget'),
        name: $('#thirdTermNameTarget'),
        document: $('#thirdTermDocumentTarget'),
        street: $('#thirdTermStreetTarget'),
        number: $('#thirdTermNumberTarget'),
        district: $('#thirdTermDistrictTarget'),
        cityState: $('#thirdTermCityStateTarget'),
        postalCode: $('#thirdTermPostalCodeTarget'),
        phone: $('#thirdTermPhoneTarget'),
        email: $('#thirdTermEmailTarget'),
        fullDate: $('#thirdTermDateTarget'),
        signerName: $('#thirdTermSignerTarget')
    }
    // updated 11/07 21:48
    const fields = {
        report: $('#reportCase'),
        request: $('#request'),
        anticipationCause: $('#anticipation'),
        valueOne: $('#valueOne'),
        valueTwo: $('#valueTwo'),
        valueTree: $('#valueTree'),

        invalidReport: $('#invalidReport'),
        invalidRequest: $('#invalidRequest'),
        invalidAnticipationCause: $('#invalidAnticipationCause'),
        invalidValueOne: $('#invalidValueOne'),
        invalidValueTwo: $('#invalidValueTwo'),
        invalidValueTree: $('#invalidValueTree')
    }
    const fieldsTarget = {
        secondRequesterInfoDisplay: $('#sr_infoFieldDisplayTarget'),
        secondRequesterAddressDisplay: $('#sr_addressFieldDisplayTarget'),

        secondRequiredInfoDisplay: $('#srd_infoFieldDisplayTarget'),
        secondRequiredAddressDisplay: $('#srd_addressFieldDisplayTarget'),

        thirdRequesterInfoDisplay: $('#tr_infoFieldDisplayTarget'),
        thirdRequesterAddressDisplay: $('#tr_addressFieldDisplayTarget'),

        thirdRequiredInfoDisplay: $('#trd_infoFieldDisplayTarget'),
        thirdRequiredAddressDisplay: $('#trd_addressFieldDisplayTarget'),

        secondSignerDisplay: $('#secondSignerDisplay'),
        thirdSignerDisplay: $('#thirdSignerDisplay')
    }
    const firstRequester = {
        name: $('#fr_name'),
        document: $('#fr_document'),
        email: $('#fr_email'),
        phone: $('#fr_phone'),
        street: $('#fr_street'),
        number: $('#fr_number'),
        district: $('#fr_district'),
        city: $('#fr_city'),
        state: $('#fr_state'),
        postalCode: $('#fr_postalCode'),

        invalidName: $('#fr_invalidName'),
        invalidDocument: $('#fr_invalidDocument'),
        invalidEmail: $('#fr_invalidEmail'),
        invalidPhone: $('#fr_invalidPhone'),
        invalidStreet: $('#fr_invalidStreet'),
        invalidNumber: $('#fr_invalidNumber'),
        invalidDistrict: $('#fr_invalidDistrict'),
        invalidCity: $('#fr_invalidCity'),
        invalidState: $('#fr_invalidState'),
        invalidPostalCode: $('#fr_invalidPostalCode')
    }
    const firstRequesterTargets = {
        name: $('#fr_nameTarget'),
        address: $('#fr_addressTarget'),
        document: $('#fr_documentTarget'),
        email: $('#fr_emailTarget'),
        phone: $('#fr_phoneTarget')
    }
    const secondRequester = {
        name: $('#sr_name'),
        document: $('#sr_document'),
        email: $('#sr_email'),
        phone: $('#sr_phone'),
        street: $('#sr_street'),
        number: $('#sr_number'),
        district: $('#sr_district'),
        city: $('#sr_city'),
        state: $('#sr_state'),
        postalCode: $('#sr_postalCode'),

        invalidName: $('#sr_invalidName'),
        invalidDocument: $('#sr_invalidDocument'),
        invalidEmail: $('#sr_invalidEmail'),
        invalidPhone: $('#sr_invalidPhone'),
        invalidStreet: $('#sr_invalidStreet'),
        invalidNumber: $('#sr_invalidNumber'),
        invalidDistrict: $('#sr_invalidDistrict'),
        invalidCity: $('#sr_invalidCity'),
        invalidState: $('#sr_invalidState'),
        invalidPostalCode: $('#sr_invalidPostalCode')
    }
    const secondRequesterTargets = {
        name: $('#sr_nameTarget'),
        address: $('#sr_addressTarget'),
        document: $('#sr_documentTarget'),
        email: $('#sr_emailTarget'),
        phone: $('#sr_phoneTarget'),
        display: $('#sr_displayTarget')
    }
    const thirdRequester = {
        name: $('#tr_name'),
        document: $('#tr_document'),
        email: $('#tr_email'),
        phone: $('#tr_phone'),
        street: $('#tr_street'),
        number: $('#tr_number'),
        district: $('#tr_district'),
        city: $('#tr_city'),
        state: $('#tr_state'),
        postalCode: $('#tr_postalCode'),

        invalidName: $('#tr_invalidName'),
        invalidDocument: $('#tr_invalidDocument'),
        invalidEmail: $('#tr_invalidEmail'),
        invalidPhone: $('#tr_invalidPhone'),
        invalidStreet: $('#tr_invalidStreet'),
        invalidNumber: $('#tr_invalidNumber'),
        invalidDistrict: $('#tr_invalidDistrict'),
        invalidCity: $('#tr_invalidCity'),
        invalidState: $('#tr_invalidState'),
        invalidPostalCode: $('#tr_invalidPostalCode')
    }
    const thirdRequesterTargets = {
        name: $('#tr_nameTarget'),
        address: $('#tr_addressTarget'),
        document: $('#tr_documentTarget'),
        email: $('#tr_emailTarget'),
        phone: $('#tr_phoneTarget'),
        display: $('#tr_displayTarget')
    }

    const firstRequired = {
        name: $('#frd_name'),
        document: $('#frd_document'),
        email: $('#frd_email'),
        phone: $('#frd_phone'),
        street: $('#frd_street'),
        number: $('#frd_number'),
        district: $('#frd_district'),
        city: $('#frd_city'),
        state: $('#frd_state'),
        postalCode: $('#frd_postalCode'),

        invalidName: $('#frd_invalidName'),
        invalidDocument: $('#frd_invalidDocument'),
        invalidEmail: $('#frd_invalidEmail'),
        invalidPhone: $('#frd_invalidPhone'),
        invalidStreet: $('#frd_invalidStreet'),
        invalidNumber: $('#frd_invalidNumber'),
        invalidDistrict: $('#frd_invalidDistrict'),
        invalidCity: $('#frd_invalidCity'),
        invalidState: $('#frd_invalidState'),
        invalidPostalCode: $('#frd_invalidPostalCode')
    }
    const firstRequiredTargets = {
        name: $('#frd_nameTarget'),
        address: $('#frd_addressTarget'),
        document: $('#frd_documentTarget'),
        email: $('#frd_emailTarget'),
        phone: $('#frd_phoneTarget')
    } 
    const secondRequired = {
        name: $('#srd_name'),
        document: $('#srd_document'),
        email: $('#srd_email'),
        phone: $('#srd_phone'),
        street: $('#srd_street'),
        number: $('#srd_number'),
        district: $('#srd_district'),
        city: $('#srd_city'),
        state: $('#srd_state'),
        postalCode: $('#srd_postalCode'),

        invalidName: $('#srd_invalidName'),
        invalidDocument: $('#srd_invalidDocument'),
        invalidEmail: $('#srd_invalidEmail'),
        invalidPhone: $('#srd_invalidPhone'),
        invalidStreet: $('#srd_invalidStreet'),
        invalidNumber: $('#srd_invalidNumber'),
        invalidDistrict: $('#srd_invalidDistrict'),
        invalidCity: $('#srd_invalidCity'),
        invalidState: $('#srd_invalidState'),
        invalidPostalCode: $('#srd_invalidPostalCode')
    }
    const secondRequiredTargets = {
        name: $('#srd_nameTarget'),
        address: $('#srd_addressTarget'),
        document: $('#srd_documentTarget'),
        email: $('#srd_emailTarget'),
        phone: $('#srd_phoneTarget'),
        display: $('#srd_displayTarget')
    }
    const thirdRequired = {
        name: $('#trd_name'),
        document: $('#trd_document'),
        email: $('#trd_email'),
        phone: $('#trd_phone'),
        street: $('#trd_street'),
        number: $('#trd_number'),
        district: $('#trd_district'),
        city: $('#trd_city'),
        state: $('#trd_state'),
        postalCode: $('#trd_postalCode'),

        invalidName: $('#trd_invalidName'),
        invalidDocument: $('#trd_invalidDocument'),
        invalidEmail: $('#trd_invalidEmail'),
        invalidPhone: $('#trd_invalidPhone'),
        invalidStreet: $('#trd_invalidStreet'),
        invalidNumber: $('#trd_invalidNumber'),
        invalidDistrict: $('#trd_invalidDistrict'),
        invalidCity: $('#trd_invalidCity'),
        invalidState: $('#trd_invalidState'),
        invalidPostalCode: $('#trd_invalidPostalCode')
    }
    const thirdRequiredTargets = {
        name: $('#trd_nameTarget'),
        address: $('#trd_addressTarget'),
        document: $('#trd_documentTarget'),
        email: $('#trd_emailTarget'),
        phone: $('#trd_phoneTarget'),
        display: $('#trd_displayTarget')
    }

    const documentTargets = {

        report: $('#reportTarget'),
        requests: $('#requestsTarget'), // if use append <li>
        requestText: $('#requestTextTarget'),

        anticipationTopDisplay: $('#anticipationDisplayTarget'),
        anticipationText: $('#anticipationTextTarget'),
        anticipationTextDisplay: $('#anticipationTextDisplay'),

        firstValue: $('#firstValue'),
        secondValue: $('#secondValue'),
        thirdValue: $('#thirdValue'),

        firstSignerName: $('#firstSignerNameTarget'),
        firstSignerDocument: $('#firstSignerDocument'),

        secondSignerName: $('#secondSignerNameTarget'),
        secondSignerDocument: $('#secondSignerDocument'),

        thirdSignerName: $('#thirdSignerNameTarget'),
        thirdSignerDocument: $('#thirdSignerDocument'),

        date: $('#dateTarget'),
        headerDate: $('#headerDateTarget'),
        headerTime: $('#headerTimeTarget'),

        SecondDocName: $('#doc2NameTarget'),
        SecondDocDocument: $('#doc2DocumentTarget'),
        SecondDocStreet: $('#doc2StreetTarget'),
        SecondDocNumber: $('#doc2NumberTarget'),
        SecondDocDistrict: $('#doc2DistrictTarget'),
        SecondDocCityState: $('#doc2CityStateTarget'),
        SecondDocPostalCode: $('#doc2PostalCodeTarget'),
        SecondDocPhone: $('#doc2PhoneTarget'),
        SecondDocEmail: $('#doc2EmailTarget'),
        SecondDocDate: $('#doc2DateTarget'),
        SecondDocHeaderDate: $('#doc2HeaderDateTarget'),
        SecondDocHeaderTime: $('#doc2HeaderTimeTarget'),
        SecondDocSigner: $('#doc2SignerTarget'),
    }

    const checks = {
        firstRequesterCheck: $('#fr_check'),
        secondRequesterCheck: $('#sr_check'),
        firstRequiredCheck: $('#frd_check'),
        secondRequiredCheck: $('#srd_check')
    }


    // updated at 11/07 21:47
    function validateValues(){

        let isValid = true;
        let isScrolling = false;
        var secondRequesterExist = false;
        var secondRequiredExist = false;
        var thirdRequesterExist = false;
        var thirdRequiredExist = false;

        //name
        // requester
        if (firstRequester.name.val()){
            firstRequester.invalidName.addClass('hidden');
        } else {
            firstRequester.invalidName.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#fr_infoScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }
        // required
        if (firstRequired.name.val()){
            firstRequired.invalidName.addClass('hidden');
        } else {
            firstRequired.invalidName.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#frd_infoScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }

        // document
        // reclamante
        if (firstRequester.document.val()){
            firstRequester.invalidDocument.addClass('hidden');
        } else {
            firstRequester.invalidDocument.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#fr_infoScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }
        // required
        if (firstRequired.document.val()){
            firstRequired.invalidDocument.addClass('hidden');
        } else {
            firstRequired.invalidDocument.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#frd_infoScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }

        // email
        // requester
        if (firstRequester.email.val()){
            firstRequester.invalidEmail.addClass('hidden');
        } else {
            firstRequester.invalidEmail.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#fr_infoScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }
        // required
        if (firstRequired.email.val()){
            firstRequired.invalidEmail.addClass('hidden');
        } else {
            firstRequired.invalidEmail.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#frd_infoScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }

        // phone
        // requester
        if (firstRequester.phone.val()){
            firstRequester.invalidPhone.addClass('hidden');
        } else {
            firstRequester.invalidPhone.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#fr_infoScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }
        // required
        if (firstRequired.phone.val()){
            firstRequired.invalidPhone.addClass('hidden');
        } else {
            firstRequired.invalidPhone.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#frd_infoScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }

        // street
        // requester
        if (firstRequester.street.val()){
            firstRequester.invalidStreet.addClass('hidden');
        } else {
            firstRequester.invalidStreet.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#fr_addressScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }
        // required
        if (firstRequired.street.val()){
            firstRequired.invalidStreet.addClass('hidden');
        } else {
            firstRequired.invalidStreet.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#frd_addressScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }

        // number
        // requester
        if (firstRequester.number.val()){
            firstRequester.invalidNumber.addClass('hidden');
        } else {
            firstRequester.invalidNumber.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#fr_addressScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }
        // required
        if (firstRequired.number.val()){
            firstRequired.invalidNumber.addClass('hidden');
        } else {
            firstRequired.invalidNumber.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#frd_addressScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }

        // district
        // requester
        if (firstRequester.district.val()){
            firstRequester.invalidDistrict.addClass('hidden');
        } else {
            firstRequester.invalidDistrict.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#fr_addressScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }
        // required
        if (firstRequired.district.val()){
            firstRequired.invalidDistrict.addClass('hidden');1
        } else {
            firstRequired.invalidDistrict.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#frd_addressScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }

        // city
        // requester
        if (firstRequester.city.val()){
            firstRequester.invalidCity.addClass('hidden');
        } else {
            firstRequester.invalidCity.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#fr_addressScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }
        // required
        if (firstRequired.city.val()){
            firstRequired.invalidCity.addClass('hidden');
        } else {
            firstRequired.invalidCity.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#frd_addressScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }

        // state
        // requester
        if (firstRequester.state.val()){
            firstRequester.invalidState.addClass('hidden');
        } else {
            firstRequester.invalidState.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#fr_addressScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }
        // required
        if (firstRequired.state.val()){
            firstRequired.invalidState.addClass('hidden');
        } else {
            firstRequired.invalidState.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#frd_addressScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }

        // postal code
        // requester
        if (firstRequester.postalCode.val()){
            firstRequester.invalidPostalCode.addClass('hidden');
        } else {
            firstRequester.invalidPostalCode.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#fr_addressScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }
        // required
        if (firstRequired.postalCode.val()){
            firstRequired.invalidPostalCode.addClass('hidden');
        } else {
            firstRequired.invalidPostalCode.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#frd_addressScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }

        // report
        if (fields.report.val()){
            fields.invalidReport.addClass('hidden');
        } else {
            fields.invalidReport.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#reportScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }

        // require
        if (fields.request.val()){
            fields.invalidRequest.addClass('hidden');
        } else {
            fields.invalidRequest.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#requestScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }
        // anticipation
        if ($('#check').is(':checked')){
            if (fields.anticipationCause.val()){
                fields.invalidAnticipationCause.addClass('hidden');
            } else {
                fields.invalidAnticipationCause.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#check').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
        }

        // value 
        if (!isNaN(parseInt(moneyToFloat('#valueTree'))) && parseInt(moneyToFloat('#valueTree')) !== 0){
            fields.invalidValueTree.addClass('hidden');
        } else {
            fields.invalidValueTree.removeClass('hidden');
            if (!isScrolling){
                $('html, body').animate({
                    scrollTop: $('#causeScrollTarget').offset().top - 150
                }, 800);
                isScrolling = true;
            }
            isValid = false;
        }

        // o primeiro reclamante e reclamado é sempre verificado
        // se ouver mais de um então o checkbox e os dados são validados
        // mais de um reclamante
        if (checks.firstRequesterCheck.is(':checked')){
            // se a opção de mais de um reclamante estiver marcada verifica
            // os valores do segundo reclamado a partir daqui

            // verifica se o nome foi preenchido
            if (secondRequester.name.val()){
                secondRequester.invalidName.addClass('hidden');
            } else {
                secondRequester.invalidName.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                      scrollTop: $('#sr_infoFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o documento foi preenchido
            if (secondRequester.document.val()){
                secondRequester.invalidDocument.addClass('hidden');
            } else {
                secondRequester.invalidDocument.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#sr_infoFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o email foi preenchido
            if (secondRequester.email.val()){
                secondRequester.invalidEmail.addClass('hidden');
            } else {
                secondRequester.invalidEmail.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#sr_infoFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o telefone foi preenchido
            if (secondRequester.phone.val()){
                secondRequester.invalidPhone.addClass('hidden');
            } else {
                secondRequester.invalidPhone.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#sr_infoFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o nome da rua foi preenchido
            if (secondRequester.street.val()){
                secondRequester.invalidStreet.addClass('hidden');
            } else {
                secondRequester.invalidStreet.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#sr_addressFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o numero da residencia foi preenchido
            if (secondRequester.number.val()){
                secondRequester.invalidNumber.addClass('hidden');
            } else {
                secondRequester.invalidNumber.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#sr_addressFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o bairro foi preenchido
            if (secondRequester.district.val()){
                secondRequester.invalidDistrict.addClass('hidden');
            } else {
                secondRequester.invalidDistrict.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#sr_addressFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se a cidade foi preenchida
            if (secondRequester.city.val()){
                secondRequester.invalidCity.addClass('hidden');
            } else {
                secondRequester.invalidCity.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#sr_addressFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o estado foi selecinado
            if (secondRequester.state.val()){
                secondRequester.invalidState.addClass('hidden');
            } else {
                secondRequester.invalidState.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#sr_addressFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o cep foi preenchido
            if (secondRequester.postalCode.val()){
                secondRequester.invalidPostalCode.addClass('hidden');
            } else {
                secondRequester.invalidPostalCode.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#sr_addressFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            secondRequesterExist = true;
            
            
        }
        // mais de dois reclamantes
        if (checks.secondRequesterCheck.is(':checked')){
            // se a opção de mais de dois reclamante estiver marcada verifica
            // os valores a partir daqui

            // verifica se o nome foi preenchido
            if (thirdRequester.name.val()){
                thirdRequester.invalidName.addClass('hidden');
            } else {
                thirdRequester.invalidName.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#tr_infoFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o documento foi preenchido
            if (thirdRequester.document.val()){
                thirdRequester.invalidDocument.addClass('hidden');
            } else {
                thirdRequester.invalidDocument.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#tr_infoFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o email foi preenchido
            if (thirdRequester.email.val()){
                thirdRequester.invalidEmail.addClass('hidden');
            } else {
                thirdRequester.invalidEmail.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#tr_infoFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o telefone foi preenchido
            if (thirdRequester.phone.val()){
                thirdRequester.invalidPhone.addClass('hidden');
            } else {
                thirdRequester.invalidPhone.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#tr_infoFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o nome da rua foi preenchido
            if (thirdRequester.street.val()){
                thirdRequester.invalidStreet.addClass('hidden');
            } else {
                thirdRequester.invalidStreet.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#tr_addressFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o numero da residencia foi preenchido
            if (thirdRequester.number.val()){
                thirdRequester.invalidNumber.addClass('hidden');
            } else {
                thirdRequester.invalidNumber.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#tr_addressFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o bairro foi preenchido
            if (thirdRequester.district.val()){
                thirdRequester.invalidDistrict.addClass('hidden');
            } else {
                thirdRequester.invalidDistrict.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#tr_addressFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se a cidade foi preenchida
            if (thirdRequester.city.val()){
                thirdRequester.invalidCity.addClass('hidden');
            } else {
                thirdRequester.invalidCity.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#tr_addressFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o estado foi selecinado
            if (thirdRequester.state.val()){
                thirdRequester.invalidState.addClass('hidden');
            } else {
                thirdRequester.invalidState.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#tr_addressFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o cep foi preenchido
            if (thirdRequester.postalCode.val()){
                thirdRequester.invalidPostalCode.addClass('hidden');
            } else {
                thirdRequester.invalidPostalCode.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#tr_addressFieldDisplayTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            thirdRequesterExist = true;
            
        }
        // mais de um reclamado
        if (checks.firstRequiredCheck.is(':checked')){
            // se a opção de mais de um reclamado estiver marcada verifica
            // os valores a partir daqui

            // verifica se o nome foi preenchido
            if (secondRequired.name.val()){
                secondRequired.invalidName.addClass('hidden');
            } else {
                secondRequired.invalidName.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#srd_infoScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o documento foi preenchido
            if (secondRequired.document.val()){
                secondRequired.invalidDocument.addClass('hidden');
            } else {
                secondRequired.invalidDocument.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#srd_infoScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o email foi preenchido
            if (secondRequired.email.val()){
                secondRequired.invalidEmail.addClass('hidden');
            } else {
                secondRequired.invalidEmail.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#srd_infoScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o telefone foi preenchido
            if (secondRequired.phone.val()){
                secondRequired.invalidPhone.addClass('hidden');
            } else {
                secondRequired.invalidPhone.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#srd_infoScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o nome da rua foi preenchido
            if (secondRequired.street.val()){
                secondRequired.invalidStreet.addClass('hidden');
            } else {
                secondRequired.invalidStreet.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#srd_addressScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o numero da residencia foi preenchido
            if (secondRequired.number.val()){
                secondRequired.invalidNumber.addClass('hidden');
            } else {
                secondRequired.invalidNumber.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#srd_addressScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o bairro foi preenchido
            if (secondRequired.district.val()){
                secondRequired.invalidDistrict.addClass('hidden');
            } else {
                secondRequired.invalidDistrict.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#srd_addressScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se a cidade foi preenchida
            if (secondRequired.city.val()){
                secondRequired.invalidCity.addClass('hidden');
            } else {
                secondRequired.invalidCity.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#srd_addressScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o estado foi selecinado
            if (secondRequired.state.val()){
                secondRequired.invalidState.addClass('hidden');
            } else {
                secondRequired.invalidState.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#srd_addressScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o cep foi preenchido
            if (secondRequired.postalCode.val()){
                secondRequired.invalidPostalCode.addClass('hidden');
            } else {
                secondRequired.invalidPostalCode.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#srd_addressScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            secondRequiredExist = true;
            
        }
        // mais de dois reclamados
        if (checks.secondRequiredCheck.is(':checked')){
            // se a opção de mais de dois reclamante estiver marcada verifica
            // os valores a partir daqui

            // verifica se o nome foi preenchido
            if (thirdRequired.name.val()){
                thirdRequired.invalidName.addClass('hidden');
            } else {
                thirdRequired.invalidName.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#trd_infoScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o documento foi preenchido
            if (thirdRequired.document.val()){
                thirdRequired.invalidDocument.addClass('hidden');
            } else {
                thirdRequired.invalidDocument.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#trd_infoScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o email foi preenchido
            if (thirdRequired.email.val()){
                thirdRequired.invalidEmail.addClass('hidden');
            } else {
                thirdRequired.invalidEmail.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#trd_infoScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o telefone foi preenchido
            if (thirdRequired.phone.val()){
                thirdRequired.invalidPhone.addClass('hidden');
            } else {
                thirdRequired.invalidPhone.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#trd_infoScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o nome da rua foi preenchido
            if (thirdRequired.street.val()){
                thirdRequired.invalidStreet.addClass('hidden');
            } else {
                thirdRequired.invalidStreet.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#trd_addressScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o numero da residencia foi preenchido
            if (thirdRequired.number.val()){
                thirdRequired.invalidNumber.addClass('hidden');
            } else {
                thirdRequired.invalidNumber.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#trd_addressScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o bairro foi preenchido
            if (thirdRequired.district.val()){
                thirdRequired.invalidDistrict.addClass('hidden');
            } else {
                thirdRequired.invalidDistrict.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#trd_addressScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se a cidade foi preenchida
            if (thirdRequired.city.val()){
                thirdRequired.invalidCity.addClass('hidden');
            } else {
                thirdRequired.invalidCity.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#trd_addressScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o estado foi selecinado
            if (thirdRequired.state.val()){
                thirdRequired.invalidState.addClass('hidden');
            } else {
                thirdRequired.invalidState.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#trd_addressScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            // verifica se o cep foi preenchido
            if (thirdRequired.postalCode.val()){
                thirdRequired.invalidPostalCode.addClass('hidden');
            } else {
                thirdRequired.invalidPostalCode.removeClass('hidden');
                if (!isScrolling){
                    $('html, body').animate({
                        scrollTop: $('#trd_addressScrollTarget').offset().top - 150
                    }, 800);
                    isScrolling = true;
                }
                isValid = false;
            }
            thirdRequiredExist = true;
            
        }
        return {
            isValid,
            secondRequesterExist,
            secondRequiredExist,
            thirdRequesterExist,
            thirdRequiredExist
        }
    }

    // need be fixed
    function moneyToFloat(args){
        let res = parseFloat($(`${args}`).val()
        .replace("R$", "")
        .replace(".", "")
        .replace(",", ".")
        );
        return res;
    }
    function currency(args){
        let res = new Intl.NumberFormat('pt-BR', { 
            style: 'currency',
            currency: 'BRL' 
        }).format(args);
        return res;
    }
    $('#valueOne').maskMoney({
        prefix:'R$ ',
        allowNegative: true,
        thousands:'.', decimal:',',
        affixesStay: true
    });
    $('#valueTwo').maskMoney({
        prefix:'R$ ',
        allowNegative: true,
        thousands:'.', decimal:',',
        affixesStay: true
    });

    // need be fixed
    $('#valueOne').on('change', ()=>{
        if (isNaN(moneyToFloat('#valueTwo'))){
            // se o segundo input esta vazio
            // coloca o valor do primeiro input no total
            $('#valueTree').val(currency(moneyToFloat('#valueOne')));
        } else {
            // se não está vazio verifica se o primeiro valor é vazio
            if (isNaN(moneyToFloat('#valueOne'))){
                // se o primeiro input estiver vazio não há o que somar
                // o segundo input será exibido no resultado
                $('#valueTree').val(currency(moneyToFloat('#valueTwo')));
            } else {
                // se o codigo chegar até aqui nem o primeiro
                // nem o segundo input são vazios então realiza
                // a soma
                let res = moneyToFloat('#valueOne') + moneyToFloat('#valueTwo');
                $('#valueTree').val(currency(res));
            }
        }
        if (isNaN(moneyToFloat('#valueTree'))){
            $('#valueTree').val(currency(0));
        }
    });
    // need be fixed
    $('#valueTwo').on('change', ()=>{
        if (isNaN(moneyToFloat('#valueOne'))){
            // se o primeiro input esta vazio
            // coloca o valor do segundo input no total
            $('#valueTree').val(currency(moneyToFloat('#valueTwo')));
        } else {
            // se não está vazio verifica se o segundo valor é vazio
            if (isNaN(moneyToFloat('#valueTwo'))){
                // se o segundo input estiver vazio não há o que somar
                // o primeiro input será exibido no resultado
                $('#valueTree').val(currency(moneyToFloat('#valueOne')));
            } else {
                // se o codigo chegar até aqui nem o primeiro
                // nem o segundo input são vazios então realiza
                // a soma
                let res = moneyToFloat('#valueOne') + moneyToFloat('#valueTwo');
                $('#valueTree').val(currency(res));
            }
        }
        if (isNaN(moneyToFloat('#valueTree'))){
            $('#valueTree').val(currency(0));
        }
    });

    // PRECISA DE CORREÇÃO
    $('#sendBtn').on('click', ()=> {
        // VARIAVEIS DE DATA
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let min = date.getMinutes();
        let hours = date.getHours();
        let months = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ];
        const monthName = months[month];
        const formatMonth = month < 10 ? '0' + month : month;
        const formatDay = day < 10 ? '0' + day : day;
        const todayDate = formatDay + '/' + formatMonth + '/' + year;
        const todayIs = `Itapoá (SC), ${formatDay} de ${monthName} de ${year}.`;
        const formatHours = hours < 10 ? '0' + hours : hours;
        const formatMin = min < 10 ? '0' + min : min;
        const timeNow = formatHours + ':' + formatMin;
        
        const values = validateValues();
        if (values.isValid){
            
            // RECLAMANTES
            // primeiro reclamante
            // nome
            firstRequesterTargets.name.text(firstRequester.name.val().toUpperCase());
            // endereço
            firstRequesterTargets.address.text(
                "R: " + firstRequester.street.val().toUpperCase() +
                " N: " + firstRequester.number.val() +
                " " + firstRequester.city.val().toUpperCase() +
                "/" + firstRequester.state.val().toUpperCase() +
                " CEP: " + firstRequester.postalCode.val()
            );
            // documento
            firstRequesterTargets.document.text(firstRequester.document.val());
            // email
            firstRequesterTargets.email.text(firstRequester.email.val());
            // telefone
            firstRequesterTargets.phone.text(firstRequester.phone.val());
            // assinatura
            documentTargets.firstSignerName.text(firstRequester.name.val().toUpperCase());
            documentTargets.firstSignerDocument.text(firstRequester.document.val());
            // termo de adesão
            firstTermTargets.headerDate.text(todayDate);
            firstTermTargets.headerTime.text(timeNow);
            firstTermTargets.name.text(firstRequester.name.val().toUpperCase());
            firstTermTargets.document.text(firstRequester.document.val());
            firstTermTargets.street.text(firstRequester.street.val().toUpperCase());
            firstTermTargets.number.text(firstRequester.number.val());
            firstTermTargets.district.text(firstRequester.district.val().toUpperCase());
            firstTermTargets.cityState.text(
                firstRequester.city.val() + '/' + firstRequester.state.val()
            );
            firstTermTargets.postalCode.text(firstRequester.postalCode.val());
            firstTermTargets.phone.text(firstRequester.phone.val());
            firstTermTargets.email.text(firstRequester.email.val());
            firstTermTargets.fullDate.text(todayIs);
            firstTermTargets.signerName.text(firstRequester.name.val());

            if (values.secondRequesterExist){
                // segundo reclamante se existir
                // nome
                secondRequesterTargets.name.text(secondRequester.name.val().toUpperCase());
                secondRequesterTargets.display.removeClass('hidden');
                // endereço
                secondRequesterTargets.address.text(
                    "R: " + secondRequester.street.val().toUpperCase() +
                    " N: " + secondRequester.number.val() +
                    " " + secondRequester.city.val().toUpperCase() +
                    "/" + secondRequester.state.val().toUpperCase() +
                    " CEP: " + secondRequester.postalCode.val()
                );
                // documento
                secondRequesterTargets.document.text(secondRequester.document.val());
                // email
                secondRequesterTargets.email.text(secondRequester.email.val());
                // telefone
                secondRequesterTargets.phone.text(secondRequester.phone.val());
                // assinatura
                fieldsTarget.secondSignerDisplay.removeClass('hidden');
                documentTargets.secondSignerName.text(secondRequester.name.val().toUpperCase());
                documentTargets.secondSignerDocument.text(secondRequester.document.val());
                // termo de adesão
                secondTermTargets.headerDate.text(todayDate);
                secondTermTargets.headerTime.text(timeNow);
                secondTermTargets.name.text(secondRequester.name.val().toUpperCase());
                secondTermTargets.document.text(secondRequester.document.val());
                secondTermTargets.street.text(secondRequester.street.val().toUpperCase());
                secondTermTargets.number.text(secondRequester.number.val());
                secondTermTargets.district.text(secondRequester.district.val().toUpperCase());
                secondTermTargets.cityState.text(
                    secondRequester.city.val() + '/' + secondRequester.state.val()
                );
                secondTermTargets.postalCode.text(secondRequester.postalCode.val());
                secondTermTargets.phone.text(secondRequester.phone.val());
                secondTermTargets.email.text(secondRequester.email.val());
                secondTermTargets.fullDate.text(todayIs);
                secondTermTargets.signerName.text(secondRequester.name.val());
            }
            if (values.thirdRequesterExist){
                // terceiro reclamante se existir
                // nome
                thirdRequesterTargets.name.text(thirdRequester.name.val().toUpperCase());
                thirdRequesterTargets.display.removeClass('hidden');
                // endereço
                thirdRequesterTargets.address.text(
                    "R: " + thirdRequester.street.val().toUpperCase() +
                    " N: " + thirdRequester.number.val() +
                    " " + thirdRequester.city.val().toUpperCase() +
                    "/" + thirdRequester.state.val().toUpperCase() +
                    " CEP: " + thirdRequester.postalCode.val()
                );
                // documento
                thirdRequesterTargets.document.text(thirdRequester.document.val());
                // email
                thirdRequesterTargets.email.text(thirdRequester.email.val());
                // telefone
                thirdRequesterTargets.phone.text(thirdRequester.phone.val());
                // assinatura
                fieldsTarget.thirdSignerDisplay.removeClass('hidden');
                documentTargets.thirdSignerName.text(thirdRequester.name.val().toUpperCase());
                documentTargets.thirdSignerDocument.text(thirdRequester.document.val());
                // termo de adesão
                thirdTermTargets.headerDate.text(todayDate);
                thirdTermTargets.headerTime.text(timeNow);
                thirdTermTargets.name.text(thirdRequester.name.val().toUpperCase());
                thirdTermTargets.document.text(thirdRequester.document.val());
                thirdTermTargets.street.text(thirdRequester.street.val().toUpperCase());
                thirdTermTargets.number.text(thirdRequester.number.val());
                thirdTermTargets.district.text(thirdRequester.district.val().toUpperCase());
                thirdTermTargets.cityState.text(
                    thirdRequester.city.val() + '/' + thirdRequester.state.val()
                );
                thirdTermTargets.postalCode.text(thirdRequester.postalCode.val());
                thirdTermTargets.phone.text(thirdRequester.phone.val());
                thirdTermTargets.email.text(thirdRequester.email.val());
                thirdTermTargets.fullDate.text(todayIs);
                thirdTermTargets.signerName.text(thirdRequester.name.val());
            }

            // RECLAMADOS
            // primeiro reclamado
            // nome
            firstRequiredTargets.name.text(firstRequired.name.val().toUpperCase());
            // endereço
            firstRequiredTargets.address.text(
                "R: " + firstRequired.street.val().toUpperCase() +
                " N: " + firstRequired.number.val() +
                " " + firstRequired.city.val().toUpperCase() +
                "/" + firstRequired.state.val().toUpperCase() +
                " CEP: " + firstRequired.postalCode.val()
            );
            // documento
            firstRequiredTargets.document.text(firstRequired.document.val());
            // email
            firstRequiredTargets.email.text(firstRequired.email.val());
            // telefone
            firstRequiredTargets.phone.text(firstRequired.phone.val());

            if (values.secondRequiredExist){
                // segundo reclamado se existir
                // nome
                secondRequiredTargets.name.text(secondRequired.name.val().toUpperCase());
                secondRequiredTargets.display.removeClass('hidden');
                // endereço
                secondRequiredTargets.address.text(
                    "R: " + secondRequired.street.val().toUpperCase() +
                    " N: " + secondRequired.number.val() +
                    " " + secondRequired.city.val().toUpperCase() +
                    "/" + secondRequired.state.val().toUpperCase() +
                    " CEP: " + secondRequired.postalCode.val()
                );
                // documento
                secondRequiredTargets.document.text(secondRequired.document.val());
                // email
                secondRequiredTargets.email.text(secondRequired.email.val());
                // telefone
                secondRequiredTargets.phone.text(secondRequired.phone.val());
                
            }
            if (values.thirdRequiredExist){
                // terceiro reclamado se existir
                // nome
                thirdRequiredTargets.name.text(thirdRequired.name.val().toUpperCase());
                thirdRequiredTargets.display.removeClass('hidden');
                // endereço
                thirdRequiredTargets.address.text(
                    "R: " + thirdRequired.street.val().toUpperCase() +
                    " N: " + thirdRequired.number.val() +
                    " " + thirdRequired.city.val().toUpperCase() +
                    "/" + thirdRequired.state.val().toUpperCase() +
                    " CEP: " + thirdRequired.postalCode.val()
                );
                // documento
                thirdRequiredTargets.document.text(thirdRequired.document.val());
                // email
                thirdRequiredTargets.email.text(thirdRequired.email.val());
                // telefone
                thirdRequiredTargets.phone.text(thirdRequired.phone.val());
                
            }
            // DOS FATOS
            documentTargets.report.text(fields.report.val());
            // DOS PEDIDOS
            documentTargets.requestText.text(fields.request.val());
            // DOS VALORES
            documentTargets.firstValue.text(fields.valueOne.val());
            documentTargets.secondValue.text(fields.valueTwo.val());
            documentTargets.thirdValue.text(fields.valueTree.val());
            

            // MANIPULAÇÃO DE DATA
            documentTargets.date.text(todayIs);
            documentTargets.headerDate.text(todayDate);
            documentTargets.headerTime.text(timeNow);

            // // term
            // targets.doc2Name.text(requester.name.val().toUpperCase());
            // targets.doc2Document.text(requester.document.val());
            // targets.doc2Street.text(requester.street.val().toUpperCase());
            // targets.doc2Number.text(requester.number.val());
            // targets.doc2District.text(requester.district.val().toUpperCase());
            // targets.doc2CityState.text(requester.city.val().toUpperCase() + '/' + requester.state.val().toUpperCase());
            // targets.doc2PostalCode.text(requester.postalCode.val());
            // targets.doc2Phone.text(requester.phone.val());
            // targets.doc2Email.text(requester.email.val());
            // targets.doc2Date.text(todayIs);
            // targets.doc2Signer.text(requester.name.val().toUpperCase());

            if ($('#check').is(':checked')){
                documentTargets.anticipationTopDisplay.removeClass('hidden');
                documentTargets.anticipationTextDisplay.removeClass('hidden');
                documentTargets.anticipationText.text(fields.anticipationCause.val());
            }

            alert('Seu documento foi gerado com sucesso. Clique em imprimir para realizar o download!');
            $('#printBtn').removeClass('hidden');
        }
    });

    $('#printBtn').on('click', ()=>{
        $('#doc1').removeClass('hidden');
        $('#pageMain').addClass('hidden');
        $('#pageFooter').addClass('hidden');
        firstTermTargets.display.removeClass('hidden');
        if (validateValues().secondRequesterExist){
            secondTermTargets.display.removeClass('hidden');
        }
        if (validateValues().thirdRequesterExist){
            thirdTermTargets.display.removeClass('hidden');
        }
        print();
        
    });

    // onChange Checks
    $('#check').on('change', () => {
        if ($('#check').is(':checked')){
            $('#anticipationTextBox').removeClass('hidden');
        } else {
            
            $('#anticipationTextBox').addClass('hidden');
        }
    });
    if ($('#check').is(':checked')){
        $('#anticipationTextBox').removeClass('hidden');
    } else {
        $('#anticipationTextBox').addClass('hidden');
    }
    


    // atualizado em 16/07
    // PRIMEIRO REQUERENTE
    checks.firstRequesterCheck.on('change', ()=>{
        if (checks.firstRequesterCheck.is(':checked')){
            fieldsTarget.secondRequesterInfoDisplay.removeClass('hidden');
            fieldsTarget.secondRequesterAddressDisplay.removeClass('hidden');
        } else {
            fieldsTarget.secondRequesterInfoDisplay.addClass('hidden');
            fieldsTarget.secondRequesterAddressDisplay.addClass('hidden');
            fieldsTarget.thirdRequesterInfoDisplay.addClass('hidden');
            fieldsTarget.thirdRequesterAddressDisplay.addClass('hidden');

            checks.secondRequesterCheck.prop('checked', false);
        }
    });
    
    if (checks.firstRequesterCheck.is(':checked')){
        
        if (fieldsTarget.secondRequesterInfoDisplay.is('.hidden')){
            fieldsTarget.secondRequesterInfoDisplay.removeClass('hidden');
        }
        if (fieldsTarget.secondRequesterAddressDisplay.is('.hidden')){
            fieldsTarget.secondRequesterAddressDisplay.removeClass('hidden');
        }
    } else {
        
        fieldsTarget.secondRequesterInfoDisplay.addClass('hidden');
        fieldsTarget.secondRequesterAddressDisplay.addClass('hidden');
        fieldsTarget.thirdRequesterInfoDisplay.addClass('hidden');
        fieldsTarget.thirdRequesterAddressDisplay.addClass('hidden');

        checks.secondRequesterCheck.prop('checked', false);
    }
    // SEGUNDO REQUERENTE
    checks.secondRequesterCheck.on('change', ()=>{
        if (checks.secondRequesterCheck.is(':checked')){
            fieldsTarget.thirdRequesterInfoDisplay.removeClass('hidden');
            fieldsTarget.thirdRequesterAddressDisplay.removeClass('hidden');
        } else {
            fieldsTarget.thirdRequesterInfoDisplay.addClass('hidden');
            fieldsTarget.thirdRequesterAddressDisplay.addClass('hidden');
        }
    });
    if (checks.firstRequiredCheck.is(':checked')){
        fieldsTarget.secondRequesterInfoDisplay.removeClass('hidden');
        fieldsTarget.secondRequesterAddressDisplay.removeClass('hidden');
    } else {
        fieldsTarget.secondRequesterInfoDisplay.addClass('hidden');
        fieldsTarget.secondRequesterAddressDisplay.addClass('hidden');
    }
    // PRIMEIRO RECLAMADO
    checks.firstRequiredCheck.on('change', ()=>{
        if (checks.firstRequiredCheck.is(':checked')){
            fieldsTarget.secondRequiredInfoDisplay.removeClass('hidden');
            fieldsTarget.secondRequiredAddressDisplay.removeClass('hidden');
        } else {
            fieldsTarget.secondRequiredInfoDisplay.addClass('hidden');
            fieldsTarget.secondRequiredAddressDisplay.addClass('hidden');
            fieldsTarget.thirdRequiredInfoDisplay.addClass('hidden');
            fieldsTarget.thirdRequiredAddressDisplay.addClass('hidden');

            checks.secondRequiredCheck.prop('checked', false);
        }
    });
    if (checks.firstRequiredCheck.is(':checked')){
        fieldsTarget.secondRequiredInfoDisplay.removeClass('hidden');
        fieldsTarget.secondRequiredAddressDisplay.removeClass('hidden');
    } else {
        fieldsTarget.secondRequiredInfoDisplay.addClass('hidden');
        fieldsTarget.secondRequiredAddressDisplay.addClass('hidden');
        fieldsTarget.thirdRequiredInfoDisplay.addClass('hidden');
        fieldsTarget.thirdRequiredAddressDisplay.addClass('hidden');

        checks.secondRequiredCheck.prop('checked', false);
    }
    // SEGUNDO RECLAMADO
    checks.secondRequiredCheck.on('change', ()=>{
        if (checks.secondRequiredCheck.is(':checked')){
            fieldsTarget.thirdRequiredInfoDisplay.removeClass('hidden');
            fieldsTarget.thirdRequiredAddressDisplay.removeClass('hidden');
        } else {
            fieldsTarget.thirdRequiredInfoDisplay.addClass('hidden');
            fieldsTarget.thirdRequiredAddressDisplay.addClass('hidden');
        }
    });
    if (checks.secondRequiredCheck.is(':checked')){
        fieldsTarget.thirdRequiredInfoDisplay.removeClass('hidden');
        fieldsTarget.thirdRequiredAddressDisplay.removeClass('hidden');
    } else {
        fieldsTarget.thirdRequiredInfoDisplay.addClass('hidden');
        fieldsTarget.thirdRequiredAddressDisplay.addClass('hidden');
    }

    // popups
    
}