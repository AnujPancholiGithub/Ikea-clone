import {Box,Heading,Text,Flex,Img,Button,Input} from "@chakra-ui/react"
import {DeleteIcon} from "@chakra-ui/icons"

function Payment() {

return (
    <Box className="parent-payment-box"  w = "70%" margin="auto">
        <Box marginTop="4" marginBottom = "4">
        <img src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg" alt="IKEA" />
        </Box>
        <Box>
            <Heading>Your Shopping Cart</Heading>
            <Box marginLeft="40%" bg="white" marginRight="10" marginTop="20px">
                <Text>1 Products in shopping cart</Text>
                <Flex justifyContent="space-between"><Text >Delivery fee/Picking fee</Text> <Text >Rs. 100</Text></Flex>
                <Text>____________________________________________________________________________________</Text>

                <Flex justifyContent="space-between">
                    <Heading size={8}>Total amount:</Heading> 
                    <Box textAlign="right">
                        <Heading size={8}>Rs. 249</Heading>
                        <Text>All prices are inclusive of taxes</Text>
                    </Box> 
                </Flex>
            </Box>
            <Button marginLeft="85%"  bg="#0274cb" color="white" marginTop="4"> Place order</Button>
        </Box>

        <Box boxShadow ="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" marginTop={10} padding = "1%">
            <Flex justifyContent="space-evenly">
                <Img src="https://www.ikea.com/in/en/images/products/oebonaes-triple-hook-with-suction-cup-grey-green__1150589_pe884628_s3.jpg" w = "200px" h = "200px"></Img>
                <Box>
                    <Heading size={10}>ÖBONÄS</Heading>
                    <Text>TV storage combination/glass doors</Text>
                    <Text color="#9a9693" fontSize='sm'>Special discount</Text>
                    <Heading size={10} color = "red">Rs. 149</Heading>
                    <Heading size={10} textDecoration = "line-through">Rs. 219</Heading>
                    <Text color="#9a9693" fontSize='xs'>Lappviken/Sindvik white stained oak eff clear glass</Text>
                    <Text color="#9a9693" fontSize='xs'>Article no: 491.853.42</Text>
                </Box>
                <Flex justifyContent="space-between" gap="10px" alignItems="center"><Text>Total :</Text> <Heading size={8} color = "red">Rs. 149</Heading></Flex>
            </Flex>
            <Button marginLeft="85%" bgColor="white"> <DeleteIcon fontSize={20}></DeleteIcon>Remove</Button>
        </Box>


        <Flex marginTop={10} alignItems = "center" marginBottom={5}>
            <Box w="50%">
            <Text>Add your promo/coupon code here</Text>
                <Flex justifyContent="space-evenly" alignItems="center" gap="10px" w = "50%">
                    <Input htmlSize={4} width='auto' placeholder="Apply Coupon Code" fontSize="sm" w = "100%"/>
                    <Button bgColor="whiteSmoke" size="sm">Apply</Button>
                </Flex>
                <Text>Only one promo/coupon code per order</Text>
            </Box>

            <Box justifyContent="center">
                <Heading fontSize="x-large" marginBottom={5} >Order summary</Heading>
                <Flex justifyContent="space-between">
                    <Box padding={5} marginLeft = "-20px">
                        <Heading fontSize="sm">Order value:</Heading>
                        <Text fontSize="sm">Delivery fee/Picking fee: </Text>
                    </Box>
                    <Box padding={5}>
                        <Heading fontSize="sm">Rs. 149</Heading>
                        <Text fontSize="sm">100</Text>
                    </Box>
                </Flex>
                <Text>.................................................................................................................</Text>
                <Text>___________________________________________________________</Text>

                <Flex justifyContent="space-between" alignItems="center" marginBottom={5}>
                    <Heading fontSize="lg">Total amount:</Heading>
                    <Box><Heading fontSize="lg" marginLeft="50%">Rs. 249</Heading> <Text fontSize="xs">All prices are inclusive of taxes</Text></Box>
                </Flex>


                <Flex justifyContent="space-evenly" marginBottom={1}>
                    <Img src="https://s3-eu-west-1.amazonaws.com/cncdeploy/images/in/visa.png"/>
                    <Img src="https://s3-eu-west-1.amazonaws.com/cncdeploy/images/in/master_card.png"/>
                    <Img src="https://s3-eu-west-1.amazonaws.com/cncdeploy/images/in/maestro.png"/>
                    <Img src="https://s3-eu-west-1.amazonaws.com/cncdeploy/images/in/rupay.png"/>
                    <Img src="https://s3-eu-west-1.amazonaws.com/cncdeploy/images/in/upi.png"/>
                    <Img src="https://s3-eu-west-1.amazonaws.com/cncdeploy/images/in/eWallet.png"/>
                    <Img src="https://s3-eu-west-1.amazonaws.com/cncdeploy/images/in/axp.png"/>
                    <Img src="https://s3-eu-west-1.amazonaws.com/cncdeploy/images/in/diners.png"/>
                </Flex>
                <Text marginLeft="35%" fontSize="sm">We accept the above payment methods</Text>

                <Button marginLeft="85%"  bg="#0274cb" color="white" marginTop="4"> Place order</Button>
            </Box>
        </Flex>
        <Flex gap="20px" justifyContent="space-between" marginTop="50px">
            <Flex alignItems="center" justify="space-between"gap="20px" padding="20px" boxShadow= "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px">
                <Img src="https://cncdeploy.s3-eu-west-1.amazonaws.com/images/in/delivery.png"></Img>
                <Box>
                    <Heading fontSize="sm">Our Delivery Service</Heading>
                    <Text>Safe & contact-less delivery according to government permission.</Text>
                </Box>
            </Flex>
            <Flex alignItems="center" justify="space-between"gap="20px" padding="20px" boxShadow= "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px">
                <Img src="https://cncdeploy.s3-eu-west-1.amazonaws.com/in/2.4.125.8.2.1/prod/png/returns.png"></Img>
                <Box>
                    <Heading fontSize="sm">Our Return Policy</Heading>
                    <Text>We have made some updates to our return policy due to the COVID 19 situation.</Text>
                </Box>
            </Flex>
            <Flex alignItems="center" justify="space-between"gap="20px" padding="20px" boxShadow= "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px">
                <Img src="https://cncdeploy.s3-eu-west-1.amazonaws.com/images/in/assembly.png"></Img>
                <Box>
                    <Heading fontSize="sm">Our Assembly Service</Heading>
                    <Text>Sometimes it is nice to have someone else assemble it for you.</Text>
                </Box>
            </Flex>
        </Flex>

        <Box marginTop="20px">We use the latest technology to encrypt all personal information which you submit through our site or checkout.</Box>

        <Box marginTop="40px" bg="#666666" color="white" fontSize="xs" h={10} alignItems="center" padding={3}><Text marginLeft="5px">© Inter IKEA Systems B.V. 2009 - 2022 | Terms of service | FAQ | Privacy | Use of cookies</Text></Box>
    </Box>
)
}

export default Payment;