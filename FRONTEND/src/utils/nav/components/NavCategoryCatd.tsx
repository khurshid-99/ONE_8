interface CardProps {
  img: string;
  title: string;
  // key: string | number;
}

const NavCategoryCatd = ({  img, title }: CardProps) => {
  // console.log(key)
  return (
    <div  className="flex flex-col gap-2 ">
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
    </div>
  );
};

export default NavCategoryCatd;
