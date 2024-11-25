import ReplayIcon from '@mui/icons-material/Replay'
import type { ButtonGroupProps } from '@mui/material'
import { Button, ButtonGroup, styled } from '@mui/material'
import type { ReactNode } from 'react'
import {
  CustomNumberInput,
  CustomNumberInputButtonGroupWrapper,
} from './CustomNumberInput'
import { TextButton } from './TextButton'

type StatInputInput = ButtonGroupProps & {
  name: ReactNode
  children?: ReactNode
  value: number
  placeholder?: string
  defaultValue?: number
  onValueChange: (newValue: number | undefined) => void
  percent?: boolean
  disabled?: boolean
  onReset?: () => void
}
const FlexButtonGroup = styled(ButtonGroup)({
  display: 'flex',
})

export function StatInput({
  name,
  children,
  value,
  placeholder,
  defaultValue = 0,
  onValueChange,
  percent = false,
  disabled = false,
  onReset,
  ...restProps
}: StatInputInput) {
  return (
    <FlexButtonGroup {...restProps}>
      {children}
      <TextButton sx={{ px: 1 }}>{name}</TextButton>
      <CustomNumberInputButtonGroupWrapper
        sx={{ flexBasis: '10em', flexGrow: 1 }}
      >
        <CustomNumberInput
          sx={{ px: 1 }}
          inputProps={{
            sx: { textAlign: 'right' },
          }}
          float={percent}
          placeholder={placeholder}
          value={value}
          onChange={onValueChange}
          disabled={disabled}
          endAdornment={percent ? '%' : undefined}
        />
      </CustomNumberInputButtonGroupWrapper>
      <Button
        sx={{ flexShrink: 2 }}
        size="small"
        color="secondary"
        onClick={() => (onReset ? onReset() : onValueChange(defaultValue))}
        disabled={disabled || value === defaultValue}
      >
        <ReplayIcon />
      </Button>
    </FlexButtonGroup>
  )
}
