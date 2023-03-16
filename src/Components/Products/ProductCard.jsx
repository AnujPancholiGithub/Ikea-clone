import { Card, CardBody, CardFooter, Divider, Heading, Stack, Text, Image, ButtonGroup, Button, Box, SimpleGrid, IconButton, Spacer, HStack, VStack, Flex } from "@chakra-ui/react";

import { FaShoppingBasket, FaRegHeart } from "react-icons/fa"
import { MdOutlineAddShoppingCart } from "react-icons/md";

import products from "./../JsonFiles/elctroCo.json"

let data = products.products;
console.log("products", products.products)

function ProductCard() {
    console.log("products")



    function handelProductDetail() {



    }



    return (
        <Box>
            <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={10} >

                {data.map((ele) => {
                    return (
                        <Card maxW='sm' onClick={handelProductDetail} >
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