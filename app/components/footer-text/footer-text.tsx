export default function FooterText() {
  return (
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 text-start">
      &copy; {new Date().getFullYear()} beested - co. Todos os direitos
      reservados.
    </p>
  );
}
