import React from 'react'
import {
    Box, Flex, Heading, Input, Text, Button, FormControl, FormLabel,
    FormErrorMessage,
    FormHelperText,
    Image, Checkbox, InputGroup, Grid, GridItem, Radio, RadioGroup, Stack, InputLeftAddon
} from '@chakra-ui/react';
import { useState } from 'react';
import { ArrowBackIcon, InfoIcon, ViewIcon, WarningIcon } from '@chakra-ui/icons'
 import { Link } from 'react-router-dom';




export default function Signup() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [show, setShow] = useState(false)
    const [first, setfirst] = useState("")
    const [surname, setsurname] = useState("")
    const [mobile, setmobile] = useState("")

    const handleClick = () => setShow(!show)

    const handleemailChange = (e) => setemail(e.target.value)
    const handlepasswordChange = (e) => setpassword(e.target.value)
    const handlefirstChange = (e) => setfirst(e.target.value)
    const handlesurnameChange = (e) => setsurname(e.target.value)
    const handleMobileChange = (e) => setmobile(e.target.value)


    const isError1 = email === ''
    const isError2 = password === ''
    const isError3 = first === ''
    const isError4 = surname === ''
    const isError5 = mobile === ''

    return (
        <Flex w="100vw" h="210vh">
            <Box w="40vw">
                <Flex direction="column" padding="30px" h="200vh" W="100%">
                    <Flex gap="50px" alignItems="center">
                        <ArrowBackIcon cursor="pointer" fontSize="25px" />
                        <Image h="36px" w="90px" src='https://in.accounts.ikea.com/resources/static/logo.png' />
                    </Flex>
                    <Box marginLeft="5vw" h="200vh" W="100%" mt="20px">
                        <Heading fontSize="32px" display="flex" color="black">Create an IKEA Profile </Heading>
                        
                        <br />
                        <Text fontSize="14px" fontWeight="500" >Already have an account? <Link textDecoration="underline" to="/login">Login</Link></Text>
                        <br />
                        <Grid mt="20px" w="100%"
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
                            <GridItem pl='2' area={'A'} >
                                <Image h="100%" w="100%" objectFit="cover" borderRadius="5px" src='	https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_1.jpg' />
                            </GridItem>
                            <GridItem pl='2' area={'B'} >
                                <Image h="100%" w="100%" objectFit="cover" borderRadius="5px" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_2.jpg' />
                            </GridItem>
                            <GridItem pl='2' area={'C'}>
                                <Image h="100%" w="100%" objectFit="cover" borderRadius="5px" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_3.jpg' />
                            </GridItem>
                            <GridItem pl='2' area={'D'}>
                                <Image h="300px" w="100%" objectFit="cover" borderRadius="5px" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_4.jpg' />
                            </GridItem>
                            <GridItem pl='2' area={'E'}>
                                <Image h="100%" w="100%" objectFit="cover" borderRadius="5px" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_5.jpg' />
                            </GridItem>
                            <GridItem pl='2' area={'F'}>
                                <Image h="100%" w="100%" objectFit="cover" borderRadius="5px" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_6.jpg' />
                            </GridItem>
                            <GridItem pl='2' area={'G'}>
                                <Image h="100%" w="100%" objectFit="cover" borderRadius="5px" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_7.jpg' />
                            </GridItem>
                            <GridItem pl='2' area={'H'}>
                                <Image h="100%" w="100%" objectFit="cover" borderRadius="5px" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_8.jpg' />
                            </GridItem>
                            <GridItem pl='2' area={'I'} >
                                <Image h="300px" w="100%" objectFit="cover" borderRadius="5px" src='https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGES_9.jpg' />
                            </GridItem>
                        </Grid>
                        <Box mt="40px" >
                            <Text fontSize="11px" fontWeight="500" color="black">IKEA.in - <Link textDecoration="underline">Cookie Policy</Link> and <Link textDecoration="underline">Privacy Policy</Link> <br />
                                © Inter IKEA Systems B.V. 1999-2023</Text>
                        </Box>
                    </Box>

                </Flex>

            </Box>

            <Box w="60vw" mt="30px" marginLeft="5vw">
                <Flex direction="column" padding="30px" h="200vh" W="100%"  >
                    <Text fontWeight="700" fontSize="14px">Become a member of IKEA Family today. Did we mention it's <br />free to join?</Text>
                    <RadioGroup defaultValue='2'>
                        <Stack>
                            <Radio fontSize="14px" value='1' mt="20px" mb="15px">
                                Yes, I want to enjoy discounts, previews and a lot more! <br /> <Link textDecoration="underline">Get the details</Link>
                            </Radio>
                            <Radio fontSize="14px" value='2' >No thanks, I just want to create an IKEA account today. <br /> Maybe another day. <Link textDecoration="underline">Get the details</Link></Radio>
                        </Stack>
                    </RadioGroup>

                    <FormControl isInvalid={isError1} mt="40px">
                        <FormLabel>First name</FormLabel>
                        <Input type='text' w="28vw" minHeight="3rem" value={first} onChange={handlefirstChange} />
                        {!isError3 ? (
                            <FormHelperText>

                            </FormHelperText>
                        ) : (
                            <FormErrorMessage color="#e00751" line-height="1.5" fontWeight="500"> <WarningIcon color="#e00751" /> Your First name is required. </FormErrorMessage>
                        )}

                        <FormLabel mt="30px">Surname</FormLabel>
                        <Input type='text' w="28vw" minHeight="3rem" value={surname} onChange={handlesurnameChange} />
                        {!isError4 ? (
                            <FormHelperText>

                            </FormHelperText>
                        ) : (
                            <FormErrorMessage color="#e00751" line-height="1.5" fontWeight="500"> <WarningIcon color="#e00751" /> Your Surname is required. </FormErrorMessage>
                        )}

                        <FormLabel mt="30px">Mobile</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children='IN(+91)' minHeight="3rem" bg="white" border="2px solid #e00751" />
                            <Input w="22vw" minHeight="3rem" value={mobile} onChange={handleMobileChange} type='number' />
                        </InputGroup>
                        {!isError5 ? (
                            <FormHelperText>

                            </FormHelperText>
                        ) : (
                            <FormErrorMessage color="#e00751" line-height="1.5" fontWeight="500"> <WarningIcon color="#e00751" /> Your Mobile is required. </FormErrorMessage>
                        )}

                        <FormLabel mt="30px">Email (username)</FormLabel>
                        <Input type='email' w="28vw" minHeight="3rem" value={email} onChange={handleemailChange} />
                        {!isError1 ? (
                            <FormHelperText>

                            </FormHelperText>
                        ) : (
                            <FormErrorMessage color="#e00751" line-height="1.5" fontWeight="500"> <WarningIcon color="#e00751" /> Your Email (username) is required. </FormErrorMessage>
                        )}

                        <FormLabel mt="30px">Password</FormLabel>
                        <InputGroup size='md'>
                            <Input w="28vw" minHeight="3rem"
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                onChange={handlepasswordChange}
                                wsdeewse
                            />

                            <ViewIcon onClick={handleClick} marginLeft="-30px" zIndex="10" h="24px" w="24px" marginTop="12px" cursor="pointer" />

                        </InputGroup>

                        {!isError2 ? (
                            <>

                            </>
                        ) : (
                            <FormErrorMessage color="#e00751" line-height="1.5" fontWeight="500"> <WarningIcon color="#e00751" />Your Password is required. </FormErrorMessage>
                        )}

                        <Checkbox mt="30px"  spacing="20px">I would like to receive news, tips and marketing offers from <br /> IKEA.</Checkbox>
                        <br />
                        <Checkbox mt="30px"  spacing="20px">Via email</Checkbox>
                        <br />
                        <Checkbox mt="10px"  spacing="20px">Via SMS</Checkbox>
                        <br />
                        <Checkbox mt="10px"  spacing="20px">Via direct mail</Checkbox>
                        <br />
                        <Checkbox mt="30px"  spacing="20px">I have read and understood the <Link textDecoration="underline">Privacy Policy.</Link>  </Checkbox>

                        <br />
                        <Button marginTop="40px" colorScheme='#0058a3' bg='#111111' color="white" padding="0px 32px" borderRadius="64px" fontWeight="700" minHeight="3.5rem" w="28vw">Continue to phone verification</Button>
                    </FormControl>

                </Flex>

            </Box>
        </Flex>
    )
}
