import Link from 'next/link';
import { FC } from 'react';



export const linksHeader = [
    {
        name: "Main Page",
        linkTo: "/",
    },
    {
        name: "SVG + Modal Window",
        linkTo: "/svg",
    }
]



const Header: FC = () => {

    return (
        <>
            <nav>
                <ul className='navigation'>
                    {
                        linksHeader.map((link) => (
                            <li className='nav-item' key={link.name}>
                                <Link href={`${link.linkTo}`}>
                                    <a className='link'>
                                        {link.name}
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>

    )
};

export default Header;
