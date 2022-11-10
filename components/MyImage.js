import React from 'react'

import Image from 'next/image'

export default function MyImage(props) {
  const {src, alt, width, height} = props
  return <Image src={src} alt={alt} width={width} height={height} layout="responsive"/>;
}
