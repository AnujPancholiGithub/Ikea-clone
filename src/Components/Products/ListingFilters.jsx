import { Box, HStack, Select, Switch } from "@chakra-ui/react";


function ListingFilters() {
    return (<Box>
        <HStack spacing={15} p="20px 0px" justify="space-between">
            <HStack>
                <Select variant="filled" bg="RGBA(0, 0, 0, 0.06)" borderRadius="20px" placeholder='Sort' size='md' />
                <Select variant="filled" bg="RGBA(0, 0, 0, 0.06)" borderRadius="20px" placeholder='Price' size='md' />
                <Select variant="filled" bg="RGBA(0, 0, 0, 0.06)" borderRadius="20px" placeholder='Size' size='md' />
                <Select variant="filled" bg="RGBA(0, 0, 0, 0.06)" borderRadius="20px" placeholder='Material' size='md' />
                <Select variant="filled" bg="RGBA(0, 0, 0, 0.06)" borderRadius="20px" placeholder='All filters' size='md' />
            </HStack>

            <HStack>
                <Switch size='md' />
            </HStack>
        </HStack>
    </Box>);
}

export default ListingFilters;