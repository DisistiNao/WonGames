import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void
  label?: string
  labelFor?: string
  labelColors?: 'black' | 'white'
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  onCheck,
  label,
  labelFor = '',
  labelColors = 'white',
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input
        type="radio"
        value={value}
        id={labelFor}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColors={labelColors}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio
