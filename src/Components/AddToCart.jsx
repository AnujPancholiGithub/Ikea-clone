import { Box, ChakraProvider,Flex,Input,Button,WrapItem,Heading } from "@chakra-ui/react";


function AddToCart() {
    
     
    return (
        <div>
            <Flex width="70%" margin="auto">
            
            <Box  margin = "20" boxShadow="rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" height="500"> 
            <Heading textAlign="left" padding="10">Track & manage my order</Heading>
                <Box  width="70%" padding="20" textAlign="left" boxShadow= "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">The list of past purchases is not currently available. If you have an order number for your purchase, you can still use it to view and manage your order.</Box>
            </Box>
            
            <Box gap="20px" margin = "20" textAlign="start">
            
                
                

                <Box as="input" size="lg" placeholder="Order number" width="100%" margin="auto"boxShadow="rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"></Box>
                9-10 digits with no spaces.
                <Box as="input" size="lg" placeholder="Email address or phone number" width="100%"></Box>
                We'll never share your email.


                <WrapItem>
                    <Button color="white" bg="black" borderRadius="40%" size="lg" w={200} h={40}>Look up order</Button>
                </WrapItem>
            </Box>
            

        </Flex>
        </div>
    )
}

export default AddToCart;