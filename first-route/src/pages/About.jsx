import { useParams } from "react-router";

const About = () => {
    const params = useParams()
    console.log("params", params)
  return (
    <div>About</div>
  )
}

export default About