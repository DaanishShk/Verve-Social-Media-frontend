

function passwordChecks(password) {

    const obj = {pass: false, message: ""}

    if(!/[A-Z]/.test(password)) {
        obj.message = "Missing uppercase character"
    } else if(!/\W/.test(password)) {
        obj.message = "Missing special character"
    } else {
        obj.pass = true;
    }
    
    return obj;
}

export default passwordChecks
