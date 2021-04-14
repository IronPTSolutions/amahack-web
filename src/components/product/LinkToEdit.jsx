import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export default function LinkToEdit({ productUser, productId }) {
  const { user } = useUser();
  return (
    <div className="LinkToEdit">
      {user?.id === productUser && (
        <Link to={`/products/${productId}/edit`} className="btn btn-primary">
          Edit
        </Link>
      )}
    </div>
  );
}
