const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="flex bg-red-500 text-white shadow-inner justify-center items-center p-2.5">
        <p>HECTAFX &copy; {new Date().getFullYear()} Forex Trading Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
