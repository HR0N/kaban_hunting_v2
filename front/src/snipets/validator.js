import validator from "validator/es";

class ValidatorClass {
    isEmail = val => validator.isEmail(val);
    isLength = (val, min, max) => validator.isLength(val, {min, max});
    isPasEquals = (v1, v2) => validator.equals(v1, v2);
    isEmpty = val => validator.isEmpty(val);
    isStrongPassword = ()=>{};
    sanitizer = (val)=>{};

    isEmailMsg = val => this.isEmail(val) ? '' : "Email invalid. Like you!";
    isLengthMsg = (val, min, max) => this.isLength(val, min, max) ? '' : `Password diapason: ${min}-${max} symbols.`;
    isPasEqualsMsg = (v1, v2) => this.isEquals(v1, v2) ? '' : "Passwords don't match.";
}

export default ValidatorClass;