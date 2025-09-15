import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const validRoutes = ['/home', '/404'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ignora arquivos estáticos e API routes
  if (pathname.startsWith('/_next') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // se for a raiz, redireciona para /home
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }

  // se não estiver entre as rotas válidas, reescreve para /404
  if (!validRoutes.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/404';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
