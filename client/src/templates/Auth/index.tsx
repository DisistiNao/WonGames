import Heading from 'components/Heading'
import Logo from 'components/Logo'
import TextField from 'components/TextField'

import { Email } from '@styled-icons/material-outlined/Email'

import * as S from './styles'
import Button from 'components/Button'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Logo />
        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform.
          </S.Subtitle>
        </div>
        <S.Footer>Won Games 2020 © All rights reserved</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Logo color="black" size="large" id="content" />
        <Heading color="black" lineLeft lineColor="secondary">
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
      {/* <TextField id="Email" placeholder="Email" icon={<Email />} />
      <TextField
        id="Password"
        placeholder="Password"
        type="password"
        icon={<Email />}
      />
      <S.Forgot>Forgot your password?</S.Forgot>
      <Button fullWidth>Sign In</Button> */}
    </S.Content>
  </S.Wrapper>
)

export default Auth
