import { Box, Center } from "@chakra-ui/react"
import Logo from '@Components/Logo'

function Header() {
    return (
        <Center py="3" borderBottom="1px" borderColor="gray.200" minH="80px">
            <Box>
                <Logo />
            </Box>
        </Center>
    )
}

export default Header