export class CheckInputContainSmallLetters {
    constructor() {
        this.validationErrorArray = [];

    }

    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {
        let typeofPropertyValue = typeof (propertyValue);

        var numberOfSmallLetters = 0;
        var smallLettersCounter = function (formInputValue) {
            for (let i = 0; i < formInputValue.length; i++) {
                if (formInputValue[i] === formInputValue[i].toLowerCase() && formInputValue[i] !== formInputValue[i].toUpperCase()) {
                    numberOfSmallLetters++;
                }
            }
        };

        if (typeofPropertyValue === "boolean") {
            if (propertyValue === true) {
                let regex = /[A-Z]/;
                // Regular expression in order to test if all characters are Uppercase
                if (regex.test(formInputValue)) {
                    this.validationErrorArray.push(formInputName + " " + propertyErrorText);
                } else {
                    return true;
                }
            }

            if (propertyValue === false) {
                let regex = /[a-z]/;
                if (regex.test(formInputValue)) {
                    this.validationErrorArray.push(formInputName + " " + propertyErrorText);
                } else {
                    return true;
                }
            }

        } else if (typeofPropertyValue === "number") {

            smallLettersCounter(formInputValue);
            if (propertyValue !== numberOfSmallLetters) {
                this.validationErrorArray.push(formInputName + " " + propertyErrorText);
            } else {
                return true;
            }

        } else if (typeofPropertyValue === "object") {
            let propertyValueMinimum = propertyValue[0];
            let propertyValueMaximum = propertyValue[1];
            let typeofPropertyValueMinimum = typeof (propertyValueMinimum);
            let typeofPropertyValueMaximum = typeof (propertyValueMaximum);


            if (propertyValueMinimum === true && typeofPropertyValueMaximum === "number") {

                smallLettersCounter(formInputValue);
                if (numberOfSmallLetters === 0 || numberOfSmallLetters > propertyValueMaximum) {
                    this.validationErrorArray.push(formInputName + " " + propertyErrorText);
                } else {
                    return true;
                }

            } else if (typeofPropertyValueMinimum === "number" && propertyValueMaximum === true) {
                smallLettersCounter(formInputValue);
                if (numberOfSmallLetters === 0 || numberOfSmallLetters < propertyValueMinimum) {
                    this.validationErrorArray.push(formInputName + " " + propertyErrorText);
                } else {
                    return true;
                }
            } else if (typeofPropertyValueMinimum === "number" && typeofPropertyValueMaximum === "number") {
                smallLettersCounter(formInputValue);
                if (numberOfSmallLetters < propertyValueMinimum || numberOfSmallLetters > propertyValueMaximum) {
                    this.validationErrorArray.push(formInputName + " " + propertyErrorText);
                } else {
                    return true;
                }
            }
        }
    }

}
