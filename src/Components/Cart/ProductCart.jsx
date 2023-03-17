

function ProductCart() {
return (
    <div className="parent-cart" style={{
        display : "flex",
        // backgroundColor:"green",
        height : "600px",
        width : "80%",
        margin : "auto",
    }}>
        <div className="left-div" style={{
            textAlign : "left",
            // boxShadow : "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}>
            <h1>Shopping bag</h1>
            <p>Your postal code <a href="">208001</a></p>
            <div >

                <div id="products" style={{
                    display : "flex",
                    justifyContent : "space-evenly",
                    padding : "3%",
                }}>
                    <img src="https://www.ikea.com/in/en/images/products/oebonaes-triple-hook-with-suction-cup-grey-green__1150589_pe884628_s3.jpg" alt="" style={{
                        width : "20%",
                    }}/>
                    <div style={{
                        textAlign : "left",
                    }}>
                        <h3>ÖBONÄS</h3>
                        <p>Triple Hook With Suction Cup, grey-green7x11 cm (2 ¾x4 ¼ ")</p>
                        <select name="qty" id="qty">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <h3>149</h3>
                </div>

            </div>
        </div>

        <div className="rigth-div">
            <h3>Order summary</h3>
            <p>Total delivery cost This subtotal doesn’t include the delivery cost</p>
            <div style={{
                display : "flex",
                justifyContent : "space-between"
            }}><h3>Subtotal</h3><h2>149</h2></div>
        </div>


    </div>
)
}

export default ProductCart;