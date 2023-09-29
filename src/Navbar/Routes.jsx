function Routes() {
  const routes = [
    "Home",
    "Planning Tools",
    "Venues",
    "Vendors",
    "Inspiration",
    "About Us",
  ];
  const routesMap = routes.map((route) => {
    return (
      <li>
        <a
          href="#"
          className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-slate-950"
          aria-current="page"
        >
          {route}
        </a>
      </li>
    );
  });
  return <>{routesMap}</>;
}

export default Routes;
