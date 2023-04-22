import Link from "next/link";
import styles from './Navbar.module.css'
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const style:CSSProperties = {

    color: '#0070f3',
    textDecoration: 'underline',
    

}

interface Props{
    text: string;
    href: string;
}

export const ActiveLink: FC<Props> = ({ text = "", href }) => {

    const { asPath } = useRouter();
    console.log(asPath, href);
    return (
        <Link style={asPath === href ? style : undefined} href={href}>{text}</Link>


    )
};