import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";


function ListingHero() {
    return (<Box >
        <Stack textAlign="left" p="2px">
            <Heading p="10px 0px">Wifi-Speakers</Heading>
            <Text p="10px 0px">What do you get when you combine great home furnishing knowledge with sound expertise? The answer is SYMFONISK, an all-new sound range created by Sonos and IKEA. Release the sweet sound of your home with a table lamp and bookshelf speakers that have high-quality WiFi sound.</Text>
            <Link >Learn even more about SYMFONISK WiFi speakers</Link>
        </Stack>
    </Box >);
}

export default ListingHero;