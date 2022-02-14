import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColors?: 'black' | 'white'
}

const Checkbox = ({
  label,
  labelFor = '',
  labelColors = 'white'
}: CheckboxProps) => (
  <S.Wrapper>
    <S.Input id={labelFor} type="checkbox" />
    {!!label && (
      <S.Label htmlFor={labelFor} labelColors={labelColors}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
)

export default Checkbox
