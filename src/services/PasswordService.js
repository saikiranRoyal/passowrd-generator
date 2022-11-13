export class PasswordService{
    static getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
    }
    static getRandomUpperCase(){
        return String.fromCharCode(Math.floor(Math.random()*26)+65);
        }
        static getRandomNumbers(){
            return String.fromCharCode(Math.floor(Math.random()*10)+48);
            }
    static getRandomSymbols(){
        let symbolstr ="~!@#$%^&*()_+{}|:?><:"
        return symbolstr[Math.floor(Math.random() * symbolstr.length)];
    }
    static getPasswordObj(state){
        let passwordObj={};
    for (let key of Object.keys(state)){
    if (typeof state[key] === 'boolean' && state[key]){
            passwordObj={
                ...passwordObj,
                   [key]:state[key]
            }
    }
    }
    return passwordObj;

    }
    static generatePassword(passwordObj, passwordlength){
        let thepassword =""
        for(let i=0; i<Number(passwordlength); i+=Object.keys(passwordObj).length){
            if (passwordObj.lowercase)  thepassword += `${this.getRandomLowerCase()}`;
            if (passwordObj.uppercase)  thepassword += `${this.getRandomUpperCase()}`;
            if (passwordObj.symbols)  thepassword += `${this.getRandomSymbols()}`;
            if (passwordObj.number)  thepassword += `${this.getRandomNumbers()}`;
        }
        return thepassword.substring(0,Number(passwordlength));
    
}
}