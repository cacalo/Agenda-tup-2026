import { Service } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Service()
export class ContactsService {

contactList:Contact[] = [
    {
      id: "1",
      nombre: 'AA',
      apellido: "iiiii",
      email: 'AA@AA.com',
      numeroTelefono: '12345',
    },
    {
      id: "2",
      nombre: 'BB',
      apellido: "iiiii",
      email: 'BB@BB.com',
      numeroTelefono: '12345',
      direccion: "ABCABC"
    },
    {
      id: "aaasfa",
      nombre: 'CC',
      apellido: "iiiii",
      email: 'CC@CC.com',
      numeroTelefono: '12345',
      direccion: 'ASDFGHJ'
    },
    {
      id: "dddd",
      nombre: 'DD',
      apellido: "iiiii",
      email: 'DD@DD.com',
      numeroTelefono: '12345',
    },
    {
      id: "eeeee",
      nombre: 'EE',
      apellido: "iiiii",
      email: 'EE@EE.com',
      numeroTelefono: '12345',
    }
  ]


 agregarContacto(){
    this.contactList.push({
      id: '2',
      nombre: '44567',
      apellido: '4567',
      numeroTelefono: '4567'
    })
    console.log(this.contactList)
  }

  /// Busca un contacto desde un ID
getContactById(id:string){
  const contactoEncontrado = this.contactList.find(contact => contact.id === id);
  return contactoEncontrado;
}


}
