import styled, { css } from 'styled-components'

import { lighten } from 'polished'

export const Forgot = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.black};
    text-decoration: none;
    text-align: right;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`
