// proxy.ts
import { NextRequest, NextResponse } from 'next/server';

export default function proxy(request: NextRequest) {
  // const token = request.cookies.get('access_token')?.value;
  // const pathname = request.nextUrl.pathname;

  // // Só a página de login é pública
  // const publicRoutes = ['/'];

  // // Se já está no login e tem token, manda pro dashboard
  // if (pathname === '/' && token) {
  //   return NextResponse.redirect(new URL('/dashboard', request.url));
  // }

  // // Se está em rota pública, deixa passar
  // if (publicRoutes.includes(pathname)) {
  //   return NextResponse.next();
  // }

  // // Sem token? Volta pro login
  // if (!token) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  // return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}; 