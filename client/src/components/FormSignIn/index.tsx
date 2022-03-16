import { Email } from '@styled-icons/material-outlined/Email'
import { Lock } from '@styled-icons/material-outlined/Lock'

import TextField from 'components/TextField'
import Button from 'components/Button'

import * as S from './styles'
import Link from 'next/link'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
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
      <S.Forgot href="#">Forgot your password?</S.Forgot>
      <Button fullWidth>Sign In</Button>
      <S.FormLink>
        Don&#39;t have an account?
        <Link href="/sign-up">
          <a>Sign Up</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
