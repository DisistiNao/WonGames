import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    padding: ${theme.spacings.small};
    background: ${theme.colors.white};

    ${media.greaterThan('medium')`
      ${RibbonStyles.Wrapper} {
        right: ${theme.spacings.small};
        top: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};
        &:before {
          border: none;
        }
      }
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 2rem;

    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
      line-height: 2.8rem;

      width: 60%;
    `}
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    > button {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;

      > button {
        margin-bottom: 0;
      }
    `}
  `}
`
