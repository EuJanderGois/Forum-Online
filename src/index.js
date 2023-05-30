const app = window;

app.onload = ()=>{

    function getID(id){
        let result = document.getElementById(id);
        return result;
    }

    const btn = getID('sendBtn');

    const requester = {
        name: ()=>{
            let rName = getID('rName');
            return rName;
        },
        divName: ()=>{
            let rDivName = getID('rNameDiv');
            return rDivName;
        },
        cpf: ()=>{
            let rDoc = getID('rDoc');
            return rDoc;
        },
        divCpf: ()=>{
            let rDivDoc = getID('rDocDiv');
            return rDivDoc;
        },
        email: ()=>{
            let rEmail = getID('rEmail');
            return rEmail;
        },
        divEmail: ()=>{
            let rDivEmail = getID('rEmailDiv');
            return rDivEmail;
        },
        phone: ()=>{
            let rPhone = getID('rPhone');
            return rPhone;
        },
        divPhone: ()=>{
            let rDivPhone = getID('rPhoneDiv');
            return rDivPhone;
        },
        street: ()=>{
            let rStreet = getID('rStreet');
            return rStreet;
        },
        divStreet: ()=>{
            let rDivStreet = getID('rStreetDiv');
            return rDivStreet;
        },
        number: ()=>{
            let rNumber = getID('rNumber');
            return rNumber;
        },
        divNumber: ()=>{
            let rDivNumber = getID('rNumberDiv');
            return rDivNumber;
        },
        district: ()=>{
            let rDistrict = getID('rDistrict');
            return rDistrict;
        },
        divDistrict: ()=>{
            let rDivDistrict = getID('rDistrictDiv');
            return rDivDistrict;
        },
        city: ()=>{
            let rCity = getID('rCity');
            return rCity;
        },
        divCity: ()=>{
            let rDivCity = getID('rCityDiv');
            return rDivCity;
        },
        state: ()=>{
            let reqState = getID('rState');
            return reqState;
        },
        divState: ()=>{
            let rDivState = getID('rStateDiv');
            return rDivState;
        },
        postalCode: ()=>{
            let rPostalCode = getID('rPostalCode');
            return rPostalCode;
        },
        divPostalCode: ()=>{
            let rDivPostalCode = getID('rPostalCodeDiv');
            return rDivPostalCode;
        },
        report: ()=>{
            let report = getID('reportCase');
            return report;
        },
        divReport: ()=>{
            let divReport = getID('divReportCase');
            return divReport;
        },
        request: ()=>{
            let request = getID('request');
            return request;
        },
        divRequest: ()=>{
            let divRequest = getID('divRequest');
            return divRequest;
        },
        value: ()=>{
            let value = getID('value');
            return value;
        },
        divValue: ()=>{
            let divValue = getID('divValue');
            return divValue;
        }
    }

    const requested = {
        name: ()=>{
            let rdName = getID('rdName');
            return rdName;
        },
        divName: ()=>{
            let rdDivName = getID('rdNameDiv');
            return rdDivName;
        },
        cpf: ()=>{
            let rdDoc = getID('rdDoc');
            return rdDoc;
        },
        divCpf: ()=>{
            let rdDivCpf = getID('rdDocDiv');
            return rdDivCpf;
        },
        email: ()=>{
            let rdEmail = getID('rdEmail');
            return rdEmail;
        },
        divEmail: ()=>{
            let rdDivEmail = getID('rdEmailDiv');
            return rdDivEmail;
        },
        phone: ()=>{
            let rdPhone = getID('rdPhone');
            return rdPhone;
        },
        divPhone: ()=>{
            let rdDivPhone = getID('rdPhoneDiv');
            return rdDivPhone;
        },
        street: ()=>{
            let rdStreet = getID('rdStreet');
            return rdStreet;
        },
        divStreet: ()=>{
            let rdDivStreet = getID('rdStreetDiv');
            return rdDivStreet;
        },
        number: ()=>{
            let rdNumber = getID('rdNumber');
            return rdNumber;
        },
        divNumber: ()=>{
            let rdDivNumber = getID('rdNumberDiv');
            return rdDivNumber;
        },
        district: ()=>{
            let rdDistrict = getID('rdDistrict');
            return rdDistrict;
        },
        divDistrict: ()=>{
            let rdDivDistrict = getID('rdDistrictDiv');
            return rdDivDistrict;
        },
        city: ()=>{
            let rdCity = getID('rdCity');
            return rdCity;
        },
        divCity: ()=>{
            let rdDivCity = getID('rdCityDiv');
            return rdDivCity;
        },
        state: ()=>{
            let rdState = getID('rdState');
            return rdState;
        },
        divState: ()=>{
            let rdDivState = getID('rdStateDiv');
            return rdDivState; 
        },
        postalCode: ()=>{
            let rdPostalCode = getID('rdPostalCode');
            return rdPostalCode;
        },
        divPostalCode: ()=>{
            let rdDivPostalCode = getID('rdPostalCodeDiv');
            return rdDivPostalCode;
        }
    }

    const targets = {
        requesterName: ()=>{
            let requesterName = getID('requesterNameTarget');
            return requesterName;
        },
        requesterAddress: ()=>{
            let requesterAddress = getID('requesterAddressTarget');
            return requesterAddress;
        },
        requesterDocument: ()=>{
            let requesterDocument = getID('requesterDocTarget');
            return requesterDocument;
        },
        requesterEmail: ()=>{
            let requesterEmail = getID('requesterEmailTarget');
            return requesterEmail;
        },
        requesterPhone: ()=>{
            let requesterPhone = getID('requesterPhoneTarget');
            return requesterPhone;
        },
        requiredName: ()=>{
            let requiredName = getID('requiredNameTarget');
            return requiredName;
        },
        requiredAddress: ()=>{
            let requiredAddress = getID('requiredAddressTarget');
            return requiredAddress;
        },
        requiredDocument: ()=>{
            let requiredDocument = getID('requiredDocTarget');
            return requiredDocument;
        },
        requiredEmail: ()=>{
            let requiredEmail = getID('requiredEmailTarget');
            return requiredEmail;
        },
        requiredPhone: ()=>{
            let requiredPhone = getID('requiredPhoneTarget');
            return requiredPhone;
        },
        reportTarget: ()=>{
            let reportTarget = getID('reportTarget');
            return reportTarget;
        },
        requestTextTarget: ()=>{
            let requestTextTarget = getID('requestTextTarget');
            return requestTextTarget;
        },
        requestsTarget: ()=>{
            let requestsTarget = getID('requestsTarget');
            return requestsTarget;
            // append <li> tag
        },
        valueTarget: ()=>{
            let valueTarget = getID('valueTarget');
            return valueTarget;
        },
        signerName: ()=>{
            let signerName = getID('signerNameTarget');
            return signerName;
        },
        signerDocument: ()=>{
            let signerDocument = getID('signerDocument');
            return signerDocument;
        },
        dateTarget: ()=>{
            let dateTarget = getID('dateTarget');
            return dateTarget;
        },
        documentDiv: ()=>{
            let documentDiv = getID('toPrint');
            return documentDiv;
        }
    }

    function validateValues(){
        let isValid = true;

        // NOME
        let rName = requester.name();
        let rDivName = requester.divName();
        if (rName.value !== ''){
            rDivName.classList.remove('is-invalid');
            rName.classList.remove('is-invalid');
            console.log(rName.value);
        }else {
            rDivName.classList.add('is-invalid');
            rName.classList.add('is-invalid');
            app.scrollTo(30, 30);
            isValid = false;
        }
        let rdName = requested.name();
        let rdDivName = requested.divName();
        if (rdName.value !== ''){
            rdDivName.classList.remove('is-invalid');
            rdName.classList.remove('is-invalid');
            console.log(rdName.value);
        }else {
            rdDivName.classList.add('is-invalid');
            rdName.classList.add('is-invalid');
            app.scrollTo(1400, 1400);
            isValid = false;
        }

        // CPF
        let rCpf = requester.cpf();
        let rDivCpf = requester.divCpf();
        if (rCpf.value !== ''){
            rCpf.classList.remove('is-invalid');
            rDivCpf.classList.remove('is-invalid');
            console.log(rCpf.value);
        }else {
            rDivCpf.classList.add('is-invalid');
            rCpf.classList.add('is-invalid');
            app.scrollTo(30, 30);
            isValid = false;
        }
        let rdCpf = requested.cpf();
        let rdDivCpf = requested.divCpf();
        if (rdCpf.value !== ''){
            rdCpf.classList.remove('is-invalid');
            rdDivCpf.classList.remove('is-invalid');
            console.log(rCpf.value);
        }else {
            rdDivCpf.classList.add('is-invalid');
            rdCpf.classList.add('is-invalid');
            app.scrollTo(1400, 1400);
            isValid = false;
        }

        // EMAIL
        let rEmail = requester.email();
        let rDivEmail = requester.divEmail();
        if (rEmail.value !== ''){
            rEmail.classList.remove('is-invalid');
            rDivEmail.classList.remove('is-invalid');
            console.log(rEmail.value);
        }else {
            rDivEmail.classList.add('is-invalid');
            rEmail.classList.add('is-invalid');
            app.scrollTo(30, 30);
            isValid = false;
        }
        let rdEmail = requested.email();
        let rdDivEmail = requested.divEmail();
        if (rdEmail.value !== ''){
            rdEmail.classList.remove('is-invalid');
            rdDivEmail.classList.remove('is-invalid');
            console.log(rEmail.value);
        }else {
            rdDivEmail.classList.add('is-invalid');
            rdEmail.classList.add('is-invalid');
            app.scrollTo(1400, 1400);
            isValid = false;
        }

        // TELEFONE
        let rPhone = requester.phone();
        let rDivPhone = requester.divPhone();
        if (rPhone.value !== ''){
            rPhone.classList.remove('is-invalid');
            rDivPhone.classList.remove('is-invalid');
            console.log(rPhone.value);
        }else {
            rDivPhone.classList.add('is-invalid');
            rPhone.classList.add('is-invalid');
            app.scrollTo(180, 180);
            isValid = false;
        }
        let rdPhone = requested.phone();
        let rdDivPhone = requested.divPhone();
        if (rdPhone.value !== ''){
            rdPhone.classList.remove('is-invalid');
            rdDivPhone.classList.remove('is-invalid');
            console.log(rdPhone.value);
        }else {
            rdDivPhone.classList.add('is-invalid');
            rdPhone.classList.add('is-invalid');
            app.scrollTo(1400, 1400);
            isValid = false;
        }

        //RUA
        let rStreet = requester.street();
        let rDivStreet = requester.divStreet();
        if (rStreet.value !== ''){
            rStreet.classList.remove('is-invalid');
            rDivStreet.classList.remove('is-invalid');
            console.log(rStreet.value);
        }else {
            rDivStreet.classList.add('is-invalid');
            rStreet.classList.add('is-invalid');
            app.scrollTo(750, 750);
            isValid = false;
        }
        let rdStreet = requested.street();
        let rdDivStreet = requested.divStreet();
        if (rdStreet.value !== ''){
            rdStreet.classList.remove('is-invalid');
            rdDivStreet.classList.remove('is-invalid');
            console.log(rdStreet.value);
        }else {
            rdDivStreet.classList.add('is-invalid');
            rdStreet.classList.add('is-invalid');
            app.scrollTo(1900, 1900);
            isValid = false;
        }

        // NUMERO
        let rNumber = requester.number();
        let rDivNumber = requester.divNumber();
        if (rNumber.value !== ''){
            rNumber.classList.remove('is-invalid');
            rDivNumber.classList.remove('is-invalid');
            console.log(rNumber.value);
        }else {
            rDivNumber.classList.add('is-invalid');
            rNumber.classList.add('is-invalid');
            app.scrollTo(750, 750);
            isValid = false;
        }
        let rdNumber = requested.number();
        let rdDivNumber = requested.divNumber();
        if (rdNumber.value !== ''){
            rdNumber.classList.remove('is-invalid');
            rdDivNumber.classList.remove('is-invalid');
            console.log(rdNumber.value);
        }else {
            rdDivNumber.classList.add('is-invalid');
            rdNumber.classList.add('is-invalid');
            app.scrollTo(1900, 1900);
            isValid = false;
        }

        // BAIRRO
        let rDistrict = requester.district();
        let rDivDistrict = requester.divDistrict();
        if (rDistrict.value !== ''){
            rDistrict.classList.remove('is-invalid');
            rDivDistrict.classList.remove('is-invalid');
            console.log(rDistrict.value);
        }else {
            rDivDistrict.classList.add('is-invalid');
            rDistrict.classList.add('is-invalid');
            app.scrollTo(750, 750);
            isValid = false;
        }
        let rdDistrict = requested.district();
        let rdDivDistrict = requested.divDistrict();
        if (rdDistrict.value !== ''){
            rdDistrict.classList.remove('is-invalid');
            rdDivDistrict.classList.remove('is-invalid');
            console.log(rdDistrict.value);
        }else {
            rdDivDistrict.classList.add('is-invalid');
            rdDistrict.classList.add('is-invalid');
            app.scrollTo(1900, 1900);
            isValid = false;
        }

        // CIDADE
        let rCity = requester.city();
        let rDivCity = requester.divCity();
        if (rCity.value !== ''){
            rCity.classList.remove('is-invalid');
            rDivCity.classList.remove('is-invalid');
            console.log(rCity.value);
        }else {
            rDivCity.classList.add('is-invalid');
            rCity.classList.add('is-invalid');
            app.scrollTo(750, 750);
            isValid = false;
        }
        let rdCity = requested.city();
        let rdDivCity = requested.divCity();
        if (rdCity.value !== ''){
            rdCity.classList.remove('is-invalid');
            rdDivCity.classList.remove('is-invalid');
            console.log(rdCity.value);
        }else {
            rdDivCity.classList.add('is-invalid');
            rdCity.classList.add('is-invalid');
            app.scrollTo(1900, 1900);
            isValid = false;
        }

        // CEP
        let rPostalCode = requester.postalCode();
        let rDivPostalCode = requester.divPostalCode();
        if (rPostalCode.value !== ''){
            rPostalCode.classList.remove('is-invalid');
            rDivPostalCode.classList.remove('is-invalid');
            console.log(rPostalCode.value);
        }else {
            rDivPostalCode.classList.add('is-invalid');
            rPostalCode.classList.add('is-invalid');
            app.scrollTo(750, 750);
            isValid = false;
        }
        let rdPostalCode = requested.postalCode();
        let rdDivPostalCode = requested.divPostalCode();
        if (rdPostalCode.value !== ''){
            rdPostalCode.classList.remove('is-invalid');
            rdDivPostalCode.classList.remove('is-invalid');
            console.log(rdPostalCode.value);
        }else {
            rdDivPostalCode.classList.add('is-invalid');
            rdPostalCode.classList.add('is-invalid');
            app.scrollTo(2200, 2200);
            isValid = false;
        }

        // RELATO DO CASO
        let report = requester.report();
        let divReport = requester.divReport();
        if (report.value !== ''){
            report.classList.remove('is-invalid');
            divReport.classList.remove('is-invalid');
            console.log(report.value);
        }else {
            divReport.classList.add('is-invalid');
            report.classList.add('is-invalid');
            app.scrollTo(900, 900);
            isValid = false;
        }

        // DOS PEDIDOS
        let request = requester.request();
        let divRequest = requester.divRequest();
        if (request.value !== ''){
            request.classList.remove('is-invalid');
            divRequest.classList.remove('is-invalid');
            console.log(request.value);
        }else {
            divRequest.classList.add('is-invalid');
            request.classList.add('is-invalid');
            app.scrollTo(1100, 1100);
            isValid = false;
        }

        // VALOR DA CAUSA
        let value = requester.value();
        let divValue = requester.divValue();
        if (value.value !== ''){
            value.classList.remove('is-invalid');
            divValue.classList.remove('is-invalid');
            console.log(value.value);
        }else {
            divValue.classList.add('is-invalid');
            value.classList.add('is-invalid');
            app.scrollTo(1200, 1200);
            isValid = false;
        }
        return isValid;
    }

    btn.onclick = ()=>{
        validateValues();
        if (validateValues()){
            alert('valores válidos');
            
            // RECLAMANTE
            let requesterNameTarget = targets.requesterName();
            let requesterNameValue = requester.name().value;
            requesterNameTarget.innerText = requesterNameValue.toUpperCase();
            
            // ENDEREÇO
            let requesterStreet = requester.street().value;
            let requesterNumber = requester.number().value;
            let requesterCity = requester.city().value;
            // let requesterState = requester.state().value;
            let requesterPostalCode = requester.postalCode().value;
            let requesterAddress = 'R: ' + requesterStreet.toUpperCase() + ' ' + 'N: ' + requesterNumber.toUpperCase() + ' ' + requesterCity.toUpperCase() + '/' + 'PR' + ' CEP: ' + requesterPostalCode;
            let requesterAddressTarget = targets.requesterAddress();
            requesterAddressTarget.innerText = requesterAddress;

            // CPF/CNPJ
            let requesterDocument = requester.cpf().value;
            let requesterDocumentTarget = targets.requesterDocument();
            requesterDocumentTarget.innerText = requesterDocument;

            // EMAIL
            let requesterEmail = requester.email().value;
            let requesterEmailTarget = targets.requesterEmail();
            requesterEmailTarget.innerText = requesterEmail;

            // WHATSAPP TELEFONE
            let requesterPhone = requester.phone().value;
            let requesterPhoneTarget = targets.requesterPhone();
            requesterPhoneTarget.innerText = requesterPhone;

            // RECLAMADO
            let requiredName = requested.name().value;
            let requiredNameTarget = targets.requiredName();
            requiredNameTarget.innerText = requiredName.toUpperCase();

            // ENDEREÇO
            let requiredStreet = requested.street().value;
            let requiredNumber = requested.number().value;
            let requiredCity = requested.city().value;
            // let requiredState = requested.state().value;
            let requiredPostalCode = requested.postalCode().value;
            let requiredAddress = 'R: '+requiredStreet.toUpperCase()+' N: '+requiredNumber+' '+requiredCity.toUpperCase()+'/PR'+' CEP: '+requiredPostalCode;
            let requiredAddressTarget = targets.requiredAddress();
            requiredAddressTarget.innerText = requiredAddress;

            // CPF/CNPJ
            let requiredDocument = requested.cpf().value;
            let requiredDocumentTarget = targets.requiredDocument();
            requiredDocumentTarget.innerText = requiredDocument;

            // EMAIL
            let requiredEmail = requested.email().value;
            let requiredEmailTarget = targets.requiredEmail();
            requiredEmailTarget.innerText = requiredEmail;

            // WHATSAPP TELEFONE
            let requiredPhone = requested.phone().value;
            let requiredPhoneTarget = targets.requiredPhone();
            requiredPhoneTarget.innerText = requiredPhone;

            // DOS FATOS
            let report = requester.report().value;
            let reportTarget = targets.reportTarget();
            reportTarget.innerText = report;

            // DOS PEDIDOS
            let request = requester.request().value;
            let requestTarget = targets.requestTextTarget();
            requestTarget.innerText = request;

            // VALOR DA CAUSA
            let causeValue = requester.value().value;
            let causeValueTarget = targets.valueTarget();
            causeValueTarget.innerText = causeValue;

            // DATA
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth();
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
            let formatedDay = day < 10 ? '0' + day : day;
            let year = date.getFullYear();
            let today = `Itapoá (SC), ${formatedDay} de ${monthName} de ${year}.`;
            let dateTarget = targets.dateTarget();
            dateTarget.innerText = today;

            // ASSINANTE
            let signerName = requester.name().value;
            let signerDocument = requester.cpf().value;
            let signerNameTarget = targets.signerName();
            let signerDocumentTarget = targets.signerDocument();

            signerNameTarget.innerText = signerName.toUpperCase();
            signerDocumentTarget.innerText = signerDocument;
        }
    }
    const printBtn = getID('printBtn');
    const toPrint = getID('toPrint');
    const header = getID('header');
    const form = getID('form');
    
    printBtn.onclick = ()=>{
        header.classList.add('visually-hidden');
        form.classList.add('visually-hidden');
        printBtn.classList.add('visually-hidden');
    }
};