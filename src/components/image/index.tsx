import NextImage from "next/image"
import { HTMLAttributes, Ref, forwardRef } from "react"

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string
  width: string
  height: string
  alt?: string
}

const Image = forwardRef(
  (
    { src, width, height, alt, ...props }: ImageProps,
    ref: Ref<HTMLImageElement>,
  ) => {
    return (
      <NextImage
        ref={ref}
        src={src}
        alt={alt || ""}
        width={0}
        height={0}
        style={{ width, height }}
        {...props}
      />
    )
  },
)

export default Image
