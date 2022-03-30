import { Email } from '@styled-icons/material-outlined/Email'
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'
import { Lock } from '@styled-icons/material-outlined/Lock'

import TextField from 'components/TextField'

import * as S from './styles'
import Button from 'components/Button'
import Link from 'next/link'

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="name"
        placeholder="Full name"
        type="email"
        icon={<UserCircle />}
      />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <TextField
        name="confirm-password"
        placeholder="Confirm your Password"
        type="password"
        icon={<Lock />}
      />
      <Button fullWidth>Sign Up</Button>
      <S.FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignUp
