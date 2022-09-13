import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public items: any = [];
  public sortOpen: boolean = false;
  public filterOpen: boolean = false;
  public showCategory: boolean = true;
  public showBrand: boolean = true;
  public showProduct: boolean = false;
  public item: any = null;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        name: "Bicicletas",
        products: [
          {
            name: "Bicicleta de niño",
            description: "Disponible",
            details: [
              "Marco y tenedor: Acero Hi Ten",
              "Medidas: 12”",
              "Frenos: V - Brake",
              "Medida de llantas: 12” x 2.125” Nylon",
              "Timón: Completo BMX",
              "Copas: Neco",
              "Accesorios: Canasta, estabilizadores, esponjas, banderín, timbre y loderas."
            ],
            price: "680.00",
            images: [
              "https://cdn.pacifiko.com/image/cache/catalog/p/ZTVjMzQ2Nz-200x200.JPG",
              "https://cdn.pacifiko.com/image/cache/catalog/p/ZTVjMzQ2Nz_1-200x200.JPG"
            ]
          },
          {
            name: "Bicicleta BMX16 Totem",
            description: "Disponible",
            details: [
              "Marco y tenedor: Acero Hi Ten",
              "Medidas: 12”",
              "Frenos: V - Brake",
              "Medida de llantas: 12” x 2.125” Nylon",
              "Timón: Completo BMX",
              "Copas: Neco"
            ],
            price: "850.00",
            images: [
              "https://cdn.pacifiko.com/image/cache/catalog/Bicicleta%20BMX16%20Totem1-200x200.png"
            ]
          },
          {
            name: "Bicicleta Fairy 12” Niña - Lila",
            description: "Agotado",
            details: [
              "Marco y Tenedor: Acero Hi Ten 1.2T",
              "Medidas 12”",
              "Frenos: V - Brake",
              "Aros: Metal",
              "Medida de Llantas: 12” y 16”x 2.125” negras marca Wanda",
              "Timón: Completo BMX",
              "Copas: Neco",
              "Sistema de Frenos: Saiguan",
              "Accesorios: Estabilizadores, loderas, canasta, silla de muñeca, platos y flecos"
            ],
            price: "706.00",
            images: [
              "https://cdn.pacifiko.com/image/cache/catalog/p/ZTgyZDBmMm-200x200.jpg",
              "https://cdn.pacifiko.com/image/cache/catalog/p/ZTgyZDBmMm_1-200x200.JPG"
            ]
          },
          {
            name: "Mi Smart Electric Bi Xiaomi 24034",
            description: "Disponible",
            details: [
              "Edad 14+",
              "Tamaño 16",
              "Suspensión Trasera",
              "Velocidades 4 modos de ciclismo",
              "Talla Caballero",
              "Material Aluminio",
              "Freno Coaster",
              "Autonomía 45 KM Distancia",
              "Velocidad(max.) 20 km / h"
            ],
            price: "9,000.00",
            images: [
              "https://cdn.pacifiko.com/image/cache/catalog/p/YzVmNWYwOD_785-200x200.jpg",
              "https://cdn.pacifiko.com/image/cache/catalog/p/YzVmNWYwOD_1_464-200x200.jpg"
            ]
          }
        ]
      },
      {
        name: "Accesorios",
        products: [
          {
            name: "Pedales De Bicicleta De Montaña MTB",
            description: "Disponible",
            details: ["Sin mas información"],
            price: "450.00",
            images: [
              "https://cdn.pacifiko.com/image/cache/catalog/p/NjQwZGNiZT_3-200x200.jpg",
              "https://cdn.pacifiko.com/image/cache/catalog/p/NjQwZGNiZT_1-200x200.jpg"
            ]
          },
          {
            name: "Kit De Reparación De Neumáticos",
            description: "Disponible",
            details: ["Sin mas información"],
            price: "250.00",
            images: [
              "https://cdn.pacifiko.com/image/cache/catalog/p/NDJlODZlMj-200x200.jpg",
              "https://cdn.pacifiko.com/image/cache/catalog/p/NDJlODZlMj_2-200x200.jpg"
            ]
          },
          {
            name: "Superflash Luz Trasera Para Bicicleta",
            description: "Disponible",
            details: ["Universal", "Facil de instalar"],
            price: "300.00",
            images: [
              "https://cdn.pacifiko.com/image/cache/catalog/p/YTk3MzQ2M2-200x200.jpg",
              "https://cdn.pacifiko.com/image/cache/catalog/p/YTk3MzQ2M2_3-200x200.jpg"
            ]
          },
          {
            name: "Shimano 105 FC-R7000 - Juego De Bielas",
            description: "Agotado",
            details: ["Sin mas información"],
            price: "2,100.00",
            images: [
              "https://cdn.pacifiko.com/image/cache/catalog/p/MGU1YThlMT_1-200x200.jpg"
            ]
          }
        ]
      }
    ];
  }

  public viewProduct(pItem: any) {
    this.showProduct = true;
    this.item = pItem;
  }

}
