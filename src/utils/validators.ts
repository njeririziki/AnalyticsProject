export const validatePhoneNo = (input:string)=> (Number(input) ? new RegExp(/^\d{9}$/).test(input) : false)

export const validateFullPhoneNo = (input:string) => (Number(input) ? new RegExp(/^\d{12}$/).test(input) : false)

export const validatePassword = (input:string)=> new RegExp(/^[a-zA-Z0-9]{8,}$/).test(input)

export const validateEmail = (input:string) => new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/).test(input)


export const validateConfirmPassword = (
    confirmpass: string,
    pass:string
  ): {
    validateStatus: any;
    errorMsg: string | null;
  } => {
    if (confirmpass === pass) {
      return {
        validateStatus: 'success',
        errorMsg: null,
      };
    }
    return {
      validateStatus: 'error',
      errorMsg: ' password does not match',
    };
  };