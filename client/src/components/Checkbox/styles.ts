import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

export const Wrapper = styled.main``

export const Label = styled.label<Pick<CheckboxProps, 'labelColors'>>`
  ${({ theme, labelColors }) => css`
    color: ${theme.colors[labelColors!]};
  `}
`
