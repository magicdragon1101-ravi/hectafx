import Link from "next/link";

const NavItem = ({ name, link }) => {
  return (
    <li className="relative group hover:text-red-500">
      <Link href={link}>
        <div className="relative leading-[50px] px-5 group">
          <span className="after:absolute after:top-[58px] after:left-0 after:right-0 after:h-0.5 after:bg-red-500 after:scale-x-0 group-hover:after:scale-x-100 after:duration-300 block">
            {name}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
