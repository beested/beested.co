'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RotateCcw, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import FooterText from '../../footer-text/footer-text';
import PageContainer from '../../page-container/page-container';

export default function NotFound() {
  const router = useRouter();

  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Animação sequencial
    const timers = [
      setTimeout(() => setAnimationPhase(1), 300),
      setTimeout(() => setAnimationPhase(2), 600),
      setTimeout(() => setAnimationPhase(3), 900),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-8 px-4">
        <div
          className={`relative group transition-all duration-700 ${
            animationPhase >= 1 ? 'animate-fadeInUp opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative animate-float">
            <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 select-none relative z-10 hover:scale-110 transition-transform duration-300 animate-bounce-slow">
              404
            </h1>
          </div>

          <div className="absolute inset-0 text-8xl md:text-9xl font-black text-purple-300 opacity-20 animate-pulse-slow blur-sm">
            404
          </div>
          <div className="absolute inset-0 text-8xl md:text-9xl font-black text-pink-300 opacity-10 animate-ping blur-lg">
            404
          </div>

          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-float opacity-60 ${
                i % 3 === 0
                  ? 'bg-purple-400 -top-4 -left-4'
                  : i % 3 === 1
                  ? 'bg-pink-400 -top-6 right-8'
                  : 'bg-blue-400 top-12 -right-6'
              }`}
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.2}s`,
              }}
            />
          ))}
        </div>

        <div
          className={`w-full max-w-xl transition-all duration-700 delay-300 ${
            animationPhase >= 2
              ? 'animate-fadeInUp opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
            <CardContent className="p-8 text-center space-y-6">
              <div className="flex justify-center">
                <Badge
                  variant="secondary"
                  className="text-lg px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40"
                >
                  <Sparkles className="w-4 h-4 mr-2 animate-spin-slow" />
                  Erro 404
                </Badge>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 animate-pulse">
                  Tá procurando o que? 🤔
                </h2>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    Eu já imaginava que algum engraçadinho ia tentar acessar uma
                    rota que não existe.
                  </p>
                  <p className="text-base md:text-lg text-gray-500 dark:text-gray-500">
                    Volta pra home que o importante tá lá 🚀
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-500 ${
            animationPhase >= 3
              ? 'animate-fadeInUp opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <Button
            onClick={handleBack}
            variant="outline"
            size="lg"
            className="px-6 cursor-pointer py-6 border-2 border-purple-300 text-purple-600 dark:text-purple-400 dark:border-purple-400 font-semibold rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            <RotateCcw className="w-5 h-5 mr-2 hover:animate-spin" />
            Voltar
          </Button>
        </div>
      </div>
      <FooterText />
    </PageContainer>
  );
}
