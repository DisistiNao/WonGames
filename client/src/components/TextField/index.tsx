import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  disabled?: boolean
  error?: string
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  disabled = false,
  error,
  onInput,
  label,
  labelFor = '',
  initialValue = '',
  icon,
  iconPosition = 'left',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          {...props}
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
        />
      </S.InputWrapper>
      {!!error && <S.Label htmlFor={labelFor}>{error}</S.Label>}
    </S.Wrapper>
  )
}

export default TextField
