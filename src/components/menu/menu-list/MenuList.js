import React from 'react'
import MenuSection from '../menu-section/MenuSection'
import { menu } from '../../../constants/constants'

const MenuList = () => {

  return (
    <div className="menu-list">
      {menu.map((section, index) => {
        return <MenuSection key={index} section={section[0]} items={section[1]} index={index} />
      })}
    </div>
  )
}

export default MenuList
