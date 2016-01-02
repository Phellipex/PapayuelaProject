function countWords(textContainerId, errorPlaceholderId) {
        clearPlaceholder(errorPlaceholderId);
        
        if (isEmpty([textContainerId])) {
            displayEmptyFieldError(errorPlaceholderId);
        } else {
            text = document.getElementById(textContainerId).value;
            alert("El segmento tiene " + text.split(" ").length + " palabras.");
        }
}

function findRemainingWords(quotaValueId, initialWordsId, currentWordsId, errorPlaceholderId) {
    clearPlaceholder(errorPlaceholderId);
    
    if (isEmpty([quotaValueId, initialWordsId, currentWordsId])) {
        displayEmptyFieldError(errorPlaceholderId);
    } else {
        dailyQuota = document.getElementById(quotaValueId).value;
        initiallyRemainingWords = document.getElementById(initialWordsId).value;
        currentlyRemainingWords = document.getElementById(currentWordsId).value;
        
        translatedSoFar = initiallyRemainingWords - currentlyRemainingWords;
        remainingWords = dailyQuota - translatedSoFar;
        
        alert("Se han traducido " + translatedSoFar + " palabras y faltan " + remainingWords + " para terminar.");
    }
}

function calculatePrice(wordcountContainerId, rateContainerId, errorPlaceholderId) {
        clearPlaceholder(errorPlaceholderId);
        
        if (isEmpty([wordcountContainerId, rateContainerId])) {
            displayEmptyFieldError(errorPlaceholderId);
        } else {
            words = document.getElementById(wordcountContainerId).value;
            rate = document.getElementById(rateContainerId).value;
            alert("La traducción valdría " + (words * rate).toLocaleString() + " pesos");
        }
}


function estimateDays(volumeContainerId, speedContainerId, errorPlaceholderId) {
        clearPlaceholder(errorPlaceholderId);
        
        if (isEmpty([volumeContainerId, speedContainerId, errorPlaceholderId])) {
                displayEmptyFieldError(errorPlaceholderId);
        } else {
                volume = document.getElementById(volumeContainerId).value;
                speed = document.getElementById(speedContainerId).value;
                alert("El proceso de traducción (solo la traducción) se tardará aproximadamente unos " + (volume/speed).toLocaleString() + " días");
        }
}

function clearFields(arrayOfFieldIds) {
    for (elementId of arrayOfFieldIds) {
        document.getElementById(elementId).value = '';
    }
}

function isEmpty(arrayOfFieldIds) {
    for (elementId of arrayOfFieldIds){
        if (document.getElementById(elementId).value == ''){
            return true;
            break;
        }
    }
}

function displayEmptyFieldError(placeholderId) {
    error_node = document.getElementById(placeholderId);
    warning_node = document.createElement('div');
    warning_node.setAttribute('class','alert alert-danger alert-dismissible');
    warning_node.setAttribute('role','alert');
    
    warning_message_title = document.createElement('strong');
    warning_message_title.appendChild(document.createTextNode('ERROR: '));
    
    warning_message_content = document.createTextNode('no se puede hacer el cálculo porque faltan datos, asegúrese de llenar todos los campos con letras o números según sea el caso.');

    warning_node.appendChild(warning_message_title);
    warning_node.appendChild(warning_message_content);
    
    error_node.appendChild(warning_node);
}

function clearPlaceholder(placeholderId) {
    node = document.getElementById(placeholderId);
    node.innerHTML= '';
    node.removeAttribute('style');
}