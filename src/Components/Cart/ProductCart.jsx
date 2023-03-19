import {useState} from "react"
import Header from "../Header";
import Footer from "../Footer";
import {Heading} from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'

function ProductCart() {
    var data = [
        {
            img : "https://www.ikea.com/in/en/images/products/smycka-artificial-flower-peony-pink__0903043_pe685421_s5.jpg?f=xxs",
            title : "SMYCKA",
            desc : "Artificial flower, 30 cm (11 ¾ )",
            cprice : "Rs. 99",
            price : "Rs. 69",
            vprice : "Price valid Mar 11 - Mar 26 or while supply lasts",
        },
        {
            img : "https://www.ikea.com/in/en/images/products/besta-tv-bench-white-sindvik-lappviken-mejarp-light-grey-beige__0843389_pe535717_s5.jpg?f=xxs",
            title : "BESTÅ",
            desc : "TV bench, 180x42x48 cm (70 7/8x16 1/2x18 7/8 )",
            cprice : "Rs. 26999",
            price : "Rs. 22999",
            vprice : "Price valid Mar 11 - Mar 26 or while supply lasts",
        },
        {
            img : "https://www.ikea.com/in/en/images/products/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-stubbarp-black-brown-clear-glass__0750781_pe746832_s5.jpg?f=xxs",
            title : "BESTÅ",
            desc : "TV storage combination/glass doors, 240x42x129 cm (94 1/2x16 1/2x50 3/4 )",
            cprice : "Rs. 25999",
            price : "Rs. 23999",
            vprice : "Price valid Mar 11 - Mar 26 or while supply lasts",
        },
        {
            img : "https://www.ikea.com/in/en/images/products/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-stubbarp-black-brown-clear-glass__0750781_pe746832_s5.jpg?f=xxs",
            title : "BESTÅ",
            desc : "Storage combination with drawers, 180x42x74 cm (70 7/8x16 1/2x29 1/8 )",
            cprice : "Rs. 24999",
            price : "Rs. 21999",
            vprice : "Price valid Mar 11 - Mar 26 or while supply lasts",
        },
    ]

    let [state,setState] = useState(149);
    function handleEvent(val) {
        setState(val*149);
    }
return (
    <div className="parent-div-pro-cart">
        <Header/>

        <div  style={{
        display : "flex",
        // backgroundColor:"green",
        height : "600px",
        width : "80%",
        margin : "auto",
    }}>
        <div className="left-div" style={{
            textAlign : "left",
            // boxShadow : "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            width : "100%",
            marginTop : "20px"
        }}>
            <Heading>Shopping bag</Heading>
            <Heading size={8} display = "flex" gap={1}>Your postal code <Heading size={8} textDecoration = "underline" cursor="pointer">560001</Heading></Heading>
            <div >

                <div id="products" style={{
                    display : "flex",
                    justifyContent : "space-evenly",
                    padding : "3%",
                    alignItems : "center",
                }}>
                    <img src="https://www.ikea.com/in/en/images/products/oebonaes-triple-hook-with-suction-cup-grey-green__1150589_pe884628_s3.jpg" alt="" style={{
                        width : "20%",
                    }}/>
                    <div style={{
                        textAlign : "left",
                    }}>
                        <Heading size={10}>ÖBONÄS</Heading>
                        <p>Triple Hook With Suction Cup, grey-green7x11 cm (2 ¾x4 ¼ ")</p>
                        <select name="qty" id="qty" placeholder="quantity" style={{
                            marginTop : "5%"
                        }} onChange={(event)=>handleEvent(event.target.value)}>
                            <option value="1" >1</option>
                            <option value="2" >2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                        </select>
                    </div>
                    <Heading size={8}>Rs. 149</Heading>
                </div>

            </div>
        </div>

        <div className="rigth-div" style={ {
            width : "60%",
            textAlign : "center"
        }}>
            <h3 style={{
                color: "#484848",
                marginRight : "70%",
                marginBottom : "5%",
                fontWeight : "bold"
            }}>Order summary</h3>
            <p style={ {
                color : "#11111166",
                fontWeight : "bold"
            }}>Total delivery cost This subtotal doesn’t include the delivery cost</p>
            <div style={{
                display : "flex",
                justifyContent : "space-between",
                
            }}><Heading size={8}>Subtotal</Heading><Heading size={8}>Rs. {state}</Heading>
            </div>

            <div style={{
                 boxShadow : "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                padding : "6%",
                width : "100%",
                height : "100px",
                alignItems : "center",
                marginTop : "20px"
            }}> <h4 style={{
                color: "#484848",
                fontWeight : "bold"
            }}>Delivery estimates will be available on the next page.</h4> </div>
            <div style={{
                 boxShadow : "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                padding : "7%",
                display : "flex",
                width : "100%",
                height : "100px",
                alignItems : "center",
                marginTop : "30px",
                justifyContent : "space-evenly",
                backgroundColor : "#0058a3",
                
            }}> <Heading size={8} color = {"white"} cursor="pointer">View delivery and pickup options </Heading> <ArrowForwardIcon color="white" cursor="pointer" fontSize="25px" /></div>

            <div style={ {
                textAlign : "left",
                marginTop : "5%",
                gap : "40px"
            }}>
            <Heading size={8}  cursor="pointer" textDecoration={"underline"}>Our Return Policy..... </Heading>
            <Heading size={8}  cursor="pointer" textDecoration={"underline"}>Secure shopping with SSL data encryption.... </Heading>
            
            </div>
        </div>
    </div>


    <div style={{
                 width : "80%",
                 textAlign : "left",
                 margin  : "auto"
            }}><h1>Recommended for you</h1>
    </div>
    <div style={{
                width : "80%",
                display : "grid",
                margin  : "auto",
                gridTemplateColumns : "repeat(4,1fr)",
                justifyContent : "space-evenly",
                gap : "20px",
            }}>

                {
                    data.map((e)=>{
                        return (
                            <div style={{
                                width : "100%",
                                height : "400px",
                                alignItems : "center",
                            }}>
                                <img src={e.img} alt="" style={{
                                    width : "100%",
                                    height : "200px",
                                    
                                }}/>
                                <div style={{
                                    textAlign : "left",
                                }}>
                                    <a href=""><h3>{e.title}</h3></a>
                                    <p>{e.desc}</p>
                                    <p style={{
                                        textDecoration : "line-through"
                                    }}>{e.cprice}</p>
                                    <h2>{e.price}</h2>
                                    <p>{e.vprice}</p>
                                    
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        <Footer/>
    </div>
    
)
}

export default ProductCart;

