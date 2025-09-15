import { redirect } from 'next/navigation';

export default function NotFound() {
  // manda o usuário para a rota desejada
  redirect('/404');
}
