import React from 'react'
import {
    Box, Flex, Heading, Input, Text, Button, FormControl, FormLabel,
    FormErrorMessage,
    FormHelperText,
    Image, Link, Checkbox, InputRightElement, InputGroup, Tooltip
} from '@chakra-ui/react';
import { useState } from 'react';
import { ArrowBackIcon, InfoIcon, ViewIcon, WarningIcon } from '@chakra-ui/icons'


export default function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show)

    const handleemailChange = (e) => setemail(e.target.value)
    const handlepasswordChange = (e) => setpassword(e.target.value)

    const isError1 = email === ''
    const isError2 = password === ''


    return (
        <Flex h="100vh" w="100vw">
            <Box h="100vh" w="40vw" bg="#0058a3">
                <Flex direction="column" justifyContent="space-between" h="100vh" w="50vw" padding="30px">
                    <Flex gap="50px" alignItems="center">
                        <ArrowBackIcon color="white" cursor="pointer" fontSize="25px" />
                        <Image h="44px" w="88px" src='https://in.accounts.ikea.com/resources/static/logo.svg' />
                    </Flex>
                    <Box marginLeft="5vw">
                        <Heading fontSize="32px"  display="flex" color='white'> <Text color="#fbd914">Login</Text>&nbsp; to your IKEA</Heading>
                        <Heading fontSize="32px" color="white">account.</Heading>
                        <br />
                        <Text fontSize="14px" fontWeight="500" color='white'>Too many passwords? <br />
                            You can now login with an OTP we will send on your email <br /> address or verified mobile number.</Text>
                            <br />    
                        <Text fontSize="14px" fontWeight="500" color="white">Access your IKEA account using your email address to add <br /> and verify your mobile number.</Text>
                    </Box>
                    <Box marginLeft="5vw">
                        <Text fontSize="11px" fontWeight="500" color="white">IKEA.in - <Link textDecoration="underline">Cookie Policy</Link> and <Link textDecoration="underline">Privacy Policy</Link> <br />
© Inter IKEA Systems B.V. 1999-2023</Text>
                    </Box>
                </Flex>
            </Box >

            <Box h="100vh" w="60vw" display="flex" flexDirection="column" justifyContent="space-around" marginLeft="5vw" padding="30px">
                <FormControl isInvalid={isError1}>
                    <FormLabel>Email or Verified Mobile Number</FormLabel>
                    <Input type='email' w="28vw" minHeight="3rem" value={email} onChange={handleemailChange} />
                    {!isError1 ? (
                        <FormHelperText>

                        </FormHelperText>
                    ) : (
                        <FormErrorMessage color="#e00751" line-height="1.5" fontWeight="500"> <WarningIcon color="#e00751"/> Please enter your Email or Verified mobile number to continue.</FormErrorMessage>
                    )}
                    <Text fontWeight="500">Login <Link fontWeight="700" textDecoration="underline">with an OTP</Link></Text>

                    <FormLabel marginTop="24px">Password</FormLabel>
                    <InputGroup size='md'>
                        <Input w="28vw" minHeight="3rem"
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            onChange={handlepasswordChange}
                            wsdeewse
                        />

                        <ViewIcon onClick={handleClick} marginLeft="-30px" zIndex="10" h="24px" w="24px" marginTop="12px" cursor="pointer"/>
                        
                    </InputGroup>

                    {!isError2 ? (
                        <>

                        </>
                    ) : (
                        <FormErrorMessage color="#e00751" line-height="1.5" fontWeight="500"> <WarningIcon color="#e00751"/>Sorry, we can't log you in without a password.</FormErrorMessage>
                    )}

                    <Link fontWeight="600" textDecoration="underline">Forgot your password?</Link>

                    <Flex marginTop="32px" alignItems="center">
                        <Checkbox size="lg" spacing="20px">Stay signed in until you sign out </Checkbox>

                        <Tooltip label="If you stay logged in, you don't have to log in again every time you visit. We recommend that you only use this option on your personal devices." aria-label='A tooltip' placement='top' color="white" bg="black" fontSize=".75rem" minWidth="450px" padding="10px" borderRadius="5px" >
                            <InfoIcon h="20px" w="30px" marginLeft="95px"/>
                        </Tooltip>
                    </Flex>
                    <Button marginTop="26px" colorScheme='#0058a3' bg='#0058a3' color="white" padding="0px 32px" borderRadius="64px" fontWeight="700" minHeight="3.5rem" w="28vw">Continue</Button>
                </FormControl>
                <Text fontSize="14.4px" color="black" fontWeight="700" marginTop="48px">Do not have an IKEA account? Create one now:</Text>
                <Button marginTop="32px" border="1px solid black" color="black" padding="0px 32px" borderRadius="64px" fontWeight="700" minHeight="3.5rem" w="28vw">I'm buying for my home</Button>
            
                <Button marginTop="10px" border="1px solid black" color="black" padding="0px 32px" borderRadius="64px" fontWeight="700" minHeight="3.5rem" w="28vw">I'm buying for my company</Button>
            </Box>

        </Flex>
    )
}
