import React from "react";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import data from '../data.json';


export default function Home() {

  const [menuVisibility, setMenuVisibility] = React.useState(false);
  const [cartVisibility, setCartVisibility] = React.useState(false);
  const [lightboxVisibility, setLightboxVisibility] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(1);
  const [itemAmount, setItemAmount] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  const mainImagePath = `url(/images/${data.images[currentImage - 1]})`;

  function addItemsToCart() {
    const total = itemAmount + cartItems;
    if (total >= 10) {
      setCartItems(10);
    } else {
      setCartItems(total)
    }
    setItemAmount(0);
  }

  function nextImage() {
    const number = currentImage + 1;
    if (number <= 4) {
      setCurrentImage(number);
    }
  }

  function previousImage() {
    const number = currentImage - 1;
    if (number >= 1) {
      setCurrentImage(number);
    }
  }

  function increaseItemAmount() {
    if (itemAmount < 10) setItemAmount(itemAmount + 1);
  }

  function decreaseItemAmount() {
    if (itemAmount > 0) setItemAmount(itemAmount - 1);
  }

  const store = {
    menuVisibility: menuVisibility, 
    setMenuVisibility: setMenuVisibility, 
    cartVisibility: cartVisibility,
    setCartVisibility: setCartVisibility,
    lightboxVisibility: lightboxVisibility,
    setLightboxVisibility: setLightboxVisibility,
    currentImage: currentImage,
    setCurrentImage: setCurrentImage,
    itemAmount: itemAmount,
    setItemAmount: setItemAmount,
    cartItems: cartItems,
    setCartItems: setCartItems,
    mainImagePath: mainImagePath,
    addItemsToCart: addItemsToCart,
    nextImage: nextImage,
    previousImage: previousImage,
    increaseItemAmount: increaseItemAmount,
    decreaseItemAmount: decreaseItemAmount,
    thumbnails: data.thumbnails
  }


  return (
    <div className="main-container">
      <Header store={store}/>
      <Main store={store} />
    </div>
  )
}
