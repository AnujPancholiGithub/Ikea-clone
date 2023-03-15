import { Box, Stack, HStack, Flex, SimpleGrid, VStack, Image, Heading, Divider, Input, Button, Text, Grid, useMediaQuery, IconButton, Select } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


let data = [{
    img: [{ img: "https://www.ikea.com/in/en/images/products/symfonisk-picture-frame-with-wifi-speaker-black-smart__0985447_pe816631_s5.jpg?f=xs" },
    { img: "https://www.ikea.com/in/en/images/products/symfonisk-picture-frame-with-wifi-speaker-black-smart__1152747_pe885450_s5.jpg?f=xs" },
    { img: "https://www.ikea.com/in/en/images/products/symfonisk-picture-frame-with-wifi-speaker-black-smart__1152746_pe885451_s5.jpg?f=xs" },
    { img: "https://www.ikea.com/in/en/images/products/symfonisk-picture-frame-with-wifi-speaker-black-smart__1022335_pe832682_s5.jpg?f=xs" },
    { img: "https://www.ikea.com/in/en/images/products/symfonisk-picture-frame-with-wifi-speaker-black-smart__1048881_ph180308_s5.jpg?f=xs" },
    { img: "https://www.ikea.com/in/en/images/products/symfonisk-picture-frame-with-wifi-speaker-black-smart__0985447_pe816631_s5.jpg?f=xs" }
    ],
    title: "Picture frame with WiFi speaker, black/smart",
    brand: "SYMFONISK",
    price: "Rs.16,900"
}]


function SingleProduct() {
    const [isSmallScreen] = useMediaQuery("(max-width: 767px)");

    return (<Box padding="3rem 3rem">
        {/* Jai Shree Ram */}

        <SimpleGrid gap={2} columns={[1, 1, 2]}>
            <Box>
                {isSmallScreen ? (
                    <Carousel showArrows={true}>
                        {data[0].img.map((ele, index) => (
                            <div key={index}>
                                <img src={ele.img} alt={ele.img} />
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
                        {data[0].img.map((ele, index) => (
                            <Box key={index}>
                                <img src={ele.img} alt={ele.img} />
                            </Box>
                        ))}
                    </SimpleGrid>
                )}
            </Box>
            <VStack spacing={14}>
                <Box p={4} bg="white" borderWidth="1px" borderRadius="md" boxShadow="md">
                    <Stack direction={{ base: "column", lg: "column" }} align={{ base: "stretch", lg: "center" }} justify={{ base: "center", lg: "space-between" }}>
                        <Stack w="100%" direction="row" align="center" justify="space-between" flex="1" >
                            <Heading as="h2" size="md" mr={2}>
                                SYMFONISK
                            </Heading>
                            <IconButton aria-label="Favorite" icon={<FaHeart />} variant="ghost" />
                        </Stack>
                        <Text fontSize={{ base: "lg", lg: "xl" }} color="gray.500" mt={{ base: 2, lg: 0 }}>
                            Picture frame with WiFi speaker, black/smart
                        </Text>
                    </Stack>
                    <Stack direction="row" align="baseline" mt={6} justify="space-between">
                        <Text fontSize="3xl" fontWeight="bold" color="black">
                            Rs.16,900
                        </Text>
                        <Text fontSize={{ base: "md", lg: "lg" }} color="gray.500">
                            Price incl. of all taxes
                        </Text>
                    </Stack>
                    <Stack direction="column" mt={4} justify="flex-start">
                        <Box as="span" fontSize="xl" color="blackAlpha.700">
                            ★★★★★ 5
                        </Box>
                        <Box ml={2}>
                            <Select defaultValue="1" borderWidth="0px">
                                <option value="1">1 Star</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                            </Select>
                        </Box>
                    </Stack>
                </Box>
                <Divider />
                <Box>
                    <HStack>
                        <Input placeholder="Enter pincode"></Input>
                        <Button>Check</Button>
                    </HStack>
                    <Text>Please enter pin code to check home delivery availability.</Text>
                </Box>
                <Box>
                    <Button>Add to bag</Button>
                </Box>

            </VStack>
        </SimpleGrid>
    </Box>);
}

export default SingleProduct;