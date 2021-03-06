import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required('This field is required.'),
  lastName: Yup.string().required('This field is required.'),
  email: Yup.string().email('Please enter valid email.').required('This field is required.'),
  password: Yup.string().min(8, 'Password too short.').test('isValidPass', 'Password must contain at least 1 Uppercase letter, 1 Lowercase letter, 1 number, and 1 symbol (!@#%&)', (value) => {
    if (value) {
      const hasUpperCase = /[A-Z]/.test(value)
      const hasLowerCase = /[a-z]/.test(value)
      const hasNumber = /[0-9]/.test(value)
      const hasSymbole = /[!@#%&]/.test(value)
      let validConditions = 0
      const numberOfMustBeValidConditions = 3
      const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole]
      conditions.forEach((condition) =>
        condition ? validConditions++ : null
      )
      if (validConditions >= numberOfMustBeValidConditions) {
        return true
      }
      return false
    }
    return false
  })
    .required('This field is required.'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match.').required('This field is required.')
})

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Please enter valid email.').required('This field is required.'),
  password: Yup.string().required('This field is required.')
})