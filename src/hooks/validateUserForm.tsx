import type { UserFormData, FormErrors } from "../types/User";

const validateUserForm = (form: UserFormData): FormErrors => {
  const nameRegex = /^[A-Za-z]{1,20}$/;
  const ageRegex = /^[1-9]\d*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errors: FormErrors = {
    f_name: "",
    l_name: "",
    gender: "",
    age: "",
    role: "",
    email: "",
  };

  if (!nameRegex.test(form.f_name)) {
    errors.f_name = "Only letters, no symbols or numbers";
  }

  if (!nameRegex.test(form.l_name)) {
    errors.l_name = "Only letters, no symbols or numbers";
  }

  if (!form.gender) {
    errors.gender = "Gender is required";
  }

  if (!ageRegex.test(form.age)) {
    errors.age = "Age must be a number bigger than 0";
  }

  if (!form.role.trim()) {
    errors.role = "Role is required";
  }

  if (!emailRegex.test(form.email)) {
    errors.email = "Invalid email format";
  }

  return errors;
};

export default validateUserForm;
