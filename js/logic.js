var appController = {

    emptyFieldMessage : 'no se puede hacer el cálculo porque faltan datos, asegúrese de llenar todos los campos con letras o números según sea el caso.',

    clearPlaceholder : function (placeholderId) {
        var node = document.getElementById(placeholderId);
        node.innerHTML= '';
        node.removeAttribute('style');
    },
    
    clearFields : function (arrayOfFieldIds) {
        for (var elementId of arrayOfFieldIds) {
            document.getElementById(elementId).value = '';
        }
    },

    isEmpty : function (arrayOfFieldIds) {
        for (var elementId of arrayOfFieldIds){
            if (document.getElementById(elementId).value == ''){
                    return true;
            }
        }
    },

    displayError : function (placeholderId, errorMessage) {
        if (screen.width < 768) {
            alert('Error: ' + errorMessage);
        } else {
            var errorNode = document.getElementById(placeholderId);
            var warningNode = document.createElement('div');
            warningNode.setAttribute('class','alert alert-danger');
            warningNode.setAttribute('role','alert');
                
            var warningMessageTitle = document.createElement('strong');
            warningMessageTitle.appendChild(document.createTextNode('ERROR: '));
    
            var warningMessageContent = document.createTextNode(errorMessage);

            warningNode.appendChild(warningMessageTitle);
            warningNode.appendChild(warningMessageContent);

            errorNode.appendChild(warningNode);
        }
    },
    
    displayMessage : function (placeholderId, messageText) {   

        if (screen.width < 768) {
            alert(messageText);
        } else {
            var messageNode = document.getElementById(placeholderId);
            var resultNode = document.createElement('div');
            resultNode.setAttribute('class','alert alert-success');
            resultNode.setAttribute('style', 'text-align: center;');
            resultNode.setAttribute('role','alert');
            
            var resultMessageContent = document.createTextNode(messageText);
        
            resultNode.appendChild(resultMessageContent);
            
            messageNode.appendChild(resultNode);
        }
    },

    calculatePrice : function (wordcountContainerId, rateContainerId, messagePlaceholderId) {
        this.clearPlaceholder(messagePlaceholderId);
        
        if (this.isEmpty([wordcountContainerId, rateContainerId])) {
            this.displayError(messagePlaceholderId, this.emptyFieldMessage);
        } else {
            var words = document.getElementById(wordcountContainerId).value;
            var rate = document.getElementById(rateContainerId).value;
            var result = 'La traducción valdría ' + (words * rate).toLocaleString() + ' pesos';
            this.displayMessage(messagePlaceholderId, result);
        }
    },

    countWords : function (textContainerId, messagePlaceholderId) {
        this.clearPlaceholder(messagePlaceholderId);

        if (this.isEmpty([textContainerId])) {
            this.displayError(messagePlaceholderId, this.emptyFieldMessage);
        } else {
            var text = document.getElementById(textContainerId).value;
            var result = 'El segmento analizado tiene ' + text.split(' ').length + ' palabras.';
            this.displayMessage(messagePlaceholderId, result);
        }
    },

    findRemainingWords : function findRemainingWords(quotaValueId, initialWordsId, currentWordsId, messagePlaceholderId) {
        this.clearPlaceholder(messagePlaceholderId);
        
        if (this.isEmpty([quotaValueId, initialWordsId, currentWordsId])) {
            this.displayError(messagePlaceholderId, this.emptyFieldMessage);
        } else {
            var dailyQuota = document.getElementById(quotaValueId).value;
            var initiallyRemainingWords = document.getElementById(initialWordsId).value;
            var currentlyRemainingWords = document.getElementById(currentWordsId).value;

            var translatedSoFar = initiallyRemainingWords - currentlyRemainingWords;
            var remainingWords = dailyQuota - translatedSoFar;
            if (remainingWords < 0) {
                var result = 'Van ' + translatedSoFar + (' palabras traducidas. La cuota era ') + dailyQuota + '. eso significa que se han traducido ' + (translatedSoFar - dailyQuota) + ' palabras de más.';
            } else {
                var result= 'Se han traducido ' + translatedSoFar + ' palabras y faltan ' + remainingWords + ' para terminar.';
            }
            this.displayMessage(messagePlaceholderId,result);
        }
    },

    estimateDays : function (volumeContainerId, speedContainerId, messagePlaceholderId) {
        this.clearPlaceholder(messagePlaceholderId);
        
        if (this.isEmpty([volumeContainerId, speedContainerId, messagePlaceholderId])) {
                this.displayError(messagePlaceholderId, this.emptyFieldMessage);
        } else {
                var volume = document.getElementById(volumeContainerId).value;
                var speed = document.getElementById(speedContainerId).value;
                var result = 'El trabajo se tardará aproximadamente unos ' + (volume/speed).toLocaleString() + ' días.';
                this.displayMessage(messagePlaceholderId, result);
        }
    }
} 