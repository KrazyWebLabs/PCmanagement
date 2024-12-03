export default function statusTextToId(statusText: string): string {
  const statusMapping: { [key: string]: string } = {
    "cancelada": "6",
    "en tramite": "7",
    "vigente": "8",
    "alta": "10",
    "baja": "11",
    "en stock": "13"
  };

  return statusMapping[statusText] || 'Estado No encontrado';
}