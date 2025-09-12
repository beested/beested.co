import { Github, Instagram, Linkedin } from 'lucide-react';

export const socialLinks = [
  {
    name: 'Instagram',
    description: 'O Bruno de verdade',
    subtitle: 'Momentos importantes da minha vida de uma vista diferente',
    icon: <Instagram className="w-6 h-6" />,
    url: 'https://instagram.com/ibrunooo_',
    color: 'from-pink-500 to-purple-600',
  },

  {
    name: 'Linkedin',
    description: 'Minha personalidade de terno',
    subtitle: 'O desenvolvimento de carreira e conexões profissionais',
    icon: <Linkedin className="w-6 h-6" />,
    url: 'https://www.linkedin.com/in/bruno-paim-1034381b4/',
    color: 'from-blue-500 to-indigo-800',
  },

  {
    name: 'GitHub',
    description: 'A biblioteca de tudo que eu faço',
    subtitle: 'Projetos reais e experimentais',
    icon: <Github className="w-6 h-6" />,
    url: 'https://github.com/beested',
    color: 'from-dark-500 to-indigo-400',
  },

  {
    name: 'Discord',
    description: 'Vai ser respondido na hora',
    subtitle: 'Agora mesmo',
    icon: (
      <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png"
        alt="Discord"
        className="w-6 h-6"
      />
    ),
    url: 'https://discord.com/users/215155706230341634/',
    color: 'from-indigo-500 to-purple-600',
    isDiscord: true,
  },
];
