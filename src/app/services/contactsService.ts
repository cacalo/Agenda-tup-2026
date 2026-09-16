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


  agregarContacto(nuevoContacto:Contact){
    const nuevoId = this.contactList.length.toString();
    this.contactList.push({
      id: nuevoId,
      nombre: nuevoContacto.nombre,
      apellido: nuevoContacto.apellido,
      numeroTelefono: nuevoContacto.numeroTelefono
    })
    return nuevoId;
    console.log(this.contactList)
  }

  /// Busca un contacto desde un ID
getContactById(id:string){
  const contactoEncontrado = this.contactList.find(contact => contact.id === id);
  return contactoEncontrado;
}

deleteContact(id:string){
  this.contactList = this.contactList.filter(c => c.id !== id);
}

editContact(contact:Contact){
  this.contactList = this.contactList.map(c => {
    if(c.id === contact.id) return contact;
    return c
  });
}


}
