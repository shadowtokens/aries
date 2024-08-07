import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import vars from '@/styles/variables.module.scss';
import styles from './_style/layout.module.scss'

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Aries",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={styles.body}>{children}</body>
        </html>
    );
}
