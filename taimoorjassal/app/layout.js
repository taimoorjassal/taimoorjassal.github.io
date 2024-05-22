// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import {Chivo, Comfortaa} from 'next/font/google'
import './globals.css'

const comfortaa = Comfortaa({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-comfortaa',
})
const chivo = Chivo({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-chivo',
})

export default function Layout({children}) {
    return (
        <html lang="en">
        <body className={comfortaa.variable + ' ' + chivo.variable}>
        {children}
        </body>
        </html>
    )
}