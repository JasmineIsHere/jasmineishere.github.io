const { Heading } = require("./styles")

const HeadingText = ({size="large", children}) => {
  return (
    <Heading $size={size}>{children}</Heading>
  )
}

export default HeadingText;