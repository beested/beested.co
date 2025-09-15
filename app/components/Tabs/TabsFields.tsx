import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from '@/components/animate-ui/components/animate/tabs';
import { techs, tools } from './techs-tools';

export function TabsFields() {
  return (
    <Tabs defaultValue="stack">
      <TabsList className="mx-4 flex gap-2">
        <TabsTrigger value="stack" className="cursor-none">
          Stack
        </TabsTrigger>
        <TabsTrigger value="tools" className="cursor-none">
          Ferramentas
        </TabsTrigger>
        <TabsTrigger value="portfolio" className="cursor-none">
          Portifólio
        </TabsTrigger>
      </TabsList>

      <TabsContents>
        <TabsContent value="stack" className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border transition-all duration-300 hover:scale-105"
                title={tech.name}
                data-cursor-hover
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <span className="text-xs font-semibold">{tech.name}</span>
                    <div className="text-xs">{tech.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="tools" className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border transition-all duration-300 hover:scale-105"
                title={tool.name}
                data-cursor-hover
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <span className="text-xs font-semibold">{tool.name}</span>
                    <div className="text-xs">{tool.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent
          value="portfolio"
          className="p-4 flex flex-col items-center justify-center  h-full"
        >
          <div className="w-full h-full rounded-lg border transition-all duration-300 hover:scale-102 flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 border-4 border-dashed border-blue-500 rounded-full animate-spin"></div>
            <span className="text-lg font-bold text-white text-center animate-pulse">
              Portifólio em construção 🚧
            </span>
          </div>
        </TabsContent>
      </TabsContents>
    </Tabs>
  );
}
