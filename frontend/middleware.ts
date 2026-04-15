import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('csrftoken')?.value;
  const pathname = request.nextUrl.pathname;

  // Rotas públicas (sem autenticação)
  const publicRoutes = ['/'];

  // Se está em rota pública, deixa passar
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Se não tem token, redireciona para login
  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};