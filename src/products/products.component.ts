// products.component.ts
import { Component, OnInit } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  specifications: string[];
  image: string;
  price?: string;
  inStock: boolean;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgIf
  ],
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Ethernet Cat6 Cable',
      category: 'Network Cables',
      description: 'High-performance Cat6 Ethernet cable for reliable network connections',
      specifications: ['Speed: 10 Gbps', 'Length: 1-100m', 'Shielded/Unshielded options', 'RJ45 connectors'],
      image: 'ethernet',
      price: '€15-120',
      inStock: true
    },
    {
      id: 2,
      name: 'Fiber Optic Single Mode',
      category: 'Fiber Optic',
      description: 'Single-mode fiber optic cable for long-distance data transmission',
      specifications: ['Speed: 100 Gbps', 'Distance: up to 10km', 'Low attenuation', 'LC/SC connectors'],
      image: 'fiber',
      price: '€45-300',
      inStock: true
    },
    {
      id: 3,
      name: 'Power Cable 3x2.5mm²',
      category: 'Power Cables',
      description: 'Industrial power cable for electrical installations',
      specifications: ['Voltage: 600V', 'Temperature: -20°C to +85°C', 'Copper conductor', 'PVC insulation'],
      image: 'power',
      price: '€8-50',
      inStock: true
    },
    {
      id: 4,
      name: 'Coaxial RG58',
      category: 'Coaxial Cables',
      description: 'High-quality coaxial cable for RF applications',
      specifications: ['Impedance: 50Ω', 'Frequency: DC-1GHz', 'Low loss', 'BNC/SMA connectors'],
      image: 'coaxial',
      price: '€12-80',
      inStock: false
    },
    {
      id: 5,
      name: 'USB-C Cable 3.2',
      category: 'Data Cables',
      description: 'High-speed USB-C cable for data and power transfer',
      specifications: ['Speed: 20 Gbps', 'Power: 100W', 'Length: 0.5-3m', 'Reversible connector'],
      image: 'usb',
      price: '€25-60',
      inStock: true
    },
    {
      id: 6,
      name: 'HDMI 2.1 Cable',
      category: 'Audio/Video',
      description: '8K HDMI cable for ultra-high-definition video',
      specifications: ['Resolution: 8K@60Hz', 'Bandwidth: 48Gbps', 'HDR support', 'eARC compatible'],
      image: 'hdmi',
      price: '€35-150',
      inStock: true
    }
  ];

  filteredProducts: Product[] = [];
  selectedCategory = 'All';
  categories = ['All', 'Network Cables', 'Fiber Optic', 'Power Cables', 'Coaxial Cables', 'Data Cables', 'Audio/Video'];

  ngOnInit() {
    this.filteredProducts = this.products;
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }

  getProductIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Network Cables': 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
      'Fiber Optic': 'M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z',
      'Power Cables': 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z',
      'Coaxial Cables': 'M9 12a3 3 0 003-3m-3 3a3 3 0 01-3-3m3 3v6m-9-6h6m6 0h6',
      'Data Cables': 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      'Audio/Video': 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
    };
    return icons[category] || 'M4 6h16M4 12h16M4 18h16';
  }
}
