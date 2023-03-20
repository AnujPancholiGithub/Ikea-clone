import { Card, CardBody, CardFooter, Divider, Heading, Stack, Text, Image, ButtonGroup, Button, Box, SimpleGrid, IconButton, Spacer, HStack, VStack, Flex, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaShoppingBasket, FaRegHeart } from "react-icons/fa"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import products from "../JsonFiles/elctroCo.json"
import { setProducts, singleProductAction } from "../../Redux/products/actions"
import SkletonLoader from "./SkletonLoader";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";


let data = products.products;
console.log("products", products.products)

console.log("console");


function ProductCard() {
    const { filter, sort } = useSelector((state) => state);
    const [dataState, setDataState] = useState(data);

    const routeNavigate = useNavigate();
    const toast = useToast()
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

        routeNavigate(`/shop/product/${id}/${title}`)

        console.log("clicked on card")
    }


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

    function handelCart(id, title) {
        console.log("added to cart", id, title);
        toast({
            title: 'Hurray Item added to cart :)',
            description: title,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

    }



    return (<Box>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={10} >
            {dataState.map((ele, index) => {
                return (<ItemCard ele={ele} index={index} />)
            })

            }
        </SimpleGrid>
    </Box >
    );
}

export default ProductCard;