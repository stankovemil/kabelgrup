// projects.component.ts
import { Component, OnInit } from '@angular/core';
import {DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  completedDate: string;
  location: string;
  scope: string[];
  image: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  value?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    DatePipe,
    NgIf
  ],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'Hospital Network Infrastructure',
      client: 'City General Hospital',
      category: 'Healthcare',
      description: 'Complete network cabling infrastructure for a 500-bed hospital including fiber optic backbone and Cat6 distribution.',
      completedDate: '2024-03-15',
      location: 'Skopje, Macedonia',
      scope: ['15km Fiber Optic Cable', '200+ Network Points', 'Server Room Cabling', 'Redundant Connections'],
      image: 'hospital',
      status: 'completed',
      value: '€85,000'
    },
    {
      id: 2,
      title: 'Industrial Complex Electrification',
      client: 'Automotive Manufacturing Ltd.',
      category: 'Industrial',
      description: 'High-voltage power cable installation for automotive manufacturing facility with specialized industrial-grade cables.',
      completedDate: '2024-01-20',
      location: 'Tetovo, Macedonia',
      scope: ['High-Voltage Power Cables', 'Control Cable Systems', 'Safety Integration', 'Environmental Protection'],
      image: 'industrial',
      status: 'completed',
      value: '€120,000'
    },
    {
      id: 3,
      title: 'Smart Office Building',
      client: 'TechPark Development',
      category: 'Commercial',
      description: 'Modern office building with integrated smart systems, high-speed networking, and energy-efficient solutions.',
      completedDate: '2024-06-30',
      location: 'Skopje, Macedonia',
      scope: ['Smart Building Integration', 'Cat7 Network Infrastructure', 'PoE Systems', 'Audio/Video Distribution'],
      image: 'office',
      status: 'ongoing',
      value: '€95,000'
    },
    {
      id: 4,
      title: 'Data Center Expansion',
      client: 'CloudTech Solutions',
      category: 'Data Center',
      description: 'Expansion of existing data center with high-density fiber optic connections and redundant power systems.',
      completedDate: '2024-08-15',
      location: 'Skopje, Macedonia',
      scope: ['High-Density Fiber Arrays', 'Redundant Power Systems', '40G/100G Connections', 'Cooling Integration'],
      image: 'datacenter',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'University Campus Network',
      client: 'State University of Macedonia',
      category: 'Education',
      description: 'Campus-wide network upgrade including dormitories, lecture halls, and administrative buildings.',
      completedDate: '2023-12-10',
      location: 'Skopje, Macedonia',
      scope: ['Campus-Wide Fiber Backbone', '1000+ Access Points', 'Outdoor Cabling', 'Wireless Integration'],
      image: 'university',
      status: 'completed',
      value: '€150,000'
    },
    {
      id: 6,
      title: 'Residential Complex Networking',
      client: 'Premium Living Developments',
      category: 'Residential',
      description: 'Luxury residential complex with fiber-to-the-home infrastructure and smart home pre-wiring.',
      completedDate: '2024-02-28',
      location: 'Ohrid, Macedonia',
      scope: ['Fiber-to-Home', 'Smart Home Pre-wiring', 'Security Systems', 'Multimedia Distribution'],
      image: 'residential',
      status: 'completed',
      value: '€65,000'
    }
  ];

  filteredProjects: Project[] = [];
  selectedCategory = 'All';
  selectedStatus = 'All';
  categories = ['All', 'Healthcare', 'Industrial', 'Commercial', 'Data Center', 'Education', 'Residential'];
  statuses = ['All', 'completed', 'ongoing', 'upcoming'];

  ngOnInit() {
    this.filteredProjects = this.projects;
  }

  filterProjects() {
    this.filteredProjects = this.projects.filter(project => {
      const categoryMatch = this.selectedCategory === 'All' || project.category === this.selectedCategory;
      const statusMatch = this.selectedStatus === 'All' || project.status === this.selectedStatus;
      return categoryMatch && statusMatch;
    });
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.filterProjects();
  }

  onStatusChange(status: string) {
    this.selectedStatus = status;
    this.filterProjects();
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'completed': 'bg-green-500',
      'ongoing': 'bg-blue-500',
      'upcoming': 'bg-yellow-500'
    };
    return colors[status] || 'bg-gray-500';
  }

  getStatusText(status: string): string {
    const texts: { [key: string]: string } = {
      'completed': 'Completed',
      'ongoing': 'In Progress',
      'upcoming': 'Upcoming'
    };
    return texts[status] || status;
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Healthcare': 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      'Industrial': 'M9 12a3 3 0 003-3m-3 3a3 3 0 01-3-3m3 3v6m-9-6h6m6 0h6',
      'Commercial': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      'Data Center': 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2',
      'Education': 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
      'Residential': 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0h4m0 0h3a1 1 0 001-1V10M9 21v-6a1 1 0 011-1h2a1 1 0 011 1v6'
    };
    return icons[category] || 'M4 6h16M4 12h16M4 18h16';
  }
}
