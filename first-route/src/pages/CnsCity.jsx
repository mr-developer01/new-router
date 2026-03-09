import { useParams } from "react-router";

const CnsCity = () => {
    const parms = useParams();
    console.log("parms", parms);
  return (
    <div>My city : {parms.city}</div>
  )
}

export default CnsCity