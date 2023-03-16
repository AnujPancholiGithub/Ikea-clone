import { Box, Stack, HStack, Flex, SimpleGrid, VStack, Image, Progress, Heading, Divider, Input, Button, Text, Grid, useMediaQuery, IconButton, Select, FormControl } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import DynamicProducts from "./DynamicProducts"

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

let pinCodeData = [
    { pinCode: 301406 },
    { pinCode: 301407 },
    { pinCode: 301408 },
    { pinCode: 301409 },
    { pinCode: 301410 },
    { pinCode: 301411 },
    { pinCode: 301412 },
    { pinCode: 301413 },
    { pinCode: 301414 },
]


function SingleProduct() {
    const [pinCheck, setPincheck] = useState(false)
    const [userPin, setUserPin] = useState(123456);
    const [progessDisplay, setProgessDisplay] = useState("none");
    const [progessPercentage, setProgessPercentage] = useState(1);
    const [pinText, setPinText] = useState("");


    const [isSmallScreen] = useMediaQuery("(max-width: 767px)");

    // console.log(pinCheck);

    function handelPinCheck(event) {

        console.log(userPin);
        setUserPin((prevState) => {
            return event.target.value
        })

    }

    function handlePinSubmit(event) {
        event.preventDefault();

        setPinText((prevState) => "")

        setPincheck(true);

        setProgessDisplay("block")

        const id = setInterval(() => {
            setProgessPercentage((prevState) => {
                return prevState += 33;
            })
        }, 500);

        let pinSearch = pinCodeData.filter((pins) => {
            console.log("pins", pins, userPin)
            return pins.pinCode == userPin;
        })

        if (pinSearch.length >= 1) {

            setTimeout(() => {
                clearInterval(id); setProgessDisplay("none"); setProgessPercentage(0);
                setPinText((prevState) => "Great News! We now deliver to your area!")
            }, 2000)
            setPincheck(false);
            console.log("Great News! We now deliver to your area!")
            return;
        } else {

            setTimeout(() => {
                clearInterval(id); setProgessDisplay("none"); setProgessPercentage(0);
                setPinText((prevState) => "Sorry We are currently not delivering to your area :(")
            }, 2000)
            setPincheck(false);
            console.log("Sorry We no deliver to your area :(")

        }
        console.log(pinSearch)

    }


    return (<Box padding="3rem 3rem">
        {/* Jai Shree Ram */}

        <SimpleGrid gap={10} columns={[1, 1, 2]}>
            <Box>
                {isSmallScreen ? (
                    <Carousel showArrows={true}>
                        {data[0].img.map((ele, index) => (
                            <div key={index}>
                                <Image src={ele.img} alt={ele.img} />
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
                        {data[0].img.map((ele, index) => (
                            <Box key={index}>
                                <Image src={ele.img} alt={ele.img} />
                            </Box>
                        ))}
                    </SimpleGrid>
                )}
            </Box>
            <VStack spacing={10}>
                <Box p={4} bg="white" borderWidth="1px" borderRadius="md" boxShadow="md">
                    <Stack direction={{ base: "column", lg: "column" }} align={{ base: "stretch", lg: "center" }} justify={{ base: "center", lg: "space-between" }}>
                        <Stack w="100%" direction="row" align="center" justify="space-between" flex="1" >
                            <Heading as="h2" size="md" mr={2}>
                                SYMFONISK
                            </Heading>
                            <IconButton aria-label="Favorite" icon={<AiOutlineHeart />} variant="ghost" />
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
                                <option value="1">Choose Color</option>
                                <option value="2">Black</option>
                                <option value="3">White</option>
                                <option value="4">Blue</option>
                                <option value="5">Gold</option>
                            </Select>
                        </Box>
                    </Stack>
                    <HStack>
                        <Image src="https://imgpile.com/images/hwWJv1.jpg" />
                    </HStack>
                </Box>

                <Divider />
                <Box>
                    <form onSubmit={handlePinSubmit}>
                        <HStack>
                            <Input variant="flushed" placeholder="Enter pincode" onChange={handelPinCheck} />
                            <Button type="submit" bg={"blackAlpha.900"} isLoading={pinCheck}
                                loadingText='Checking'
                                colorScheme='blackAlpha'
                                borderRadius="18px"
                                size="sm"
                            >Check</Button>
                        </HStack>
                    </form>
                    <Box p="1rem 0rem"  >
                        <Progress display={progessDisplay} colorScheme='facebook' size='lg' value={progessPercentage} />
                    </Box>
                    <Box textAlign={"center"} >
                        <Heading fontSize="20px">{pinText}</Heading>
                    </Box>
                    <Box  >
                        <Text display={progessDisplay == "none" ? "block" : "none"}  >Please enter pin code to check home delivery availability.</Text>
                    </Box>

                </Box>
                <HStack w="100%" justify={"center"}>
                    <Button size="lg" w="75%" bg="#0058A3" colorScheme="blue" borderRadius="22px" >Add to bag</Button>
                </HStack>
                <VStack>
                    <Text>
                        WiFi speaker and a picture frame in one makes the sound blend into the home. Choose from various interchangeable fronts, hang SYMFONISK on the wall or put it on the floor. Then enjoy fantastic sound – a collaboration between IKEA and Sonos!
                    </Text>
                </VStack>

            </VStack>
        </SimpleGrid>
        <DynamicProducts />
    </Box >);
}

export default SingleProduct;