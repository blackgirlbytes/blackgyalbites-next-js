import React from "react"
import MenuButton from "./MenuButton"

const MenuButtons = () => {
    return (
        <section className="pt-12">
            <MenuButton url="/caribbean-menu-next-js/menu-pdf-food.pdf" menu_type="Food" />
            <MenuButton url="/caribbean-menu-next-js/menu-pdf-food.pdf" menu_type="Drinks" />
            <MenuButton url="/blackgyalbites-next-js/menu-pdf-food.pdf" menu_type="Catering" />
        </section>

    )
}

export default MenuButtons
