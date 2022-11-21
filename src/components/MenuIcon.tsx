import React from 'react'
import { NavLink } from 'react-router-dom'

interface IMenuIconProps {
    link: string
    icon: string
    quantity?: string
    hideOnMobile?: any
    hideOnTablet?: any
}

const MenuIcon: React.FC<IMenuIconProps> = ({link, icon, quantity, hideOnMobile, hideOnTablet }) => {

  return (
    <NavLink className={`menu-icon ${hideOnMobile ? "d-none d-md-flex" : ""} ${hideOnTablet ? "d-none d-md-flex" : ""}`} to={link} end>
        <span className="position-absolute top-10 translate-middle badge rounded-pill bg-theme">{quantity}</span>
        <i className={icon}></i>
    </NavLink>
    )
}

export default MenuIcon