import { Card, HStack, CardBody, CardFooter, Divider, Heading, Stack, Text, Image, ButtonGroup, Button, Box, SimpleGrid } from "@chakra-ui/react";

let data = [{
    src: 'https://www.ikea.com/in/en/images/products/symfonisk-wifi-bookshelf-speaker-black__0722663_pe741648_s5.jpg?f=xxs',
    title: "Living room Sofa",
    description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450"
}, {
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: "Living room Sofa",
    description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450"
}, {
    src: 'https://www.ikea.com/in/en/images/products/symfonisk-picture-frame-with-wifi-speaker-black-smart__1012832_pe829036_s5.jpg?f=xxs',
    title: "Living room Sofa",
    description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450"
}, {
    src: 'https://www.ikea.com/in/en/images/products/symfonisk-shade-for-speaker-lamp-base-glass-black__0993358_pe820508_s5.jpg?f=xxs',
    title: "Living room Sofa",
    description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450"
},
{
    src: 'https://www.ikeaa.com/in/en/images/products/symfonisk-wifi-bookshelf-speaker-black__0722663_pe741648_s5.jpg?f=xxs',
    title: "Living room Sofa",
    description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450"
}, {
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: "Living room Sofa",
    description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450"
}, {
    src: 'https://www.ikea.com/in/en/images/products/symfonisk-picture-frame-with-wifi-speaker-black-smart__1012832_pe829036_s5.jpg?f=xxs',
    title: "Living room Sofa",
    description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450"
}, {
    src: 'https://www.ikea.com/in/en/images/products/symfonisk-shade-for-speaker-lamp-base-glass-black__0993358_pe820508_s5.jpg?f=xxs',
    title: "Living room Sofa",
    description: " This sofa is perfect for modern tropical spaces, baroque inspiredspaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450"
}]


function DynamicProducts() {
    return (
        <Box p="50px 0px">
            <Heading p="20px 0px">Related categories</Heading>
            <HStack wrap="wrap" justify="space-evenly">
                {data.map((ele) => {
                    return (
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    w="200px"
                                    h="130px"
                                    // objectFit="cover"
                                    src={ele.src}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    fallbackSrc='https://imgpile.com/images/hUscS2.gif'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'> {ele.title} </Heading>
                                </Stack>
                            </CardBody>
                            <Divider />
                        </Card>
                    )
                })}
            </HStack>
        </Box>

    );
}

export default DynamicProducts;