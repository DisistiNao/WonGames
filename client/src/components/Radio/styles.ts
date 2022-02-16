import styled, { css } from 'styled-components'
import { RadioProps } from '.'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 50%;
    outline: none;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &::after {
      background: ${theme.colors.primary};
      content: '';
      position: absolute;

      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      transition: opacity ${theme.transition.fast};
      opacity: 0;
    }

    &:checked {
      border-color: ${theme.colors.primary};
      position: relative;

      &::after {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<RadioProps, 'labelColors'>>`
  ${({ theme, labelColors }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColors!]};
    line-height: 1.8rem;
  `}
`
