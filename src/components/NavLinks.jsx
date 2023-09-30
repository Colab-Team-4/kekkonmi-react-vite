const links = [
  "Home",
  "Planning Tools",
  "Venues",
  "Vendors",
  "Inspiration",
  "About Us",
];

function NavLinks() {
  return (
    <div className="flex gap-10">
      {links.map((link, i) => (
        <li key={i}>
          <a href="#" aria-current="page">
            <p>{link}</p>
          </a>
        </li>
      ))}
    </div>
  );
}

export default NavLinks;
