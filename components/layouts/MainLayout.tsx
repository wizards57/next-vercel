import Head from 'next/head'
import styles from './Main.module.css'
import { NavBar } from '../NavBar'
import { PropsWithChildren, FC } from 'react';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home Fernando</title>
                <meta name="description" content="Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}