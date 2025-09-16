import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { personalInfo } from './personal-info';

export function Header() {
  return (
    <div className="flex items-start px-4">
      <div className="w-18 h-18 rounded-full overflow-hidden  mr-4">
        <Avatar className="w-full h-full">
          <AvatarImage src={personalInfo.photo} />
          <AvatarFallback>{personalInfo.name}</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-left">
        <h1 className="text-xl font-bold mb-1">{personalInfo.name}</h1>
        <p className="text-sm text-muted-foreground font-semibold">
          {personalInfo.username}
        </p>
        <p className="text-sm text-muted-foreground font-semibold">
          {personalInfo.bio}
        </p>
      </div>
    </div>
  );
}
