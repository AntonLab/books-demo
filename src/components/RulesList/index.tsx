import { type FC, memo } from 'react'

import classes from './RulesList.module.scss'

const PASSWORD_RULES = [
  'Password must include uppercase letters',
  'Password must include lowercase letters',
  'Password must include numbers',
  'Password must include one of symbols: @ $ ! % * ? &',
  'Password length must be between 8 and 15 characters'
]

const RulesList: FC = () => (
  <ul className={classes.validationMessages}>
    {PASSWORD_RULES.map((text = '', index = 0) => (
      <li key={`rule-${index}`}>{text}</li>
    ))}
  </ul>
)

export default memo(RulesList)
