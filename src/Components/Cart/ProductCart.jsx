import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { add2CartAction, updateCartAction } from "../../Redux/products/actions";


function ProductCart() {
    const dispatch = useDispatch();
    var data = [
        {
            img: "https://www.ikea.com/in/en/images/products/smycka-artificial-flower-peony-pink__0903043_pe685421_s5.jpg?f=xxs",
            title: "SMYCKA",
            desc: "Artificial flower, 30 cm (11 ¾ )",
            cprice: "Rs. 99",
            price: "Rs. 69",
            vprice: "Price valid Mar 11 - Mar 26 or while supply lasts",
        },
        {
            img: "https://www.ikea.com/in/en/images/products/besta-tv-bench-white-sindvik-lappviken-mejarp-light-grey-beige__0843389_pe535717_s5.jpg?f=xxs",
            title: "BESTÅ",
            desc: "TV bench, 180x42x48 cm (70 7/8x16 1/2x18 7/8 )",
            cprice: "Rs. 26999",
            price: "Rs. 22999",
            vprice: "Price valid Mar 11 - Mar 26 or while supply lasts",
        },
        {
            img: "https://www.ikea.com/in/en/images/products/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-stubbarp-black-brown-clear-glass__0750781_pe746832_s5.jpg?f=xxs",
            title: "BESTÅ",
            desc: "TV storage combination/glass doors, 240x42x129 cm (94 1/2x16 1/2x50 3/4 )",
            cprice: "Rs. 25999",
            price: "Rs. 23999",
            vprice: "Price valid Mar 11 - Mar 26 or while supply lasts",
        },
        {
            img: "https://www.ikea.com/in/en/images/products/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-stubbarp-black-brown-clear-glass__0750781_pe746832_s5.jpg?f=xxs",
            title: "BESTÅ",
            desc: "Storage combination with drawers, 180x42x74 cm (70 7/8x16 1/2x29 1/8 )",
            cprice: "Rs. 24999",
            price: "Rs. 21999",
            vprice: "Price valid Mar 11 - Mar 26 or while supply lasts",
        },
    ]
    let cart = useSelector((state) => {
        return state.cart;
    })
    console.log("cart", cart);


    let [subTotal, setSubTotal] = useState(0);
    let [cartState, setCartState] = useState(cart);
    useEffect(() => {
        const xTotal = cartState.reduce((total, item) => {
            const itemTotal = item.price * item.quantity;
            return total + itemTotal;
        }, 0);
        dispatch(updateCartAction(cartState))
        setSubTotal(xTotal)
    }, [cartState])


    console.log(subTotal)
    function handleEvent(quantity, price, id) {

        setCartState(prevState => (prevState.map(el => (el.id === id ? { ...el, quantity: parseInt(quantity, 10) } : el))))





    }

    return (
        <Box>

            <div>
                <div style={{
                    display: "flex",
                    // backgroundColor:"green",
                    height: "600px",
                    width: "80%",
                    margin: "auto",
                }}>

                    <div className="left-div" style={{
                        textAlign: "left",
                        // boxShadow : "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                        width: "100%"
                    }}>
                        <h1>Shopping bag</h1>
                        <p>Your postal code <a href="">560001</a></p>
                        <div >
                            {cart.map((ele) => {

                                return (<Box>
                                    <div id="products" style={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        padding: "3%",
                                        alignItems: "center",
                                    }}>
                                        <img src={ele.img} alt="" style={{
                                            width: "20%",
                                        }} />
                                        <div style={{
                                            textAlign: "left",
                                        }}>
                                            <h3>{ele.brand}</h3>
                                            <p>{ele.title}</p>
                                            <select name="qty" id="qty" placeholder="quantity" onChange={(event) => handleEvent(event.target.value, ele.price, ele.id)}>
                                                <option value="1" >1</option>
                                                <option value="2" >2</option>
                                                <option value="3" >3</option>
                                                <option value="4" >4</option>
                                                <option value="5" >5</option>
                                            </select>
                                        </div>
                                        <h3>Rs.{ele.price}</h3>
                                    </div>
                                </Box>)
                            })}

                        </div>
                    </div>

                    <div className="rigth-div" style={{
                        width: "50%"
                    }}>
                        <h3 style={{
                            color: "#484848",
                            marginRight: "60%"
                        }}>Order summary</h3>
                        <p style={{
                            color: "#11111166",
                            fontWeight: "bold"
                        }}>Total delivery cost This subtotal doesn’t include the delivery cost</p>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",

                        }}><h3>Subtotal</h3><h2>Rs. {subTotal}</h2>
                        </div>

                        <div style={{
                            boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                            padding: "2%",
                            width: "100%",
                            height: "100px",
                            alignItems: "center",
                        }}> <h4 style={{
                            color: "#484848",
                        }}>Delivery estimates will be available on the next page.</h4> </div>
                        <div style={{
                            boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                            padding: "2%",
                            width: "100%",
                            height: "100px",
                            alignItems: "center",
                            marginTop: "30px",
                            backgroundColor: "#0058a3",

                        }}> <a href="" style={{
                            color: "white"
                        }}><h4>View delivery and pickup options </h4></a> </div>

                        <div style={{
                            textAlign: "left",
                        }}>
                            <a href=""><h4>Our Return Policy</h4></a>
                            <a href=""><h4>Secure shopping with SSL data encryption</h4></a>
                        </div>
                    </div>
                </div>


                <div style={{
                    width: "80%",
                    textAlign: "left",
                    margin: "auto"
                }}><h1>Recommended for you</h1>
                </div>
                <div style={{
                    width: "80%",
                    display: "grid",
                    margin: "auto",
                    gridTemplateColumns: "repeat(4,1fr)",
                    justifyContent: "space-evenly",
                    gap: "20px",
                }}>

                    {
                        data.map((e) => {
                            return (
                                <div style={{
                                    width: "100%",
                                    height: "400px",
                                    alignItems: "center",
                                }}>
                                    <img src={e.img} alt="" style={{
                                        width: "100%",
                                        height: "200px",

                                    }} />
                                    <div style={{
                                        textAlign: "left",
                                    }}>
                                        <a href=""><h3>{e.title}</h3></a>
                                        <p>{e.desc}</p>
                                        <p style={{
                                            textDecoration: "line-through"
                                        }}>{e.cprice}</p>
                                        <h2>{e.price}</h2>
                                        <p>{e.vprice}</p>

                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>


        </Box>
    )
}

export default ProductCart;

