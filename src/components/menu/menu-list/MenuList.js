import React from 'react'
import MenuSection from '../menu-section/MenuSection'
import { sushi, sashimi, appetizer, drinks } from '../../../constants/constants'

const MenuList = () => {
  const menuSection = [["Appetizer", appetizer],
  ["Sushi", sushi],
  ["Sashimi", sashimi],
  ["Drinks", drinks]];

  return (
    <div className="menu-list">
      {menuSection.map((section, index) => {
        return <MenuSection key={index} section={section[0]} items={section[1]} index={index} />
      })}
    </div>
  )
}

export default MenuList
