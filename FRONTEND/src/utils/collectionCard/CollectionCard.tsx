import { Link } from "react-router";
import { ActiveLifestyleWomen1 } from "../../images";

type CollectionCardProps = {
  to: string;
  name: string;
  img?: string;
};

const CollectionCard = ({
  to,
  name,
  img = ActiveLifestyleWomen1,
}: CollectionCardProps) => {
  return (
    <Link
      to={to}
      className="inline-block w-99.5 aspect-398/466 bg-light rounded-sm overflow-hidden "
    >
      <div className="w-full aspect-398/398 object-center object-cover ">
        <img
          src={img}
          alt=""
          className="w-full aspect-398/398 object-center object-cover"
        />
      </div>
      <div className="py-16p px-12p border-b border-x border-light ">
        <h4 className="text-18 text-dark-gray font-OB mb-8p capitalize ">
          {name}
        </h4>
      </div>
    </Link>
  );
};

export default CollectionCard;
