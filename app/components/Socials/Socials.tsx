import { ExternalLink } from 'lucide-react';
import { socialLinks } from './socials-links';

export default function Socials() {
  return (
    <div className="p-4 mb-2">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold mb-2">Socials</h2>
        <div className="h-px bg-gradient-to-r from-blue-600/50 to-transparent flex-1 mb-2"></div>
      </div>

      <div className="space-y-2">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="block border rounded-lg p-4 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-r ${link.color}`}
                >
                  {link.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg flex items-center space-x-2">
                    <span>{link.name}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground font-bold">
                    {link.description}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {link.subtitle}
                  </p>
                </div>
              </div>
              <ExternalLink size={16} color="#fff" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
