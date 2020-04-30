import { Component, OnInit, Input } from '@angular/core';
import { Civilizations } from '../civilizations.model';
import { DataService } from '../data.service';
import * as civsImages from '../../assets/js/Civs';
import * as unitImages from '../../assets/js/Units';

export interface info {
  id: number;
  name: string;
  expansion: string;
  army_type: string;
  unique_unit: [string];
  unique_tech: [string];
  team_bonus: string;
  civilization_bonus: [string];
}

export interface infoUnit {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  created_in: string;
  cost: {
    Wood: number;
    Food: number;
    Stone: number;
    Gold: number;
  },
  build_time: number;
  reload_time: number;
  attack_delay: number;
  movement_rate: number;
  line_of_sight: number;
  hit_points: number;
  range: string;
  attack: number;
  armor: string;
  attack_bonus: [string];
  armor_bonus: [string];
  search_radius: number;
  accuracy: string;
  blast_radius: number;
}

export interface infoStructure {
  id: number;
  name: string;
  expansion: string;
  age: string;
  cost: {
    Wood: number;
  },
  build_time: number;
  hit_points: number;
  line_of_sight: number;
  armor: string;
  special: [string];
}

export interface infoTechnology {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  develops_in: string;
  cost: {
    Wood: number;
    Food: number;
    Stone: number;
    Gold: number;
  },
  build_time: number;
  applies_to: [string];
}

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.css']
})
export class PannelComponent implements OnInit {

  @Input() subtitle: string;
  @Input() options: number;
  civilizationArray = [];
  selectedN: info;
  selectedUnit: infoUnit;
  selectedStructure: infoStructure;
  selectedTechnology: infoTechnology;
  orientation = false;
  isLoaded = false;
  urlIconCiv = civsImages.civilizations_images;
  urlIconUnits = unitImages.units_images;
  urlImg: string;

  constructor(private dataService: DataService) { }

  onSelect(actualEntity) {
    switch (this.options) {
      case 1:
        this.selectedN = actualEntity;
        this.selectImage();
        break;
      case 2:
        this.selectedUnit = actualEntity;
        this.selectImage();
        break;
      case 3:
        this.selectedStructure = actualEntity;
        this.selectImage();
        break;
      case 4:
        this.selectedTechnology = actualEntity;
        this.selectImage();
        break;
      default:
        break;
    }

  }

  ngOnInit() {
    switch (this.options) {
      case 1:
        this.orientation = false;
        this.getCivilizations();
        break;
      case 2:
        this.orientation = true;
        this.getUnits();
        break;
      case 3:
        this.orientation = false;
        this.getStructures();
        break;
      case 4:
        this.orientation = true;
        this.getTechnologies();
        break;
      default:
        break;
    }

  }

  getCivilizations() {
    this.dataService.getUsers()
      .then(result => {
        this.civilizationArray = result.civilizations;
        this.selectedN = this.civilizationArray[0];
        this.isLoaded = true;
      })
      .catch(err => console.log(`The error was ${err}`));
  }
  getUnits() {
    this.dataService.getUnits()
      .then(result => {
        this.civilizationArray = result.units;
        this.selectedUnit = this.civilizationArray[0];
        this.isLoaded = true;
      })
      .catch(err => console.log(`The error was ${err}`));
  }
  getStructures() {
    this.dataService.getStructures()
      .then(result => {
        this.civilizationArray = result.structures;
        this.selectedStructure = this.civilizationArray[0];
        this.isLoaded = true;
      })
      .catch(err => console.log(`The error was ${err}`));
  }

  getTechnologies() {
    this.dataService.getTechnologies()
      .then(result => {
        this.civilizationArray = result.technologies;
        this.selectedTechnology = this.civilizationArray[0];
        this.isLoaded = true;
      })
      .catch(err => console.log(`The error was ${err}`));
  }

  selectImage() {
    switch (this.options) {
      case 1:
        switch (this.selectedN.name) {
          case "Aztecs":
            this.urlImg = "../../assets/Civs/menu_techtree_aztecs.png"
            break;
          case "Britons":
            this.urlImg = "../../assets/Civs/menu_techtree_britons.png"
            break;
          case "Bizantines":
            this.urlImg = "../../assets/Civs/menu_techtree_byzantines.png"
            break;
          case "Celts":
            this.urlImg = "../../assets/Civs/menu_techtree_celts.png"
            break;
          case "Chinese":
            this.urlImg = "../../assets/Civs/menu_techtree_chinese.png"
            break;
          case "Franks":
            this.urlImg = "../../assets/Civs/menu_techtree_franks.png"
            break;
          case "Franks":
            this.urlImg = "../../assets/Civs/menu_techtree_franks.png"
            break;
          case "Goths":
            this.urlImg = "../../assets/Civs/menu_techtree_goths.png"
            break;
          case "Huns":
            this.urlImg = "../../assets/Civs/menu_techtree_huns.png"
            break;
          case "Japanese":
            this.urlImg = "../../assets/Civs/menu_techtree_japanese.png"
            break;
          case "Koreans":
            this.urlImg = "../../assets/Civs/menu_techtree_koreans.png"
            break;
          case "Mayans":
            this.urlImg = "../../assets/Civs/menu_techtree_mayans.png"
            break;
          case "Mongols":
            this.urlImg = "../../assets/Civs/menu_techtree_mongols.png"
            break;
          case "Persians":
            this.urlImg = "../../assets/Civs/menu_techtree_persians.png"
            break;
          case "Saracens":
            this.urlImg = "../../assets/Civs/menu_techtree_saracens.png"
            break;
          case "Spanish":
            this.urlImg = "../../assets/Civs/menu_techtree_spanish.png"
            break;
          case "Teutons":
            this.urlImg = "../../assets/Civs/menu_techtree_teutons.png"
            break;
          case "Turks":
            this.urlImg = "../../assets/Civs/menu_techtree_turks.png"
            break;
          case "Vikings":
            this.urlImg = "../../assets/Civs/menu_techtree_vikings.png"
            break;
          default:
            break;
        }
        break;

      default:
        break;
    }

  }

}
