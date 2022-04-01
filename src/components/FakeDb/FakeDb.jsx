const addtoDb = (id) => {
    const storedCart = getCart()
    if (id in storedCart) {
        storedCart[id] += 1;
    } else {
        storedCart[id] = 1;
    }
    localStorage.setItem("cart", JSON.stringify(storedCart))
}
const getCart = () => {
    const cart = localStorage.getItem("cart")
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    } else {
        cartObj = {}
    }
    return cartObj;
}

const removeItemFromDb = (id) => {
    const storedCart = getCart()
    if (id in storedCart) {
        delete storedCart[id]
        localStorage.setItem("cart", JSON.stringify(storedCart))
    }
}

export {
    addtoDb, getCart, removeItemFromDb
}