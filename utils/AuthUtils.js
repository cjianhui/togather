// Email validation regex based on W3School resource
// https://www.w3resource.com/javascript/form/email-validation.php
export const isValidEmail = (email) => {
  if (email === null || email === undefined) return false

  return /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

// Check if provided password is not empty
export const isValidPassword = (password) => {
  if (password === null || password === undefined) return false

  return password.trim().length > 0
}
