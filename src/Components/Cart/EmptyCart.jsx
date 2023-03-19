import Header from "../Header";
import Footer from "../Footer";
import {Heading} from "@chakra-ui/react"
import { Link } from '@chakra-ui/react'
import DynamicProducts from "../Products/DynamicProducts";

function EmptyCart() {
    

    return (
        
        <div className="parent-emptycart" >
            <Header/>
            <div style={{
            width : "80%",
            textAlign : "left",
            margin  : "auto",
            marginTop : "50px"
        }}>
            
            <Heading>Your bag is empty</Heading>
            <Heading size={8}>Continue To Shopping ...</Heading>
            <DynamicProducts/>
            </div>
            {/* <div style={{
                 width : "90%",
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

            </div> */}
            
            <Footer/>
        </div>
    )
}

export default EmptyCart;