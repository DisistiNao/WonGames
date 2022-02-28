import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined/Email'

import TextField from '.'
import { debug } from 'console'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(
      <TextField label="Text Field Label" labelFor="textField" id="textField" />
    )

    expect(screen.getByText(/text field label/i)).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByRole('label')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="Text Label" />)

    expect(screen.getByPlaceholderText(/text label/i)).toBeInTheDocument()
  })

  it('should render an icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render an icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('changes its value when typing', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="Text Field Label"
        labelFor="textField"
        id="textField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is a new text'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Does not cheges its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is a new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('should render with error', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid="icon" />}
        error="Error"
      />
    )

    expect(screen.getByLabelText('Error')).toBeInTheDocument()
  })

  it('should be accessible with tab', () => {
    renderWithTheme(
      <TextField label="Text Field Label" labelFor="textField" id="textField" />
    )

    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(screen.getByLabelText(/text field label/i)).toHaveFocus()
  })

  it('Is not accessible by tab when disabled', async () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})
