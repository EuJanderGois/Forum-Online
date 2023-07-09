window.onload = ()=>{

    const requester = {
        name: $('#rName'),
        document: $('#rDoc'),
        email: $('#rEmail'),
        phone: $('#rPhone'),
        street: $('#rStreet'),
        number: $('#rNumber'),
        district: $('#rDistrict'),
        city: $('#rCity'),
        state: $('#rState'),
        postalCode: $('#rPostalCode'),
        report: $('#reportCase'),
        request: $('#request'),
        anticipationCause: $('#anticipation'),
        valueOne: $('#valueOne'),
        valueTwo: $('#valueTwo'),
        valueTree: $('#valueTree'),

        invalidName: $('#rInvalidName'),
        invalidDocument: $('#rInvalidDocument'),
        invalidEmail: $('#rInvalidEmail'),
        invalidPhone: $('#rInvalidPhone'),
        invalidStreet: $('#rInvalidStreet'),
        invalidNumber: $('#rInvalidNumber'),
        invalidDistrict: $('#rInvalidDistrict'),
        invalidCity: $('#rInvalidCity'),
        invalidState: $('#rInvalidState'),
        invalidPostalCode: $('#rInvalidPostalCode'),
        invalidReport: $('#invalidReport'),
        invalidRequest: $('#invalidRequest'),
        invalidAnticipationCause: $('#invalidAnticipationCause'),
        invalidValueOne: $('#invalidValueOne'),
        invalidValueTwo: $('#invalidValueTwo'),
        invalidValueTree: $('#invalidValueTree')
    }
    const required = {
        name: $('#rdName'),
        document: $('#rdDoc'),
        email: $('#rdEmail'),
        phone: $('#rdPhone'),
        street: $('#rdStreet'),
        number: $('#rdNumber'),
        district: $('#rdDistrict'),
        city: $('#rdCity'),
        state: $('#rdState'),
        postalCode: $('#rdPostalCode'),

        invalidName: $('#rdInvalidName'),
        invalidDocument: $('#rdInvalidDocument'),
        invalidEmail: $('#rdInvalidEmail'),
        invalidPhone: $('#rdInvalidPhone'),
        invalidStreet: $('#rdInvalidStreet'),
        invalidNumber: $('#rdInvalidNumber'),
        invalidDistrict: $('#rdInvalidDistrict'),
        invalidCity: $('#rdInvalidCity'),
        invalidState: $('#rdInvalidState'),
        invalidPostalCode: $('#rdInvalidPostalCode')
    }

    const targets = {
        requesterName: $('#requesterNameTarget'),
        requesterDocument: $('#requesterDocTarget'),
        requesterEmail: $('#requesterEmailTarget'),
        requesterPhone: $('#requesterPhoneTarget'),
        requesterAddress: $('#requesterAddressTarget'),

        requiredName: $('#requiredNameTarget'),
        requiredDocument: $('#requiredDocTarget'),
        requiredEmail: $('#requiredEmailTarget'),
        requiredPhone: $('#requiredPhoneTarget'),
        requiredAddress: $('#requiredAddressTarget'),

        report: $('#reportTarget'),
        requests: $('#requestsTarget'), // if use append <li>
        requestText: $('#requestTextTarget'),
        anticipationBol: $('#anticipationTarget'),
        anticipationText: $('#anticipationTextTarget'),

        firstValue: $('#firstValue'),
        secondValue: $('#secondValue'),
        thirdValue: $('#thirdValue'),

        signerName: $('#signerNameTarget'),
        signerDocument: $('#signerDocument'),
        date: $('#dateTarget'),
        headerDate: $('#headerDateTarget'),
        headerTime: $('#headerTimeTarget'),

        doc2Name: $('#doc2NameTarget'),
        doc2Document: $('#doc2DocumentTarget'),
        doc2Street: $('#doc2StreetTarget'),
        doc2Number: $('#doc2NumberTarget'),
        doc2District: $('#doc2DistrictTarget'),
        doc2CityState: $('#doc2CityStateTarget'),
        doc2PostalCode: $('#doc2PostalCodeTarget'),
        doc2Phone: $('#doc2PhoneTarget'),
        doc2Email: $('#doc2EmailTarget'),
        doc2Date: $('#doc2DateTarget'),
        doc2HeaderDate: $('#doc2HeaderDateTarget'),
        doc2HeaderTime: $('#doc2HeaderTimeTarget'),
        doc2Signer: $('#doc2SignerTarget'),
    }

    function validateValues(){
        let isValid = true;
        //name
        if (requester.name.val()){
            requester.invalidName.addClass('hidden');
        } else {
            requester.invalidName.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#r_infoScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        if (required.name.val()){
            required.invalidName.addClass('hidden');
        } else {
            required.invalidName.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#rd_infoScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        // document
        if (requester.document.val()){
            requester.invalidDocument.addClass('hidden');
        } else {
            requester.invalidDocument.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#r_infoScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        if (required.document.val()){
            required.invalidDocument.addClass('hidden');
        } else {
            required.invalidDocument.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#rd_infoScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        // email
        if (requester.email.val()){
            requester.invalidEmail.addClass('hidden');
        } else {
            requester.invalidEmail.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#r_infoScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        if (required.email.val()){
            required.invalidEmail.addClass('hidden');
        } else {
            required.invalidEmail.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#rd_infoScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        // phone
        if (requester.phone.val()){
            requester.invalidPhone.addClass('hidden');
        } else {
            requester.invalidPhone.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#r_infoScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        if (required.phone.val()){
            required.invalidPhone.addClass('hidden');
        } else {
            required.invalidPhone.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#rd_infoScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        // street
        if (requester.street.val()){
            requester.invalidStreet.addClass('hidden');
        } else {
            requester.invalidStreet.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#r_addressScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        if (required.street.val()){
            required.invalidStreet.addClass('hidden');
        } else {
            required.invalidStreet.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#rd_addressScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        // number
        if (requester.number.val()){
            requester.invalidNumber.addClass('hidden');
        } else {
            requester.invalidNumber.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#r_addressScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        if (required.number.val()){
            required.invalidNumber.addClass('hidden');
        } else {
            required.invalidNumber.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#rd_addressScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        // district
        if (requester.district.val()){
            requester.invalidDistrict.addClass('hidden');
        } else {
            requester.invalidDistrict.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#r_addressScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        if (required.district.val()){
            required.invalidDistrict.addClass('hidden');1
        } else {
            required.invalidDistrict.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#rd_addressScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        // city
        if (requester.city.val()){
            requester.invalidCity.addClass('hidden');
        } else {
            requester.invalidCity.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#r_addressScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        if (required.city.val()){
            required.invalidCity.addClass('hidden');
        } else {
            required.invalidCity.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#rd_addressScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        // state
        if (requester.state.val()){
            requester.invalidState.addClass('hidden');
        } else {
            requester.invalidState.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#r_addressScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        if (required.state.val()){
            required.invalidState.addClass('hidden');
        } else {
            required.invalidState.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#rd_addressScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        // postal code
        if (requester.postalCode.val()){
            requester.invalidPostalCode.addClass('hidden');
        } else {
            requester.invalidPostalCode.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#r_addressScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        if (required.postalCode.val()){
            required.invalidPostalCode.addClass('hidden');
        } else {
            required.invalidPostalCode.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#rd_addressScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        // report
        if (requester.report.val()){
            requester.invalidReport.addClass('hidden');
        } else {
            requester.invalidReport.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#reportScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        // require
        if (requester.request.val()){
            requester.invalidRequest.addClass('hidden');
        } else {
            requester.invalidRequest.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#requestScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        // anticipation
        if ($('#check').is(':checked')){
            if (requester.anticipationCause.val()){
                requester.invalidAnticipationCause.addClass('hidden');
            } else {
                requester.invalidAnticipationCause.removeClass('hidden');
                $('html, body').animate({
                    scrollTop: $('#check').offset().top - 150
                }, 800);
                isValid = false;
            }
        }
        // value 
        if (!isNaN(parseInt(moneyToFloat('#valueTree'))) && parseInt(moneyToFloat('#valueTree')) !== 0){
            requester.invalidValueTree.addClass('hidden');
        } else {
            requester.invalidValueTree.removeClass('hidden');
            $('html, body').animate({
                scrollTop: $('#causeScrollTarget').offset().top - 150
            }, 800);
            isValid = false;
        }
        return isValid;
    }
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

    $('#sendBtn').on('click', ()=> {
        
        validateValues();
        if (validateValues()){
            
            //name
            targets.requesterName.text(requester.name.val().toUpperCase());
            targets.requiredName.text(required.name.val().toUpperCase());
            // address
            targets.requesterAddress.text(
                "R: " + requester.street.val().toUpperCase() +
                " N: " + requester.number.val().toUpperCase() +
                " " + requester.city.val().toUpperCase() +
                "/" + requester.state.val().toUpperCase() +
                " CEP: " + requester.postalCode.val().toUpperCase()
            );
            targets.requiredAddress.text(
                "R: " + required.street.val().toUpperCase() +
                " N: " + requester.number.val().toUpperCase() +
                " " + requester.city.val().toUpperCase() +
                "/" + required.state.val().toUpperCase() +
                " CEP: " + requester.postalCode.val().toUpperCase()
            );
            // document
            targets.requesterDocument.text(requester.document.val());
            targets.requiredDocument.text(required.document.val());
            // email
            targets.requesterEmail.text(requester.email.val());
            targets.requiredEmail.text(required.email.val());
            // phone
            targets.requesterPhone.text(requester.phone.val());
            targets.requiredPhone.text(required.phone.val());
            // report
            targets.report.text(requester.report.val());
            // request
            targets.requestText.text(requester.request.val());
            // values
            targets.firstValue.text(requester.valueOne.val());
            targets.secondValue.text(requester.valueTwo.val());
            targets.thirdValue.text(requester.valueTree.val());
            // date
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
            let monthName = months[month];
            let formatMonth = month < 10 ? '0' + month : month;
            let formatDay = day < 10 ? '0' + day : day;
            let todayDate = formatDay + '/' + formatMonth + '/' + year;
            let todayIs = `Itapoá (SC), ${formatDay} de ${monthName} de ${year}.`;
            let formatHours = hours < 10 ? '0' + hours : hours;
            let formatMin = min < 10 ? '0' + min : min;
            let timeNow = formatHours + ':' + formatMin;
            targets.date.text(todayIs);
            targets.headerDate.text(todayDate);
            targets.doc2HeaderDate.text(todayDate);
            targets.headerTime.text(timeNow);
            targets.doc2HeaderTime.text(timeNow);
            // signer
            targets.signerName.text(requester.name.val().toUpperCase());
            targets.signerDocument.text(requester.document.val());
            // term
            targets.doc2Name.text(requester.name.val().toUpperCase());
            targets.doc2Document.text(requester.document.val());
            targets.doc2Street.text(requester.street.val().toUpperCase());
            targets.doc2Number.text(requester.number.val());
            targets.doc2District.text(requester.district.val().toUpperCase());
            targets.doc2CityState.text(requester.city.val().toUpperCase() + '/' + requester.state.val().toUpperCase());
            targets.doc2PostalCode.text(requester.postalCode.val());
            targets.doc2Phone.text(requester.phone.val());
            targets.doc2Email.text(requester.email.val());
            targets.doc2Date.text(todayIs);
            targets.doc2Signer.text(requester.name.val().toUpperCase());

            if ($('#check').is(':checked')){
                targets.anticipationBol.text('Sim');
                targets.anticipationText.text(requester.anticipationCause.val());
            } else {
                targets.anticipationBol.text('Não');
                targets.anticipationText.text('Não há solicitação de antecipação de tutela nesta causa.');
            }

            alert('Seu documento foi gerado com sucesso. Clique em imprimir para realizar o download!');
            $('#printBtn').removeClass('hidden');
        }
    });
    $('#printBtn').on('click', ()=>{
        $('#doc1').css("display", "flex");
        $('#doc2').css("display", "flex");
        $('#pageMain').css("display", "none");
        $('#pageFooter').css("display", "none");
        print();
        
    });
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

    // popups
    
}