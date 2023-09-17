import React from 'react'
import "../components/styles/SpecialsCard.css"
import Dessert1 from "../components/assets/salad.jpg"
import Dessert2 from "../components/assets/bruschetta1.jpg"
import Dessert3 from "../components/assets/creme.jpg"
import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const SpecialsCard = () => {
    const specialMenus = [
        {
            image: Dessert1,
            title: "Greek Salad",
            price: "$14.99",
            description: "Indulge in the renowned Greek salad crafted with crisp lettuce, vibrant peppers, succulent olives, and our Chicago-style feta cheese. Enhanced with crunchy garlic and rosemary croutons.",
            order: "Order for Delivery"
            },
            {
            image: Dessert2,
            title: "Bruschetta",
            price: "$6.99",
            description: "Savor our exquisite Bruschetta, featuring grilled bread generously coated with garlic, sprinkled with salt, and drizzled with premium olive oil. An ideal choice for a memorable evening meal.",
            order: "Order for Delivery"
            },
            {
            image: Dessert3,
            title: "Lemon Dessert",
            price: "$7.50",
            description: "Savor the Lemon Dessert, a delightful treat inspired by Grandma's cherished recipe. Each ingredient is carefully sourced to ensure the most authentic and delightful flavor.",
            order: "Order for Delivery"
        }
    ]

    const specialMenusItems = specialMenus.map(menu => {
            const image = menu.image;
            const title = menu.title;
            const price = menu.price;
            const description = menu.description;
            const order = menu.order;
            
            return (
                <div>
                    <div className="special-card-container">
                        <div className="image-container">
                                <img src={image} alt="Special dessert" />
                            </div>
                        <div className="special-card-text">
                            <div className="special-card-title">
                                <h3>{title}</h3>
                                <h3 className="price-tag">{price}</h3>
                            </div>
                            <p>{description}</p>
                            <NavLink to="#">
                                <h4>
                                    {order}
                                    { <MdDeliveryDining size={30} style={{ color: "#333333", marginLeft: "10px",}} /> }
                                </h4>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
    })


  return (
    <div>
      <div className="special-card">
        {specialMenusItems}
      </div>
    </div>
  )
}

export default SpecialsCard
