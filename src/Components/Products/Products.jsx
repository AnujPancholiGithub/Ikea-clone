import { useEffect, useState } from "react"
import { Box, Card } from "@chakra-ui/react";
import DynamicProducts from "./DynamicProducts";
import ListingFilters from "./Filters";
import ListingHero from "./ListingHero";
import ProductCard from "./ProductCards";
import SkletonLoader from "./SkletonLoader";
import SingleProduct from "./SingleProduct"
import { useSelector } from "react-redux";

function Products() {
    const { filter, sort } = useSelector((state) => state);
    const [loding, setLoding] = useState("false");

    useEffect(() => {
        setTimeout(() => { setLoding("false") }, 1)
    }, [filter, sort])
    useEffect(() => {
        setTimeout(() => { setLoding("true") }, 800)
    }, [filter, sort])



    return (
        <Box>


            <ListingHero />
            <ListingFilters />
            {loding === "true" ? <ProductCard /> : <SkletonLoader />}
            <DynamicProducts />

            {/* <SingleProduct /> */}

        </Box>)
}

export default Products;