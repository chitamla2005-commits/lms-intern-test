import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value
  const { pathname } = request.nextUrl

  // Các trang không cần đăng nhập
  const publicPaths = ['/login', '/register']

  // 1. Chưa đăng nhập mà cố vào trang nội bộ -> Đá về Login
  if (!token && !publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 2. Đã đăng nhập mà cố vào Login -> Đá về trang chủ (Courses)
  if (token && publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/courses', request.url))
  }

  // 3. Xử lý redirect trang chủ về courses (nếu muốn)
  if (pathname === '/') {
     return NextResponse.redirect(new URL('/courses', request.url))
  }

  return NextResponse.next()
}

// Config chạy middleware trên tất cả các route trừ file tĩnh
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}