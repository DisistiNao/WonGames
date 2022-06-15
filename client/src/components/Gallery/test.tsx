import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mock from './mock'

import Gallery from '.'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mock[0].src)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mock[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    // Selecionar o nosso modal
    const modal = screen.getByLabelText('modal')

    // Verificar se a modal tá escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    // clicar na modal e verificar se ela abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/ })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    // Selecionar o nosso modal
    const modal = screen.getByLabelText('modal')

    // clicar na modal e verificar se ela abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/ })
    )

    // clicar para fechar o modal
    fireEvent.click(screen.getByRole('button', { name: /close modal/ }))
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  // // clicar no botão de fechar o menu e verificar se ele fechou
  // fireEvent.click(screen.getByLabelText(/close menu/i))
  // expect(modal.getAttribute('aria-hidden')).toBe('true')
  // expect(modal).toHaveStyle({ opacity: 0 })
})
