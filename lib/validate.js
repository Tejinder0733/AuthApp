export default function login_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validation for password

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than and less then 20 character long";
  } else if (values.password.inlcudes("")) {
    errors.password = "Invalid Password";
  }

  return errors;
}

export function registerValidate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.inlcudes(" ")) {
    errors.username = "Invalid Username";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validation for password

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than and less then 20 character long";
  } else if (values.password.inlcudes("")) {
    errors.password = "Invalid Password";
  }

  //validate confirm password
  if (!values.cpassword) {
    errors.cpassword = "Reqiuired";
  } else if (values.password != values.cpassword) {
    errors.cpassword = "Password Not Match..!";
  } else if (values.cpassword.inlcudes(" ")) {
    errors.cpassword = "Invalid Confirm Password";
  }

  return errors;
}
