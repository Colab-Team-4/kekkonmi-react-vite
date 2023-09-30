function NavLinks() {
  const routes = [
    "Home",
    "Planning Tools",
    "Venues",
    "Vendors",
    "Inspiration",
    "About Us",
  ];
  return (
    <div className="flex gap-10">
      {routes.map((route, i) => (
        <li key={i}>
          <a
            href="#"
            className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-slate-950"
            aria-current="page"
          >
            {route}
          </a>
        </li>
      ))}
    </div>
  );
}

export default NavLinks;
