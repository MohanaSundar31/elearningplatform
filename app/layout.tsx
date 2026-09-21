import type { Metadata, Viewport } from 'next'
import './globals.css'
export const metadata: Metadata={title:'Learnwell — Make room for your next big idea.',description:'Thoughtful, practical courses for curious people.'}
export const viewport: Viewport={colorScheme:'light',themeColor:'#f7f6f2'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
