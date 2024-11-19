import { Component } from '@angular/core';
import { Residence } from '../core/models/residence.model';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible", showAddress: false },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible", showAddress: false },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu", showAddress: false },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction", showAddress: false }
  ];

  searchTerm: string = '';
  favorites: Residence[] = [];

  showLocation(residence: Residence) {
    if (residence.address === 'inconnu') {
      alert("L'adresse de cette résidence est inconnue");
    } else {
      residence.showAddress = !residence.showAddress;
    }
  }

  addToFavorites(residence: Residence) {
    this.favorites.push(residence);
    alert(residence.name + " a été ajoutée aux favoris !");
  }

  filteredResidences() {
    return this.listResidences.filter(residence => 
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
