import type { FC } from 'react'
import clsx from 'clsx'
import { styles } from '~/constants'

export const LabName: FC<{ name: string; name_en: string }> = ({
  name,
  name_en,
}) => (
  <>
    <div className={clsx(styles.h1, 'mb-4')}>{name}</div>

    <div className={clsx(styles.h1, 'h1 mb-16')}>{name_en}</div>
  </>
)
