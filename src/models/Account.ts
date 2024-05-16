import { Genre } from './Form'

export type Usuario = {
  apellidoMaterno: string
  apellidoPaterno: string
  celular: string
  cmp?: string
  direccion?: string
  email: string
  esMedico?: boolean
  fechaNacimiento: string
  finalidadesAdiciona: boolean
  foto?: string
  genero: Genre
  idAmbulatorio?: string
  idDepartamento: string
  idDepartamentoNac?: string
  idDistrito: string
  idDistritoNac?: string
  idPais: string
  idPaisNac?: string
  idProvincia: string
  idProvinciaNac?: string
  nombreArchivoUsuario?: string
  nombres: string
  nombre: string
  numeroDocumento: string
  observacion?: string
  seguroPlanSaludCodigo?: string
  telefono: string
  tipoDocumento: string
  tipoUsuario?: string
  tipoPaciente?: string
  tipoParentesco: string
  departamento: string
  distrito: string
  provincia: string
}
