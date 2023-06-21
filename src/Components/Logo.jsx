import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LogoImg from '@assets/logo.svg'

function Logo() {
    return (
        <Link to="/">
            <Image src={LogoImg} width="200px" height="50px" />
        </Link>
    )
}

export default Logo