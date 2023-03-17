


function Track() {
    
     
    return (
        <div className="parent-div-cart" style={{
            width : "70%",
            height : "100%",
            margin : "auto",
            display : "flex",
            padding : "7%",
        }}>
            
            <div  style={{
                width : "100%",
                textAlign:"left",
                paddingRight : "10%",
                paddingTop : "10%",
                paddingBottom : "10%",
                justifyContent : "left",
                boxShadow : "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}> 
            <h1>Track & manage my order</h1>
                <div style={{
                    width:"100%",
                    textAlign:"left",
                    boxShadow : "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    paddingRight : "5%",
                    paddingTop : "5%",
                    paddingBottom : "5%",
                    justifyContent : "left"
                }} ><p>The list of past purchases is not currently available. If you have an order number for your purchase, you can still use it to view and manage your order.</p>
                </div>
            </div>
            
            <div style={{
                width:"100%",
                textAlign : "left",
                padding : "5%",
            }}>
            
                
                <input type="text" placeholder="Order number" style={{
                    width:"98%",
                }} />
                <p>9-10 digits with no spaces.</p>
                
                <input type="text" placeholder="Email address or phone number" style={{
                    width:"98%",
                }}/>
                <p>The email or phone number used when placing the order.</p>
                
                
                <button style={{
                    color : "white",
                    borderRadius : "20%",
                    width : "50%",
                    backgroundColor : "black",
                    padding : "3%"
                }}>Look up order</button>
            </div>
            
        </div>
    )
}

export default Track;

