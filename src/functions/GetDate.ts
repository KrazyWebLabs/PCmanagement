export default function getDate() {
  return new Date().toLocaleString("es-MX", {
    timeZone: "America/Mexico_City",
  });;
}
