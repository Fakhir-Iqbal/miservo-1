import React from "react"
import Image from "next/image"

const Icon = ({ src, alt = "No-Icon", height = 200, width = 200, size = 0, className = "w-auto h-auto" }) => {
    return (
        <Image
            className={className}
            alt={alt}
            src={src}
            width={width}
            height={height}
        />
    )
}

export default Icon