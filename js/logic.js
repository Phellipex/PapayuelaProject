appController = {

    emptyFieldMessage : 'no se puede hacer el cálculo porque faltan datos, asegúrese de llenar todos los campos con letras o números según sea el caso.',

    clearPlaceholder : function (placeholderId) {
        node = document.getElementById(placeholderId);
        node.innerHTML= '';
        node.removeAttribute('style');
    },
    
    clearFields : function (arrayOfFieldIds) {
        for (elementId of arrayOfFieldIds) {
            document.getElementById(elementId).value = '';
        }
    },

    isEmpty : function (arrayOfFieldIds) {
        for (elementId of arrayOfFieldIds){
            if (document.getElementById(elementId).value == ''){
                    return true;
            }
        }
    },

    displayError : function (placeholderId, errorMessage) {
        if (screen.width < 768) {
            alert('Error: ' + errorMessage);
        } else {
            errorNode = document.getElementById(placeholderId);
            warningNode = document.createElement('div');
            warningNode.setAttribute('class','alert alert-danger');
            warningNode.setAttribute('role','alert');
                
            warningMessageTitle = document.createElement('strong');
            warningMessageTitle.appendChild(document.createTextNode('ERROR: '));
    
            warningMessageContent = document.createTextNode(errorMessage);

            warningNode.appendChild(warningMessageTitle);
            warningNode.appendChild(warningMessageContent);

            errorNode.appendChild(warningNode);
        }
    },
    
    displayMessage : function (placeholderId, messageText) {   

        if (screen.width < 768) {
            alert(messageText);
        } else {
            messageNode = document.getElementById(placeholderId);
            resultNode = document.createElement('div');
            resultNode.setAttribute('class','alert alert-success');
            resultNode.setAttribute('style', 'text-align: center;');
            resultNode.setAttribute('role','alert');
            
            resultMessageContent = document.createTextNode(messageText);
        
            resultNode.appendChild(resultMessageContent);
            
            messageNode.appendChild(resultNode);
        }
    },

    calculatePrice : function (wordcountContainerId, rateContainerId, messagePlaceholderId) {
        this.clearPlaceholder(messagePlaceholderId);
        
        if (this.isEmpty([wordcountContainerId, rateContainerId])) {
            this.displayError(messagePlaceholderId, this.emptyFieldMessage);
        } else {
            words = document.getElementById(wordcountContainerId).value;
            rate = document.getElementById(rateContainerId).value;
            result = 'La traducción valdría ' + (words * rate).toLocaleString() + ' pesos';
            this.displayMessage(messagePlaceholderId,result);
        }
    },

    countWords : function (textContainerId, messagePlaceholderId) {
        this.clearPlaceholder(messagePlaceholderId);

        if (this.isEmpty([textContainerId])) {
            this.displayError(messagePlaceholderId, this.emptyFieldMessage);
        } else {
            text = document.getElementById(textContainerId).value;
            result = 'El segmento analizado tiene ' + text.split(' ').length + ' palabras.';
            this.displayMessage(messagePlaceholderId, result);
        }
    },

    findRemainingWords : function findRemainingWords(quotaValueId, initialWordsId, currentWordsId, messagePlaceholderId) {
        this.clearPlaceholder(messagePlaceholderId);
        
        if (this.isEmpty([quotaValueId, initialWordsId, currentWordsId])) {
            this.displayError(messagePlaceholderId, this.emptyFieldMessage);
        } else {
            dailyQuota = document.getElementById(quotaValueId).value;
            initiallyRemainingWords = document.getElementById(initialWordsId).value;
            currentlyRemainingWords = document.getElementById(currentWordsId).value;

            translatedSoFar = initiallyRemainingWords - currentlyRemainingWords;
            remainingWords = dailyQuota - translatedSoFar;
            if (remainingWords < 0) {
                result = 'Van ' + translatedSoFar + (' palabras traducidas. La cuota era ') + dailyQuota + '. eso significa que se han traducido ' + (translatedSoFar - dailyQuota) + ' palabras de más.';
            } else {
                result= 'Se han traducido ' + translatedSoFar + ' palabras y faltan ' + remainingWords + ' para terminar.';
            }
            this.displayMessage(messagePlaceholderId,result);
        }
    },

    estimateDays : function (volumeContainerId, speedContainerId, messagePlaceholderId) {
        this.clearPlaceholder(messagePlaceholderId);
        
        if (this.isEmpty([volumeContainerId, speedContainerId, messagePlaceholderId])) {
                this.displayError(messagePlaceholderId, this.emptyFieldMessage);
        } else {
                volume = document.getElementById(volumeContainerId).value;
                speed = document.getElementById(speedContainerId).value;
                result = 'El trabajo se tardará aproximadamente unos ' + (volume/speed).toLocaleString() + ' días.';
                this.displayMessage(messagePlaceholderId, result);
        }
    }
} 