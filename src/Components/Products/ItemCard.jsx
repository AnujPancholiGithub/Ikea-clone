import { Card, CardBody, CardFooter, Divider, Heading, Stack, Text, Image, ButtonGroup, Button, Box, SimpleGrid, IconButton, Spacer, HStack, VStack, Flex, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaShoppingBasket, FaRegHeart } from "react-icons/fa"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import products from "../JsonFiles/elctroCo.json"
import { add2CartAction, add2WishListAction, setProducts, singleProductAction } from "../../Redux/products/actions"
import SkletonLoader from "./SkletonLoader";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsFillArrowThroughHeartFill, BsFillCartCheckFill } from "react-icons/bs";


function ItemCard({ ele, index }) {

    const [isCartBTNClicked, setCartBTNClicked] = useState(false);
    const [isWishBTNClicked, setWishBTNClicked] = useState(false);

    const routeNavigate = useNavigate();
    const toast = useToast()
    let dispatch = useDispatch()

    let cart = useSelector((state) => {
        return state.cart;
    })
    console.log("setCartBTNClicked(true);", isCartBTNClicked, ele.id)

    useEffect(() => {
        cart.map((e) => {
            e.id == ele.id && setCartBTNClicked(true);
        })
    }, [])

    function handelProductDetail(id, title) {
        dispatch(singleProductAction(id));

        routeNavigate(`/shop/product/${id}/${title}`)

        console.log("clicked on card")
    }

    function handelCart(id, title, price, brand, quantity, img) {

        if (!isCartBTNClicked) {
            console.log("added to cart", id, title);
            toast({
                title: "Woohoo! You're one step closer to owning this item :)",
                description: title,
                status: 'success',
                duration: 2100,
                isClosable: true,
            })
            setCartBTNClicked(true);
            let cartObj = {
                id,
                title, price, brand, quantity, img
            }
            dispatch(add2CartAction(cartObj))
        } else {
            toast({
                title: 'Already added to Cart',
                description: title,
                status: 'info',
                duration: 2500,
                isClosable: true,
            })
        }

    }

    function handelWishList(id, title) {
        console.log("added to Wishlist", id, title);
        if (!isWishBTNClicked) {
            toast({
                title: 'High five! Item added to shopping list :)',
                description: title,
                status: 'info',
                duration: 2500,
                isClosable: true,
            })
            setWishBTNClicked(true)
            dispatch(add2WishListAction(id));
        } else {
            toast({
                title: 'Already added to wishlist',
                description: title,
                status: 'info',
                duration: 2500,
                isClosable: true,
            })
        }
    }







    return (
        <Box>


            <Card maxW='sm' key={index + 1}>
                <CardBody onClick={() => { handelProductDetail(ele.id, ele.title) }}  >
                    <Image
                        w="300px"
                        h="150px"
                        src={ele.images[0].url}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        fallbackSrc='https://imgpile.com/images/hUscS2.gif'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'> {ele.title} </Heading>
                        <Text noOfLines={[1, 2, 2]} fontSize="13px">
                            {ele.description}
                        </Text>
                    </Stack>
                    <Flex >
                        <Text color='blue.600' fontSize='2xl'>
                            <p> <span style={{ fontSize: "14px", color: "#103D99" }}> RS. </span> {ele.price}</p>
                        </Text>
                    </Flex>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing={[48, 32, 24, 24]}>
                        <IconButton isRound="true"
                            onClick={() => { handelCart(ele.id, ele.title, ele.price, ele.brand, 1, ele.images[0].url) }}
                            bg={isCartBTNClicked ? "#fedb68" : "white"}
                            aria-label='Call Segun'
                            size='lg'
                            fontSize="22px"
                            icon={!isCartBTNClicked ? <MdOutlineAddShoppingCart color={isCartBTNClicked ? "black" : "black"} /> : <BsFillCartCheckFill />}
                        />
                        {/* <Spacer /> */}
                        <IconButton
                            onClick={() => { handelWishList(ele.id, ele.title) }}
                            isRound="true"
                            variant='ghost'
                            colorScheme='#103D99'
                            aria-label='Call Segun'
                            size='lg'
                            fontSize="25px"
                            icon={!isWishBTNClicked ? < FaRegHeart color="#103D99" /> : <BsFillArrowThroughHeartFill color="#103D99" />}
                        />
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Box>)
}

export default ItemCard;