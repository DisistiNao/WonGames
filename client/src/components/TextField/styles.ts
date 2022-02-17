import styled, { css } from 'styled-components'

import { TextFieldProps } from '.'

export const Wrapper = styled.main``

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

const inputWrapperModifiers = {
  leftIcon: () => css`
    flex-direction: row;
  `,
  rightIcon: () => css`
    flex-direction: row-reverse;
  `
}

export const InputWrapper = styled.div<Pick<TextFieldProps, 'iconPosition'>>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    padding: 0 ${theme.spacings.xxsmall};
    border-radius: 0.2rem;
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    ${iconPosition === 'left' && inputWrapperModifiers.leftIcon()}
    ${iconPosition === 'right' && inputWrapperModifiers.rightIcon()}
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.4rem;
    color: ${theme.colors.gray};

    & > svg {
      width: 1000%;
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`
