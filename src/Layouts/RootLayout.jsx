import Header from "@Templates/Header";
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default RootLayout