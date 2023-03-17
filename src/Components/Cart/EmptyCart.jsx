


function EmptyCart() {
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

    return (
        <div className="parent-emptycart" >
            <div style={{
            width : "90%",
            textAlign : "left",
            margin  : "auto"

        }}>
            <h1>Your bag is empty</h1>

            
            <a href="https://react.school" target="_blank">
                 Continue to Shopping 
            </a>
            </div>
            <div style={{
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

            </div>
        </div>
    )
}

export default EmptyCart;