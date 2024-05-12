import { socialLinks } from "../constants/social";

export default function Footer() {
  return (
    <footer className="px-2 py-10 text-center">
      <div className="flex justify-center gap-2">
        {socialLinks.map(({ icon, label, link }) => (
          <a
            href={link}
            key={label}
            className="opacity-50 hover:opacity-100"
            target="_blank"
          >
            <img src={icon} alt={label} className="size-10"></img>
          </a>
        ))}
      </div>
      <div className="py-4 opacity-50">
        All Right Reserved @ {new Date().getFullYear()}
      </div>
    </footer>
  );
}
