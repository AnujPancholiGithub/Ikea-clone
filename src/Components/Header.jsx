import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons"
import {InputGroup,  InputLeftAddon, Input, Drawer,DrawerBody, DrawerOverlay, DrawerContent, DrawerHeader, useDisclosure,  } from "@chakra-ui/react"

import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Header(){
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return(
        <>
         <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", marginTop:"20px"}}>
            <div className="hamburger" onClick={onOpen} >
                <HamburgerIcon style={{cursor:"pointer"}}/>
                <p style={{cursor:"pointer"}}>Menu</p>
            </div>
            <div style={{display:"flex", gap:"20px"}}>
                <div>
                    <img src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg" alt="IKEA" />                
                </div>
                <div>                 
                    <InputGroup >
                        <InputLeftAddon><SearchIcon/></InputLeftAddon>
                        <Input w='600px' type='text' placeholder='What are you looking for?' />
                    </InputGroup>                 
                </div>
            </div>
                
            
            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", gap:"20px"}}>
                <span class="material-symbols-outlined">person</span>
                <span>Hej! Log in or Sign up</span> 
                <span class="material-symbols-outlined">local_shipping</span>
                <span class="material-symbols-outlined">favorite</span>
                <span class="material-symbols-outlined">shopping_basket</span>
            </div>
            
        </div>
        <div style={{display:"flex",  gap:"20px", marginLeft:"100px", marginTop:"10px"}}>
          
          <Link to="/products">Products</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/new">New at IKEA</Link>
          <Link to="/offers">Offers</Link>
        </div>
        <div>
        
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'><img src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg" alt="IKEA" />
             </DrawerHeader>
            <DrawerBody style={{lineHeight:"2.5"}}>
               
              <Link style={{fontSize:"20px", fontWeight:"600"}}>Products</Link><br />
              <Link style={{fontSize:"20px", fontWeight:"600"}}>Rooms</Link><br />
              <Link style={{fontSize:"20px", fontWeight:"600"}}>New at IKEA</Link><br />
              <Link style={{fontSize:"20px", fontWeight:"600"}}>Offers</Link><br />
              <Link style={{fontSize:"18px", fontWeight:"600"}}>We have lowered our prices</Link><br />
              <Link style={{fontSize:"18px", fontWeight:"600"}}>Affordable accessories for everyday life</Link><br />
              <Link style={{fontSize:"18px", fontWeight:"600"}}>Tips and inspirations</Link><br />
              <Link style={{fontSize:"18px", fontWeight:"600"}}>Currently at IKEA</Link><br />
              <Link style={{fontSize:"18px", fontWeight:"600"}}>Track your order</Link><br /><br />
              <Link>Join IKEA Family</Link><br />
              <Link>IKEA Business</Link><br />
              <Link>IKEA Restaurant</Link><br />
              <Link>Our Stores</Link><br />
              <Link>Design your room</Link><br />
              <Link>Customer service</Link><br />
              <Link>Download the IKEA app</Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        </div>
    </>
       
    )
}