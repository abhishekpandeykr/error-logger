const errorColor = "color:red;font-size:25px";
const successColor = "color:green;font-size:20px;"
const initializeColor = "color:yellow; font-size:45px"

const errorLogger = (val) => {
    console.error(`%c${val}`, errorColor)
};

const successLogger = (val) => {
    console.log(`%c${val}`, successColor)
}

const warningLogger = (val) => {
    console.warn(`%c${val}`, initializeColor)
}
module.exports.errorLogger = errorLogger;
module.exports.successLogger = successLogger;
module.exports.warningLogger = warningLogger;