import { useParams } from "react-router-dom";
import Beer from "../components/Beer";

function BeerDetailsPage() {
  const params = useParams();
  return <Beer id={params.beerId} />;
}

export default BeerDetailsPage;
