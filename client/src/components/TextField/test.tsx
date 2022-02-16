import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import TextField from '.'

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

  // Changes its value when typing
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

  it('should be accessible with tab', () => {
    renderWithTheme(
      <TextField label="Text Field Label" labelFor="textField" id="textField" />
    )

    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(screen.getByLabelText(/text field label/i)).toHaveFocus()
  })
})
