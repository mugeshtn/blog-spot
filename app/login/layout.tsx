import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

interface layoutProps{
    children: React.ReactNode
}

const layout = ({ children }: layoutProps) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default layout
