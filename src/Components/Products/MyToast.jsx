import { Button, useToast } from "@chakra-ui/react"



function MyToast({ title, desc, status, duration, }) {
    const toast = useToast()
    return (

        toast({
            title: title,
            description: desc,
            status: status,
            duration: duration,
            isClosable: true,
        })

    )
}
export default MyToast;