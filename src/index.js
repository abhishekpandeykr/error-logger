const errorColor = "color:red;font-size:25px";
const successColor = "color:green;font-size:20px;"
const initializeColor = "color:yellow; font-size:45px"

const errorLogger = (...val) => {
    console.error(`%c${JSON.stringify(val)}`, errorColor)
};

const successLogger = (...val) => {
    console.log(`%c${JSON.stringify(val)}`, successColor)
}

const warningLogger = (...val) => {
    console.warn(`%c${JSON.stringify(val)}`, initializeColor)
}
module.exports.errorLogger = errorLogger;
module.exports.successLogger = successLogger;
module.exports.warningLogger = warningLogger;