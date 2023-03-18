import React from 'react'
import {
    Box, Flex, Heading, Input, Text, Button, FormControl, FormLabel,
    FormErrorMessage,
    FormHelperText,
    Image, Link, Checkbox, InputRightElement, InputGroup, Tooltip
} from '@chakra-ui/react';
import { useState } from 'react';
import { ArrowBackIcon, InfoIcon, ViewIcon, WarningIcon } from '@chakra-ui/icons'

export default function Signup() {
    return (
        <Flex h="100vh" w="100vw">
            <Box h="100vh" w="40vw">
                <Flex direction="column" w="50vw" padding="30px">
                    <Flex gap="50px" alignItems="center">
                        <ArrowBackIcon cursor="pointer" fontSize="25px" />
                        <Image h="36px" w="90px" src='https://in.accounts.ikea.com/resources/static/logo.png' />
                    </Flex>
                    <Box marginLeft="5vw" >
                        <Heading fontSize="32px" display="flex" color="black">Create an &nbsp; <Text color="#0058a3">IKEA Family</Text></Heading>
                        <Heading fontSize="32px" color="black">Profile</Heading>
                        <br />
                        <Text fontSize="14px" fontWeight="500" >Already have an account? <Link textDecoration="underline">Login</Link></Text>
                        <br />
                        <Text fontSize="14px" fontWeight="500" color="white">Access your IKEA account using your email address to add <br /> and verify your mobile number.</Text>
                    </Box>
                    <Box marginLeft="5vw">
                        <Text fontSize="11px" fontWeight="500" color="white">IKEA.in - <Link textDecoration="underline">Cookie Policy</Link> and <Link textDecoration="underline">Privacy Policy</Link> <br />
                            © Inter IKEA Systems B.V. 1999-2023</Text>
                    </Box>
                </Flex>
            </Box>

            <Box>

            </Box>
        </Flex>
    )
}
