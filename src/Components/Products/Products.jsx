import { useEffect, useState } from "react"
import { Box, Card } from "@chakra-ui/react";
import DynamicProducts from "./DynamicProducts";
import ListingFilters from "./ListingFilters";
import ListingHero from "./ListingHero";
import ProductCard from "./ProductCard";
import SkletonLoader from "./SkletonLoader";
import SingleProduct from "./SingleProduct"

function Products() {
    const [loding, setLoding] = useState("false");
    useEffect(() => {
        setTimeout(() => { setLoding("true") }, 2500)
    }, [])

    return (<Box>

        <ListingHero />
        <ListingFilters />

        {loding === "true" ? <ProductCard /> : <SkletonLoader />}
        <DynamicProducts />
        {/* <SingleProduct /> */}

    </Box>)
}

export default Products;