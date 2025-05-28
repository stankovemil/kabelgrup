// projects.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

interface CarouselSlide {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  icon: string;
  stats: { value: string; label: string; color: string }[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 1;
  totalSlides = 3;
  private carouselInterval: any;

  slides: CarouselSlide[] = [
    {
      id: 1,
      title: '1-CYKY',
      description: 'Energetski kabel 0,6/1 kV sa Cu vodičima, izoliran i oplašten PVC-om',
      imageUrl: 'https://www.ttcables.com/wp-content/uploads/2022/04/1_CYKY.jpg',
      icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
      stats: [
        { value: '10Gbps', label: 'Speed', color: 'text-blue-400' },
        { value: '100m', label: 'Range', color: 'text-green-400' }
      ]
    },
    {
      id: 2,
      title: 'AAC',
      description: 'Aluminijsko uže za nadzemni vod.',
      imageUrl: 'https://www.ttcables.com/wp-content/uploads/2022/04/AAC.jpg',
      icon: 'M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z',
      stats: [
        { value: '100Gbps', label: 'Speed', color: 'text-purple-400' },
        { value: '10km', label: 'Range', color: 'text-yellow-400' }
      ]
    },
    {
      id: 3,
      title: 'Al-XLPE-SWA-PVC',
      description: 'Energetski kabel 0,6/1 kV sa Al vodičima, izoliran XLPE-om i oplašten PVC-om',
      imageUrl: 'https://www.ttcables.com/wp-content/uploads/2022/04/al_xlpe_swa_pvc.jpg',
      icon: 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z',
      stats: [
        { value: '600V', label: 'Voltage', color: 'text-red-400' },
        { value: '85°C', label: 'Temp', color: 'text-orange-400' }
      ]
    }
  ];

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopCarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextSlide() {
    this.currentSlide = this.currentSlide === this.totalSlides ? 1 : this.currentSlide + 1;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 1 ? this.totalSlides : this.currentSlide - 1;
  }

  goToSlide(slideNumber: number) {
    console.log("CLICKED")
    this.currentSlide = slideNumber;
  }

  getCurrentSlide(): CarouselSlide {
    return this.slides.find(slide => slide.id === this.currentSlide)!;
  }

  getSlideTransform(slideId: number): string {
    if (slideId === this.currentSlide) {
      return 'translateX(0)';
    } else if (slideId < this.currentSlide) {
      return 'translateX(-100%)';
    } else {
      return 'translateX(100%)';
    }
  }

  consolelog(){
    console.log("THIS WAS CLICKED")
  }
}
