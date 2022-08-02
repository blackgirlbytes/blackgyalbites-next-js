import Image from 'next/image'
import React from 'react';
const Logo = () => {
    return (
        <div className="flex flex-col items-center sm:justify-center sm:mt-9 sm:flex-row text-justify relative">
            <div className="sm:mr-10 min-w-1/3">
                <Image
                    src="/blackgyalbites-next-js/vector-2.png"
                    alt="Profile"
                    width={454}
                    height={424}
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
        </div>
        // <section className="mt-14 h-full sm:mr-10 min-w-1/5">
        //     < Image layout="responsive" alt="Black Gyal Bites Logo Orange Palm Tree" width={454} height={424} src="/vector-2.png" />
        // </section >

    )
}

export default Logo;
