import { Card, CardBody, CardFooter, Divider, Heading, Stack, Text, Image, ButtonGroup, Button, Box, SimpleGrid, IconButton, Spacer, HStack, VStack, Flex } from "@chakra-ui/react";

import { FaShoppingBasket, FaRegHeart } from "react-icons/fa"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import products from "./../JsonFiles/elctroCo.json"

// let data = [{
//     src: 'https://www.ikea.com/in/en/images/products/symfonisk-wifi-bookshelf-speaker-black__0722663_pe741648_s5.jpg?f=xxs',
//     title: "Living room Sofa",
//     description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
//     price: "$450"
// }, {
//     src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//     title: "Living room Sofa",
//     description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
//     price: "$450"
// }, {
//     src: 'https://www.ikea.com/in/en/images/products/symfonisk-picture-frame-with-wifi-speaker-black-smart__1012832_pe829036_s5.jpg?f=xxs',
//     title: "Living room Sofa",
//     description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
//     price: "$450"
// }, {
//     src: 'https://www.ikea.com/in/en/images/products/symfonisk-shade-for-speaker-lamp-base-glass-black__0993358_pe820508_s5.jpg?f=xxs',
//     title: "Living room Sofa",
//     description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
//     price: "$450"
// },
// {
//     src: 'https://www.ikeaa.com/in/en/images/products/symfonisk-wifi-bookshelf-speaker-black__0722663_pe741648_s5.jpg?f=xxs',
//     title: "Living room Sofa",
//     description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
//     price: "$450"
// }, {
//     src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//     title: "Living room Sofa",
//     description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
//     price: "$450"
// }, {
//     src: 'https://www.ikea.com/in/en/images/products/symfonisk-picture-frame-with-wifi-speaker-black-smart__1012832_pe829036_s5.jpg?f=xxs',
//     title: "Living room Sofa",
//     description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
//     price: "$450"
// }, {
//     src: 'https://www.ikea.com/in/en/images/products/symfonisk-shade-for-speaker-lamp-base-glass-black__0993358_pe820508_s5.jpg?f=xxs',
//     title: "Living room Sofa",
//     description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
//     price: "$450"
// }]

let data = products.products;
console.log("products", products.products)

function ProductCard() {
    console.log("products")
    return (
        <Box>
            <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={10} >

                {data.map((ele) => {
                    return (
                        <Card maxW='sm'>
                            <CardBody>
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
                                <ButtonGroup spacing='10'>
                                    <IconButton isRound="true"
                                        colorScheme='black'
                                        bg="#103D99"
                                        aria-label='Call Segun'
                                        size='lg'
                                        fontSize="22px"
                                        icon={<MdOutlineAddShoppingCart />}
                                    />
                                    <Spacer />
                                    <IconButton
                                        isRound="true"
                                        variant='ghost'
                                        colorScheme='#103D99'
                                        aria-label='Call Segun'
                                        size='lg'
                                        fontSize="25px"
                                        icon={<FaRegHeart />}
                                    />
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    )
                })}

            </SimpleGrid>
        </Box >
    );
}

export default ProductCard;