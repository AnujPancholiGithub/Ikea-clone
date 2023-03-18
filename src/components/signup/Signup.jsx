import React from 'react'
import {
    Box, Flex, Heading, Input, Text, Button, FormControl, FormLabel,
    FormErrorMessage,
    FormHelperText,
    Image, Link, Checkbox, InputRightElement, InputGroup, Tooltip,Grid, GridItem
} from '@chakra-ui/react';
import { useState } from 'react';
import { ArrowBackIcon, InfoIcon, ViewIcon, WarningIcon } from '@chakra-ui/icons'




export default function Signup() {
    return (
        <Flex  w="100vw" h="200vh">
            <Box w="40vw">
                <Flex direction="column"  padding="30px" h="200vh" W="100%">
                    <Flex gap="50px" alignItems="center">
                        <ArrowBackIcon cursor="pointer" fontSize="25px" />
                        <Image h="36px" w="90px" src='https://in.accounts.ikea.com/resources/static/logo.png' />
                    </Flex>
                    <Box marginLeft="5vw" h="200vh" W="100%">
                        <Heading fontSize="32px" display="flex" color="black">Create an &nbsp; <Text color="#0058a3">IKEA Family</Text></Heading>
                        <Heading fontSize="32px" color="black">Profile</Heading>
                        <br />
                        <Text fontSize="14px" fontWeight="500" >Already have an account? <Link textDecoration="underline">Login</Link></Text>
                        <br />
                        <Grid w="100%"
                            templateAreas={`"A E"
                                             "A F"
                                             "B F"
                                             "B G"
                                             "C G"
                                             "C H"
                                             "D H"
                                             "D I"
                                             "S I"`}
                            // gridTemplateRows={'180px 1fr 180px'}
                            // gridTemplateColumns={'150px 1fr'}
                         
                            gap='5'
                            color='blackAlpha.700'
                            fontWeight='bold'>
                            <GridItem pl='2'  area={'A'} >
                               <Image h="100%" w="100%" objectFit="cover" src='	https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_1.jpg'/>
                            </GridItem>
                            <GridItem pl='2'  area={'B'} >
                                <Image h="100%" w="100%" objectFit="cover" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_2.jpg'/>
                            </GridItem>
                            <GridItem pl='2'  area={'C'}>
                                 <Image h="100%" w="100%" objectFit="cover" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_3.jpg'/>
                            </GridItem>
                            <GridItem pl='2' area={'D'}>
                               <Image h="100%" w="100%" objectFit="cover" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_4.jpg'/>
                            </GridItem>
                            <GridItem pl='2'  area={'E'}>
                                <Image h="100%" w="100%" objectFit="cover" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_5.jpg'/>
                            </GridItem>
                            <GridItem pl='2'  area={'F'}>
                                <Image h="100%" w="100%" objectFit="cover" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_6.jpg'/>
                            </GridItem>
                            <GridItem pl='2'  area={'G'}>
                                <Image  h="100%" w="100%" objectFit="cover" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_7.jpg'/>
                            </GridItem>
                            <GridItem pl='2'  area={'H'}>
                                 <Image h="100%" w="100%" objectFit="cover" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_8.jpg'/>
                            </GridItem>
                            <GridItem pl='2'  area={'I'} >
                                <Image h="100%" w="100%" objectFit="cover" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_9.jpg'/>
                            </GridItem>
                        </Grid>
                    </Box>
                    
                </Flex>
                {/* <Box marginLeft="5vw">
                        <Text fontSize="11px" fontWeight="500" >IKEA.in - <Link textDecoration="underline">Cookie Policy</Link> and <Link textDecoration="underline">Privacy Policy</Link> <br />
                            © Inter IKEA Systems B.V. 1999-2023</Text>
                </Box> */}
            </Box>

            <Box>

            </Box>
        </Flex>
    )
}
