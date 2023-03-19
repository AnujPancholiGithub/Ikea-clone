import { Box, SkeletonCircle, SkeletonText, Skeleton, Card, SimpleGrid } from "@chakra-ui/react";

let dupli = [1, 2, 3, 4, 5, 6, 7, 8];

function SkletonLoader() {
    return (<Box padding='6' boxShadow='lg' bg='white'>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={10} >
            {dupli.map((e, index) => {
                return (<Card key={index + 1}>
                    <Skeleton startColor='#FDCC29' endColor='#103D99' height='100px' />
                    <Skeleton startColor='blue.800' endColor='yellow.800' height='20px' />
                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                </Card>)
            })}

        </SimpleGrid>
    </Box>);
}

export default SkletonLoader;