import { Link } from "react-router";


interface CardProps {
  img: string;
  title: string;
  href?: string;
  fn?: () => void;
}

const NavCategoryCatd = ({ img, title, href, fn }: CardProps) => {
  // console.log(key)

  return (
    <Link to={href ?? "/"} onClick={() => fn?.()} className="flex flex-col gap-2 ">
      <div className=" ">
        <img
          src={img}
          alt={title}
          className="w-360p aspect-360/388 object-cover object-center rounded-md"
        />
      </div>
      <span className="text-18 text-dark font-OB leading-16p capitalize ">
        {title}
      </span>
    </Link>
  );
};

export default NavCategoryCatd;
