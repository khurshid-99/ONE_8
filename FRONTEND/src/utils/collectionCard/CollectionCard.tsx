import { Link } from "react-router";
import { ActiveLifestyleWomen1 } from "../../images";

type CollectionCardProps = {
  to: string;
  name: string;
  img?: string;
  className?: string
};

const CollectionCard = ({
  to,
  name,
  img = ActiveLifestyleWomen1,
  className
}: CollectionCardProps) => {
  return (
    <Link
      to={to}
      className={` inline-block bg-light rounded-8 overflow-hidden ${className} `}
    >
      <div className="w-full aspect-square object-center object-cover ">
        <img
          src={img}
          alt=""
          className="w-full aspect-square object-center object-cover"
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
