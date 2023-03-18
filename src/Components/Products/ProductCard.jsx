import { Card, CardBody, CardFooter, Divider, Heading, Stack, Text, Image, ButtonGroup, Button, Box, SimpleGrid, IconButton, Spacer, HStack, VStack, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaShoppingBasket, FaRegHeart } from "react-icons/fa"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import products from "./../JsonFiles/elctroCo.json"
import { setProducts, singleProductAction } from "./../../Redux/products/actions"
import SkletonLoader from "./SkletonLoader";
import { Link } from "react-router-dom";

let data = products.products;
console.log("products", products.products)

console.log("console");
function ProductCard() {




    const { filter, sort } = useSelector((state) => state);
    const [dataState, setDataState] = useState(data);

    let dispatch = useDispatch()

    function getProducts(dataA) {
        dispatch(setProducts(dataA));
    }
    useEffect(() => {
        getProducts(filteredProducts);
        setDataState(() => filteredProducts);
    }, [filter])
    useEffect(() => {
        getProducts(sortedProducts);
        setDataState(() => sortedProducts);
    }, [sort])

    useEffect(() => {
        // dispatch(setProducts(data));
        setDataState(data);

    }, [])

    function handelProductDetail(id, title) {
        dispatch(singleProductAction(id));
        <Link to={`/products/${title}/${id}`} />
        console.log("clicked on card")
    }

    console.log("console");
    console.log("sort", sort);


    const filteredProducts = data.filter((product) =>
        filter ? product.size.toUpperCase() === filter.toUpperCase() : true
    );


    const sortedProducts = filteredProducts.sort((a, b) => {
        switch (sort) {
            case 'H2L':
                return a.price - b.price;
            case 'L2H':
                return b.price - a.price;
            case "priceAsc":
            default: return 0;
        }
    })



    console.log("filteredProducts", filteredProducts, "filter->", filter)
    console.log("dataState", dataState);


    return (<Box>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={10} >

            {dataState.length > 1 ? dataState.map((ele) => {
                return (
                    <Card maxW='sm' onClick={() => { handelProductDetail(ele.id, ele.title) }}  >
                        <CardBody >
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
                            <ButtonGroup spacing={[48, 32, 24, 28]}>
                                <IconButton isRound="true"
                                    colorScheme='black'
                                    bg="#103D99"
                                    aria-label='Call Segun'
                                    size='lg'
                                    fontSize="22px"
                                    icon={<MdOutlineAddShoppingCart />}
                                />
                                {/* <Spacer /> */}
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
            }) : <Heading>Loading....</Heading>}

        </SimpleGrid>
    </Box >
    );
}

export default ProductCard;