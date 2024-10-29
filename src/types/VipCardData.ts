export type VIPcardData = {
  cardNumber: number;           // Número de tarjeta (entero largo)
  email: string;                // Correo electrónico del usuario
  accountNumber: number;        // Número de cuenta bancaria (entero largo)
  accountType: number;          // Tipo de cuenta (1 = Ahorro, 2 = Cheques, etc.)
  currency: number;             // Código de moneda (1 = MXN, 2 = USD, etc.)
  bicCode: string;              // Código BIC/SWIFT del banco
  name: string;                 // Nombre del usuario
  paternalSurname: string;      // Apellido paterno del usuario
  maternalSurname: string;      // Apellido materno del usuario
  rfc: string;                  // RFC del usuario (clave fiscal en México)
  phone: string;                // Teléfono de contacto
  address: number;              // Identificador de dirección (puede ser ID referenciado)
  birthDate: Date;              // Fecha de nacimiento del usuario
  status: number;               // Estado de la cuenta (1 = Activa, 0 = Inactiva, etc.)
}