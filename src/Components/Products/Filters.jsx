import { Box, HStack, Select, Switch } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { filterAction, sortAction } from "../../Redux/products/actions";

let optionStyles = {
    fontSize: "14px",

}

function ListingFilters() {

    const dispatch = useDispatch();

    const handleFilterChange = (event) => {
        dispatch(filterAction(event.target.value));
    };

    const handleSortChange = (event) => {
        dispatch(sortAction(event.target.value));
    };


    return (<Box>
        <HStack spacing={15} p="20px 0px" justify="space-between">
            <HStack spacing={30}>
                <Select onChange={handleSortChange} variant="filled" bg="RGBA(0, 0, 0, 0.06)" borderRadius="20px" placeholder='Sort' size='md' >
                    <option style={optionStyles} value='L2H'>Low to High</option>
                    <option style={optionStyles} value='H2L'>High to Low</option>
                </Select>
                <Select variant="filled" bg="RGBA(0, 0, 0, 0.06)" borderRadius="20px" placeholder='Price' size='md' >
                    <option value='option1'>0 - 999</option>
                    <option value='option1'>1000 - 4999</option>
                    <option value='option1'>5000 - 9999</option>
                    <option value='option1'>10000 - 99999</option>
                    <option value='option1'>100000 - 999999</option>

                </Select>
                <Select onChange={handleFilterChange} variant="filled" bg="RGBA(0, 0, 0, 0.06)" borderRadius="20px" placeholder='Size' size='md' >
                    <option value="Small">Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='XL'>X-Large</option>
                </Select>
                <Select onChange={handleFilterChange} variant="filled" bg="RGBA(0, 0, 0, 0.06)" borderRadius="20px" placeholder='Material' size='md' >
                    <option value='Wood'>Wood</option>
                    <option value='Soft'>Soft</option>
                    <option value='Metal'>Metal</option>
                    {/* <option value='Gold'>Gold</option> */}
                </Select>

            </HStack>
            <HStack>
                <Switch size='md' />
            </HStack>
        </HStack>
    </Box >);
}

export default ListingFilters;