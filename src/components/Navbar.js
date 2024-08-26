const Navbar = ({ children }) => {
  return (
    <nav>
      <ul className="flex">{children}</ul>
    </nav>
  );
};

export default Navbar;
