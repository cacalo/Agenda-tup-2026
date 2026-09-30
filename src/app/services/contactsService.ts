import { Service } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Service()
export class ContactsService {

contactList:Contact[] = [
    {
      Id: 1,
      FirstName: 'AA',
      LastName: "iiiii",
      Email: 'AA@AA.com',
      Number: '12345',
      IsFavorite: false
    },
    {
      Id: 2,
      FirstName: 'BB',
      LastName: "iiiii",
      Email: 'BB@BB.com',
      Number: '12345',
      Address: "ABCABC",
      IsFavorite: false
    },
    {
      Id: 3,
      FirstName: 'CC',
      LastName: "iiiii",
      Email: 'CC@CC.com',
      Number: '12345',
      Address: 'ASDFGHJ',
      IsFavorite: false
    },
    {
      Id: 4,
      FirstName: 'DD',
      LastName: "iiiii",
      Email: 'DD@DD.com',
      Number: '12345',
      IsFavorite: false
    },
    {
      Id: 5,
      FirstName: 'EE',
      LastName: "iiiii",
      Email: 'EE@EE.com',
      Number: '12345',
      IsFavorite: false
    }
  ]


  agregarContacto(nuevoContacto:Contact){
    const nuevoId = this.contactList.length;
    this.contactList.push({
      Id: nuevoId,
      FirstName: nuevoContacto.FirstName,
      LastName: nuevoContacto.LastName,
      Number: nuevoContacto.Number,
      IsFavorite: false
    })
    return nuevoId;
    console.log(this.contactList)
  }

  /// Busca un contacto desde un ID
getContactById(id:number){
  const contactoEncontrado = this.contactList.find(contact => contact.Id === id);
  return contactoEncontrado;
}

deleteContact(id:number){
  this.contactList = this.contactList.filter(c => c.Id !== id);
}

editContact(contact:Contact){
  this.contactList = this.contactList.map(c => {
    if(c.Id === contact.Id) return contact;
    return c
  });
}


}
