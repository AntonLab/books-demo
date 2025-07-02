import { type Rule } from 'rc-field-form/lib/interface'

export const VALIDATE_MESSAGES = {
  required: '${label} is required',
  string: {
    max: '${label} must be at most ${max} characters',
    min: '${label} must be at least ${min} characters',
    range: '${label} must be between ${min}-${max} characters'
  },
  types: {
    email: '${label} is not a valid ${type}'
  }
}

export const SHORT_STRING_REQUIRED_RULES: Rule = {
  max: 50,
  required: true,
  type: 'string'
}
