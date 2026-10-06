import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'USER';
};

const JWT_SECRET = process.env.JWT_SECRET || 'change-me-in-production';

export function signToken(user: SessionUser) {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as SessionUser;
  } catch {
    return null;
  }
}

export function getTokenFromRequest(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.replace('Bearer ', '');
  }
  return null;
}

export function getSessionUserFromRequest(request: Request) {
  const token = getTokenFromRequest(request) ?? cookies().get('session')?.value;
  if (!token) return null;
  return verifyToken(token);
}

export function getSessionUserFromCookies() {
  const token = cookies().get('session')?.value;
  if (!token) return null;
  return verifyToken(token);
}
