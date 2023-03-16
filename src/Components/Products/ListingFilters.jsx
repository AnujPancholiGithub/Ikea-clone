import { Box, HStack, Select, Switch } from "@chakra-ui/react";


let optionStyles = {
    fontSize: "14px",

}


function ListingFilters() {
    return (<Box>
        <HStack spacing={15} p="20px 0px" justify="space-between">
            <HStack spacing={30}>
                <Select variant="filled" bg="RGBA(0, 0, 0, 0.06)" borderRadius="20px" placeholder='Sort' size='md' >
                    <option style={optionStyles} value='option1'>Low to High</option>
                    <option style={optionStyles} value='option2'>High to Low</option>
                </Select>
                <Select variant="filled" bg="RGBA(0, 0, 0, 0.06)" borderRadius="20px" placeholder='Price' size='md' >
                    <option value='option1'>0 - 999</option>
                    <option value='option1'>1000 - 4999</option>
                    <option value='option1'>5000 - 9999</option>
                    <option value='option1'>10000 - 99999</option>
                    <option value='option1'>100000 - 999999</option>

                </Select>
                <Select variant="filled" bg="RGBA(0, 0, 0, 0.06)" borderRadius="20px" placeholder='Size' size='md' >         <option value='option1'>Short</option>
                    <option value='option1'>Medium</option>
                    <option value='option2'>Large</option>
                    <option value='option2'>X-Large</option>
                </Select>
                <Select variant="filled" bg="RGBA(0, 0, 0, 0.06)" borderRadius="20px" placeholder='Material' size='md' >
                    <option value='option1'>Wood</option>
                    <option value='option1'>Soft</option>
                    <option value='option2'>Metal</option>
                    <option value='option2'>Not-Valid</option>
                </Select>

            </HStack>
            <HStack>
                <Switch size='md' />
            </HStack>
        </HStack>
    </Box >);
}

export default ListingFilters;