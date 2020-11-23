import React from 'react'
import styles from './index.module.less'
import { Switch, Link } from 'react-router-dom'
import { NAV_MENU } from '@/constants'
import classnames from 'classnames'

interface NavMenuProps {
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

const NavMenu = (props: NavMenuProps) => (
  <div className={styles.nav_wrap}>
    {NAV_MENU.map((item) => {
      return (
        <Link key={item.name} to={item.link}>
          <div
            className={classnames({
              [styles.nav_item]: true,
              [styles.nav_item_selected]: props.selected === item.link
            })}
            onClick={() => {
              props.setSelected(item.link)
            }}
          >
            {item.name}
          </div>
        </Link>
      )
    })}
  </div>
)

export default NavMenu
