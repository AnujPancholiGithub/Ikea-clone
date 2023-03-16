

export default function Footer(){
    return(
        <div style={{ backgroundColor:"#f5f5f5",  padding:"100px 50px 100px 100px"}}>
       
        <div style={{display:"grid", gridTemplateColumns:"1.5fr 1fr 1fr 1fr 1fr"}}>
            <div style={{width:"300px"}}>
                <h3 style={{fontWeight:"700"}} >Join IKEA Family</h3>
                <br />
                <p>
                Enjoy guaranteed discounts, special previews, also get Rs. 200 food voucher and much more. Sign up today - it’s free and only takes a minute to join.
                </p>
                <br />
                <button style={{color:"white", backgroundColor:"black", borderRadius:"15px", padding:"5px 15px"}}>Join the club</button>
                <br />
                <br />
                <h3 style={{fontWeight:"700"}}>IKEA Business Network</h3> 
                <br />
                <p>Join the membership program for business customers with exciting benefits and features. Join us for free and enjoy member discounts, quick-fix tips, online tutorials and a lot more.</p><br />
                <button style={{color:"white", backgroundColor:"black", borderRadius:"15px", padding:"5px 15px"}}>Join now</button>
                          
            </div>
            <div>
                <h3 style={{fontWeight:"700"}}>IKEA Family</h3>
                <br />
                <ul style={{listStyleType: "none"}}>
                    <li>Log In</li>
                    <li>Join IKEA Family</li>
                    <li>Member offers</li>
                    <li>Workshops & Events</li>
                </ul>
                
            </div>
            <div>
                <h3 style={{fontWeight:"700"}}>Services</h3>
                <br />
                <ul style={{listStyleType: "none"}}>
                    <li>Design your room</li>
                    <li>Delivery Services</li>
                    <li>Installation Services</li>
                    <li>Assembly Service</li>
                    <li>Kitchen Planning</li>
                    <li>Measuring Service</li>
                    <li>Customer Service</li>
                    <li>Recycle Program</li>
                    <li>Track Your Order</li>
                    <li>Click & Collect</li>
                    <li>Personal Shopper</li>
                </ul>
            </div>
            <div>
                <h3 style={{fontWeight:"700"}}>Help</h3>
                <br />
                <ul style={{listStyleType: "none"}}>
                    <li>How to shop</li>
                    <li>Return policy</li>
                    <li>Prices and price tags</li>
                    <li>Contact us</li>
                    <li>FAQ's</li>
                    <li>Planners</li>
                    <li>Size quide - Beds & Mattresses</li>
                    <li>Buying guides</li>
                    <li>Gift Card</li>
                    <li>Feedback</li>
                </ul>
            </div>
            <div>
                <h3 style={{fontWeight:"700"}}>About IKEA</h3>
                <br />
                <ul style={{listStyleType: "none"}}>
                    <li>This is IKEA</li>
                    <li>Working at IKEA</li>
                    <li>Newsroom</li>
                    <li>Sustainability</li>
                    <li>IKEA Stores</li>
                    <li>IKEA Restaurant</li>
                    <li>IKEA Business</li>
                </ul>
            </div>      
        
            </div>
            <div style={{display:"flex", gap:"20px", marginTop:"100px", marginBottom:"20px"}}>
                <img style={{width:"30px"}} src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="" />
                <img style={{width:"30px"}} src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="" />
                <img style={{width:"30px"}} src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="" />
                <img style={{width:"30px"}} src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png" alt="" />
            </div>
            <hr />
            <div style={{display:"flex", justifyContent:"space-between", paddingTop:"30px"}}>
                <div>
                    <p style={{ fontSize:"14px"}} >© Inter IKEA Systems B.V. 2000-2023</p>
                </div>
                <div style={{display:"flex", gap:"20px", fontSize:"14px"}}>
                    <p>Privacy policy</p>
                    <p> Cookie policy</p> 
                    <p>Cookie settings</p>
                    <p>Terms and Conditions</p>
                </div>
                
            </div>
        </div>
    )
}