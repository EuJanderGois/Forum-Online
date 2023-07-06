


const app = window;

app.onload = ()=>{

    function getID(id){
        let result = document.getElementById(id);
        return result;
    }

    const btn = getID('sendBtn');

    const requester = {
        name: ()=>{
            let element = getID('rName');
            return element;
        },
        invalidName: ()=>{
            let element = getID('rInvalidName');
            return element;
        },
        document: ()=>{
            let element = getID('rDoc');
            return element;
        },
        invalidDocument: ()=>{
            let element = getID('rInvalidDocument');
            return element;
        },
        email: ()=>{
            let element = getID('rEmail');
            return element;
        },
        invalidEmail: ()=>{
            let element = getID('rInvalidEmail');
            return element;
        },
        phone: ()=>{
            let element = getID('rPhone');
            return element;
        },
        invalidPhone: ()=>{
            let element = getID('rInvalidPhone');
            return element;
        },
        street: ()=>{
            let element = getID('rStreet');
            return element;
        },
        invalidStreet: ()=>{
            let element = getID('rInvalidStreet');
            return element;
        },
        number: ()=>{
            let element = getID('rNumber');
            return element;
        },
        invalidNumber: ()=>{
            let element = getID('rInvalidNumber');
            return element;
        },
        district: ()=>{
            let element = getID('rDistrict');
            return element;
        },
        invalidDistrict: ()=>{
            let element = getID('rInvalidDistrict');
            return element;
        },
        city: ()=>{
            let element = getID('rCity');
            return element;
        },
        invalidCity: ()=>{
            let element = getID('rInvalidCity');
            return element;
        },
        state: ()=>{
            let element = getID('rState');
            return element;
        },
        invalidState: ()=>{
            let element = getID('rInvalidState');
            return element;
        },
        postalCode: ()=>{
            let element = getID('rPostalCode');
            return element;
        },
        invalidPostalCode: ()=>{
            let element = getID('rInvalidPostalCode');
            return element;
        },
        report: ()=>{
            let element = getID('reportCase');
            return element;
        },
        invalidReport: ()=>{
            let element = getID('invalidReport');
            return element;
        },
        request: ()=>{
            let element = getID('request');
            return element;
        },
        invalidRequest: ()=>{
            let element = getID('invalidRequest');
            return element;
        },
        valueOne: ()=>{
            let element = getID('valueOne');
            return element;
        },
        valueTwo: ()=>{
            let element = getID('valueTwo');
            return element;
        },
        valueTree: ()=>{
            let element = getID('valueTree');
            return element;
        },
        invalidValueOne: ()=>{
            let element = getID('invalidValueOne');
            return element;
        },
        invalidValueTwo: ()=>{
            let element = getID('invalidValueTwo');
            return element;
        },
        invalidValueTree: ()=>{
            let element = getID('invalidValueTree');
            return element;
        }
    }

    const requested = {
        name: ()=>{
            let element = getID('rdName');
            return element;
        },
        invalidName: ()=>{
            let element = getID('rdInvalidName');
            return element;
        },
        document: ()=>{
            let element = getID('rdDoc');
            return element;
        },
        invalidDocument: ()=>{
            let element = getID('rdInvalidDocument');
            return element;
        },
        email: ()=>{
            let element = getID('rdEmail');
            return element;
        },
        invalidEmail: ()=>{
            let element = getID('rdInvalidEmail');
            return element;
        },
        phone: ()=>{
            let element = getID('rdPhone');
            return element;
        },
        invalidPhone: ()=>{
            let element = getID('rdInvalidPhone');
            return element;
        },
        street: ()=>{
            let element = getID('rdStreet');
            return element;
        },
        invalidStreet: ()=>{
            let element = getID('rdInvalidStreet');
            return element;
        },
        number: ()=>{
            let element = getID('rdNumber');
            return element;
        },
        invalidNumber: ()=>{
            let element = getID('rdInvalidNumber');
            return element;
        },
        district: ()=>{
            let element = getID('rdDistrict');
            return element;
        },
        invalidDistrict: ()=>{
            let element = getID('rdInvalidDistrict');
            return element;
        },
        city: ()=>{
            let element = getID('rdCity');
            return element;
        },
        invalidCity: ()=>{
            let element = getID('rdInvalidCity');
            return element;
        },
        state: ()=>{
            let element = getID('rdState');
            return element;
        },
        invalidState: ()=>{
            let element = getID('rdInvalidState');
            return element; 
        },
        postalCode: ()=>{
            let element = getID('rdPostalCode');
            return element;
        },
        invalidPostalCode: ()=>{
            let element = getID('rdInvalidPostalCode');
            return element;
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
        firstValueTarget: ()=>{
            let target = getID('firstValue');
            return target;
        },
        secondValueTarget: ()=>{
            let target = getID('secondValue');
            return target;
        },
        thirdValueTarget: ()=>{
            let target = getID('thirdValue');
            return target;
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
        doc2Name: ()=>{
            let element = getID('doc2NameTarget');
            return element;
        },
        doc2Document: ()=>{
            let element = getID('doc2DocumentTarget');
            return element;
        },
        doc2Street: ()=>{
            let element = getID('doc2StreetTarget');
            return element;
        },
        doc2Number: ()=>{
            let element = getID('doc2NumberTarget');
            return element;
        },
        doc2District: ()=>{
            let element = getID('doc2DistrictTarget');
            return element;
        },
        doc2CityState: ()=>{
            let element = getID('doc2CityStateTarget');
            return element;
        },
        doc2PostalCode: ()=>{
            let element = getID('doc2PostalCodeTarget');
            return element;
        },
        doc2Phone: ()=>{
            let element = getID('doc2PhoneTarget');
            return element;
        },
        doc2Email: ()=>{
            let element = getID('doc2EmailTarget');
            return element;
        },
        doc2Date: ()=>{
            let element = getID('doc2DateTarget');
            return element;
        },
        doc2Signer: ()=>{
            let element = getID('doc2SignerTarget');
            return element;
        }
    }

    function validateValues(){
        let isValid = true;

        // NOME
        let rName = requester.name();
        let rInvalidName = requester.invalidName();
        if (rName.value !== ''){
            rInvalidName.classList.add('hidden');
        }else {
            rInvalidName.classList.remove('hidden');
            app.scrollTo(30, 30);
            isValid = false;
        }
        let rdName = requested.name();
        let rdInvalidName = requested.invalidName();
        if (rdName.value !== ''){
            rdInvalidName.classList.add('hidden');
        }else {
            rdInvalidName.classList.remove('hidden');
            app.scrollTo(1800, 1800);
            isValid = false;
        }

        // CPF
        let rDocument = requester.document();
        let rInvalidDocument = requester.invalidDocument();
        if (rDocument.value !== ''){
            rInvalidDocument.classList.add('hidden');
        }else {
            rInvalidDocument.classList.remove('hidden');
            app.scrollTo(30, 30);
            isValid = false;
        }
        let rdDocument = requested.document();
        let rdInvalidDocument = requested.invalidDocument();
        if (rdDocument.value !== ''){
            rdInvalidDocument.classList.add('hidden');
        }else {
            rdInvalidDocument.classList.remove('hidden');            
            app.scrollTo(1800, 1800);
            isValid = false;
        }

        // EMAIL
        let rEmail = requester.email();
        let rInvalidEmail = requester.invalidEmail();
        if (rEmail.value !== ''){
            rInvalidEmail.classList.add('hidden');
        }else {
            rInvalidEmail.classList.remove('hidden');
            app.scrollTo(30, 30);
            isValid = false;
        }
        let rdEmail = requested.email();
        let rdInvalidEmail = requested.invalidEmail();
        if (rdEmail.value !== ''){
            rdInvalidEmail.classList.add('hidden');
        }else {
            rdInvalidEmail.classList.remove('hidden');
            app.scrollTo(1800, 1800);
            isValid = false;
        }

        // TELEFONE
        let rPhone = requester.phone();
        let rInvalidPhone = requester.invalidPhone();
        if (rPhone.value !== ''){
            rInvalidPhone.classList.add('hidden');
        }else {
            rInvalidPhone.classList.remove('hidden');
            app.scrollTo(30, 30);
            isValid = false;
        }
        let rdPhone = requested.phone();
        let rdInvalidPhone = requested.invalidPhone();
        if (rdPhone.value !== ''){
            rdInvalidPhone.classList.add('hidden');
        }else {
            rdInvalidPhone.classList.remove('hidden');
            app.scrollTo(1800, 1800);
            isValid = false;
        }

        //RUA
        let rStreet = requester.street();
        let rInvalidStreet = requester.invalidStreet();
        if (rStreet.value !== ''){
            rInvalidStreet.classList.add('hidden');
        }else {
            rInvalidStreet.classList.remove('hidden');
            app.scrollTo(550, 550);
            isValid = false;
        }
        let rdStreet = requested.street();
        let rdInvalidStreet = requested.invalidStreet();
        if (rdStreet.value !== ''){
            rdInvalidStreet.classList.add('hidden');
        }else {
            rdInvalidStreet.classList.remove('hidden');
            app.scrollTo(2350, 2350);
            isValid = false;
        }

        // NUMERO
        let rNumber = requester.number();
        let rInvalidNumber = requester.invalidNumber();
        if (rNumber.value !== ''){
            rInvalidNumber.classList.add('hidden');
        }else {
            rInvalidNumber.classList.remove('hidden');
            app.scrollTo(550, 550);
            isValid = false;
        }
        let rdNumber = requested.number();
        let rdInvalidNumber = requested.invalidNumber();
        if (rdNumber.value !== ''){
            rdInvalidNumber.classList.add('hidden');
        }else {
            rdInvalidNumber.classList.remove('hidden');
            app.scrollTo(2350, 2350);
            isValid = false;
        }

        // BAIRRO
        let rDistrict = requester.district();
        let rInvalidDistrict = requester.invalidDistrict();
        if (rDistrict.value !== ''){
            rInvalidDistrict.classList.add('hidden');
        }else {
            rInvalidDistrict.classList.remove('hidden');
            app.scrollTo(550, 550);
            isValid = false;
        }
        let rdDistrict = requested.district();
        let rdInvalidDistrict = requested.invalidDistrict();
        if (rdDistrict.value !== ''){
            rdInvalidDistrict.classList.add('hidden');
        }else {
            rdInvalidDistrict.classList.remove('hidden');
            app.scrollTo(2350, 2350);
            isValid = false;
        }

        // CIDADE
        let rCity = requester.city();
        let rInvalidCity = requester.invalidCity();
        if (rCity.value !== ''){
            rInvalidCity.classList.add('hidden');
        }else {
            rInvalidCity.classList.remove('hidden');
            app.scrollTo(850, 850);
            isValid = false;
        }
        let rdCity = requested.city();
        let rdInvalidCity = requested.invalidCity();
        if (rdCity.value !== ''){
            rdInvalidCity.classList.add('hidden');
        }else {
            rdInvalidCity.classList.remove('hidden');
            app.scrollTo(2350, 2350);
            isValid = false;
        }

        // ESTADO
        let rState = requester.state();
        let rInvalidState = requester.invalidState();
        if (rState.value !== '0'){
            rInvalidState.classList.add('hidden');
        }else {
            rInvalidState.classList.remove('hidden');
            app.scrollTo(850, 850);
            isValid = false;
        }
        let rdState = requested.state();
        let rdInvalidState = requested.invalidState();
        if (rdState.value !== '0'){
            rdInvalidState.classList.add('hidden');
        }else {
            rdInvalidState.classList.remove('hidden');
            app.scrollTo(2350, 2350);
            isValid = false;
        }

        // CEP
        let rPostalCode = requester.postalCode();
        let rInvalidPostalCode = requester.invalidPostalCode();
        if (rPostalCode.value !== ''){
            rInvalidPostalCode.classList.add('hidden');
        }else {
            rInvalidPostalCode.classList.remove('hidden');
            app.scrollTo(850, 850);
            isValid = false;
        }
        let rdPostalCode = requested.postalCode();
        let rdInvalidPostalCode = requested.invalidPostalCode();
        if (rdPostalCode.value !== ''){
            rdInvalidPostalCode.classList.add('hidden');
        }else {
            rdInvalidPostalCode.classList.remove('hidden');
            app.scrollTo(2350, 2350);
            isValid = false;
        }

        // RELATO DO CASO
        let report = requester.report();
        let invalidReport = requester.invalidReport();
        if (report.value !== ''){
            invalidReport.classList.add('hidden');
        }else {
            invalidReport.classList.remove('hidden');
            app.scrollTo(900, 900);
            isValid = false;
        }

        // DOS PEDIDOS
        let request = requester.request();
        let invalidRequest = requester.invalidRequest();
        if (request.value !== ''){
            invalidRequest.classList.add('hidden');
        }else {
            invalidRequest.classList.remove('hidden');
            app.scrollTo(1300, 1300);
            isValid = false;
        }

        // VALOR DA CAUSA
        let valueTree = requester.valueTree();
        let invalidValueTree = requester.invalidValueTree();
        let x = valueTree.value.replace(/[^\d]+/g,'');
        if (!Number.isNaN(parseInt(x)) && parseInt(x) !== 0){
            invalidValueTree.classList.add('hidden');
        }else {
            invalidValueTree.classList.remove('hidden');
            app.scrollTo(1500, 1500);
            isValid = false;
        }
        return isValid;
    }

    btn.onclick = ()=>{
        validateValues();
        if (validateValues()){
            
            // RECLAMANTE
            let requesterNameTarget = targets.requesterName();
            let requesterNameValue = requester.name().value;
            requesterNameTarget.innerText = requesterNameValue.toUpperCase();
            
            // ENDEREÇO
            let requesterStreet = requester.street().value;
            let requesterNumber = requester.number().value;
            let requesterCity = requester.city().value;
            let requesterState = requester.state().value;
            let requesterPostalCode = requester.postalCode().value;
            let requesterAddress = 'R: '+ requesterStreet.toUpperCase()+' N: '+requesterNumber.toUpperCase()+' '+requesterCity.toUpperCase()+'/'+requesterState+' CEP: '+requesterPostalCode;
            let requesterAddressTarget = targets.requesterAddress();
            requesterAddressTarget.innerText = requesterAddress;

            // CPF/CNPJ
            let requesterDocument = requester.document().value;
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
            let requiredState = requested.state().value;
            let requiredPostalCode = requested.postalCode().value;
            let requiredAddress = 'R: '+requiredStreet.toUpperCase()+' N: '+requiredNumber+' '+requiredCity.toUpperCase()+'/'+requiredState+' CEP: '+requiredPostalCode;
            let requiredAddressTarget = targets.requiredAddress();
            requiredAddressTarget.innerText = requiredAddress;

            // CPF/CNPJ
            let requiredDocument = requested.document().value;
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
            let causeValue1 = requester.valueOne().value;
            let causeValueTarget1 = targets.firstValueTarget();
            causeValueTarget1.innerText = causeValue1;

            let causeValue2 = requester.valueTwo().value;
            let causeValueTarget2 = targets.secondValueTarget();
            causeValueTarget2.innerText = causeValue2;

            let causeValue3 = requester.valueTree().value;
            let causeValueTarget3 = targets.thirdValueTarget();
            causeValueTarget3.innerText = causeValue3;

            // DATA
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
            let formatedMonth = month < 10 ? '0' + month : month;
            let formatedDay = day < 10 ? '0' + day : day;
            let todayDate = formatedDay+'/'+formatedMonth+'/'+year;
            let today = `Itapoá (SC), ${formatedDay} de ${monthName} de ${year}.`;
            let dateTarget = targets.dateTarget();
            dateTarget.innerText = today;

            let headerDateTarget = getID('headerDateTarget');
            let doc2HeaderDateTarget = getID('doc2HeaderDateTarget');
            headerDateTarget.innerText = todayDate;
            doc2HeaderDateTarget.innerText = todayDate;

            let headerTimeTarget = getID('headerTimeTarget');
            let doc2HeaderTimeTarget = getID('doc2HeaderTimeTarget');
            let correctHours = hours < 10 ? '0' + hours : hours;
            let correctMin = min < 10 ? '0' + min : min;
            let now = correctHours+':'+correctMin;
            headerTimeTarget.innerText = now;
            doc2HeaderTimeTarget.innerText = now;

            // ASSINANTE
            let signerName = requester.name().value;
            let signerDocument = 'CPF/CNPJ: ' +  requester.document().value;
            let signerNameTarget = targets.signerName();
            let signerDocumentTarget = targets.signerDocument();

            signerNameTarget.innerText = signerName.toUpperCase();
            signerDocumentTarget.innerText = signerDocument;

            // TERMO DE ADESÃO
            let termName = requester.name().value;
            let termDoc = requester.document().value;
            let termStreet = requester.street().value;
            let termNumber = requester.number().value;
            let termDistrict = requester.district().value;
            let termCity = requester.city().value;
            let termState = requester.state().value;
            let termCityState = termCity + '/' + termState;
            let termPostalCode = requester.postalCode().value;
            let termPhone = requester.phone().value;
            let termEmail = requester.email().value;

            let termNameTarget = targets.doc2Name();
            let termDocTarget = targets.doc2Document();
            let termStreetTarget = targets.doc2Street();
            let termNumberTarget = targets.doc2Number();
            let termDistrictTarget = targets.doc2District();
            let termCityStateTarget = targets.doc2CityState();
            let termPostalCodeTarget = targets.doc2PostalCode();
            let termPhoneTarget = targets.doc2Phone();
            let termEmailTarget = targets.doc2Email();
            let termDateTarget = targets.doc2Date();
            let termSignerTarget = targets.doc2Signer();

            termNameTarget.innerText = termName.toUpperCase();
            termDocTarget.innerText = termDoc;
            termStreetTarget.innerText = termStreet.toUpperCase();
            termNumberTarget.innerText = termNumber;
            termDistrictTarget.innerText = termDistrict.toUpperCase();
            termCityStateTarget.innerText = termCityState.toUpperCase();
            termPostalCodeTarget.innerText = termPostalCode;
            termPhoneTarget.innerText = termPhone;
            termEmailTarget.innerText = termEmail;
            termDateTarget.innerText = today;
            termSignerTarget.innerText = termName.toUpperCase();
            printBtn.style.display = 'block';

            alert('Seu documento foi gerado com sucesso. Clique em imprimir para realizar o download!');
        }
    }
    
    const printBtn = getID('printBtn');
    const pageMain = getID('pageMain');
    const pageFooter = getID('pageFooter');
    const doc1 = getID('doc1');
    const doc2 = getID('doc2');
    printBtn.onclick = ()=>{
        doc1.style.display = 'flex';
        doc2.style.display = 'flex';
        pageMain.style.display = 'none';
        pageFooter.style.display = 'none';
        print();
    }

    let value1 = requester.valueOne();
    let value2 = requester.valueTwo();
    let value3 = requester.valueTree();
    
    value1.addEventListener("input", ()=>{
        let formated1 = value1.value.replace(/[^\d]+/g,'');
        let formated2 = value2.value.replace(/[^\d]+/g,'');
        if (Number.isNaN(parseInt(formated2)) || parseInt(formated2) == 0){
            value3.value = currency(formated1);
        } else {
            if (Number.isNaN(parseInt(formated1)) || parseInt(formated1) == 0){
                value3.value = currency(formated2);
            } else {
                value3.value = currency(parseInt(value1.value) + parseInt(value2.value))
            }
        }
    });
    value2.addEventListener("input", ()=>{
        let formated1 = value1.value.replace(/[^\d]+/g,'');
        let formated2 = value2.value.replace(/[^\d]+/g,'');
        if (Number.isNaN(parseInt(formated1)) || parseInt(formated1) == 0){
            value3.value = currency(formated2);
        } else {
            if (Number.isNaN(parseInt(formated2)) || parseInt(formated2) == 0){
                value3.value = currency(formated1);
            } else {
                value3.value = currency(parseInt(value1.value) + parseInt(value2.value))
            }
        }
    });
    function currency(props){
        let result = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props);
        return result;
    }
    
};