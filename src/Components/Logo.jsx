import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LogoImg from './assets/logo.svg'

function Logo() {
    return (
        <Link to="/">
            <Image src={LogoImg} width="150px" height="150px" />
        </Link>
    )
}

export default Logo