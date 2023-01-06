import React from 'react'

export const useInput = (initialValue: string) => {
  const [value, setValue] = React.useState<string>(initialValue)

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value)
  }

  return [{ value, onChange }, () => setValue(initialValue)] as const
}
