const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-xs text-gray-500 font-medium py-4">
        © {new Date().getFullYear()} - Built by{" "}
        <a
          href="https://github.com/aldask"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500 hover:text-amber-600 hover:underline font-semibold transition"
        >
          Aldas
        </a>{" "}
        for Peplink
      </p>
    </footer>
  );
};

export default Footer;
