interface FormValues {
  email?: string;
  password?: string;
}

interface Errors {
  email?: string;
  password?: string;
}

export default function Login_validate(values: FormValues): Errors {
  const errors: Errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email || '')) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6 || values.password.length > 20) {
    errors.password = 'Must be greater than 6 and less than 20 characters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid password';
  }

  return errors;
}


interface FormValues_signup {
  name?: string;
  email?: string;
  password?: string;
  cpassword?: string;
}

interface Errors_signup {
  name?: string;
  email?: string;
  password?: string;
  cpassword?: string;
}

export function signup_validate(values: FormValues_signup): Errors_signup {
  const errors: Errors_signup = {
  };

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.includes(" ")) {
    errors.name = 'Invalid name';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email || '')) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6 || values.password.length > 20) {
    errors.password = 'Must be greater than 6 and less than 20 characters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid password';
  }

  if (!values.cpassword) {
    errors.cpassword = 'Required';  
  } else if (values.password !== values.cpassword) {
    errors.cpassword = 'Password not match..!';
  }else if(values.cpassword.includes(" ")){
    errors.cpassword = 'Invalid confirmation password';
  }

  return errors;
}
