emptyFieldMessage = 'no se puede hacer el cálculo porque faltan datos, asegúrese de llenar todos los campos con letras o números según sea el caso.';

function countWords(textContainerId, messagePlaceholderId) {
        clearPlaceholder(messagePlaceholderId);
        
        if (isEmpty([textContainerId])) {
            displayError(messagePlaceholderId, emptyFieldMessage);
        } else {
            text = document.getElementById(textContainerId).value;
            displayMessage(messagePlaceholderId,'El segmento analizado tiene ' + text.split(' ').length + ' palabras.');
        }
}

function findRemainingWords(quotaValueId, initialWordsId, currentWordsId, messagePlaceholderId) {
    clearPlaceholder(messagePlaceholderId);
    
    if (isEmpty([quotaValueId, initialWordsId, currentWordsId])) {
        displayError(messagePlaceholderId, emptyFieldMessage);
    } else {
        dailyQuota = document.getElementById(quotaValueId).value;
        initiallyRemainingWords = document.getElementById(initialWordsId).value;
        currentlyRemainingWords = document.getElementById(currentWordsId).value;
        
        translatedSoFar = initiallyRemainingWords - currentlyRemainingWords;
        remainingWords = dailyQuota - translatedSoFar;
        displayMessage(messagePlaceholderId,'Se han traducido ' + translatedSoFar + ' palabras y faltan ' + remainingWords + ' para terminar.')
    }
}

function calculatePrice(wordcountContainerId, rateContainerId, messagePlaceholderId) {
        clearPlaceholder(messagePlaceholderId);
        
        if (isEmpty([wordcountContainerId, rateContainerId])) {
            displayError(messagePlaceholderId, emptyFieldMessage);
        } else {
            words = document.getElementById(wordcountContainerId).value;
            rate = document.getElementById(rateContainerId).value;
            displayMessage(messagePlaceholderId,'La traducción valdría ' + (words * rate).toLocaleString() + ' pesos');
        }
}


function estimateDays(volumeContainerId, speedContainerId, messagePlaceholderId) {
        clearPlaceholder(messagePlaceholderId);
        
        if (isEmpty([volumeContainerId, speedContainerId, messagePlaceholderId])) {
                displayError(messagePlaceholderId, emptyFieldMessage);
        } else {
                volume = document.getElementById(volumeContainerId).value;
                speed = document.getElementById(speedContainerId).value;
                displayMessage(messagePlaceholderId,'El trabajo se tardará aproximadamente unos ' + (volume/speed).toLocaleString() + ' días');
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

function displayError(placeholderId, errorMessage) {
    errorNode = document.getElementById(placeholderId);
    warningNode = document.createElement('div');
    warningNode.setAttribute('class','alert alert-danger alert-dismissible');
    warningNode.setAttribute('role','alert');
    
    warningMessageTitle = document.createElement('strong');
    warningMessageTitle.appendChild(document.createTextNode('ERROR: '));
    
    warningMessageContent = document.createTextNode(errorMessage);

    warningNode.appendChild(warningMessageTitle);
    warningNode.appendChild(warningMessageContent);
    
    errorNode.appendChild(warningNode);
}

function displayMessage(placeholderId, messageText) {
    messageNode = document.getElementById(placeholderId);
    resultNode = document.createElement('div');
    resultNode.setAttribute('class','alert alert-success alert-dismissible');
    resultNode.setAttribute('style', 'text-align: center;');
    resultNode.setAttribute('role','alert');
    
    resultMessageContent = document.createTextNode(messageText);

    resultNode.appendChild(resultMessageContent);
    
    messageNode.appendChild(resultNode);
}

function clearPlaceholder(placeholderId) {
    node = document.getElementById(placeholderId);
    node.innerHTML= '';
    node.removeAttribute('style');
}
