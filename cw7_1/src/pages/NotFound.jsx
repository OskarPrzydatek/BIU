export default function NotFound() {
  const notFoundLink = window.location.href;

  return <div>Nie znaleziono elementu: {notFoundLink}</div>;
}
