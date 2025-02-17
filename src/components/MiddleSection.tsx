"use client"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Camera, Music, Image, Video, Book, Coffee, LucideIcon } from "lucide-react";
import IconItem from './IconItem';


interface IconData {
  Icon: LucideIcon;
  color: string;
}

const iconsData: IconData[] = [
  { Icon: Camera, color: "#4FC3F7" },
  { Icon: Music, color: "#E91E63" },
  { Icon: Image, color: "#9575CD" },
  { Icon: Video, color: "#4CAF50" },
  { Icon: Book, color: "#FF9800" },
  { Icon: Coffee, color: "#F44336" },
];


const MiddleSection = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)

    const radius=150;
    const duration=10;
    const angleStep=(2*Math.PI)/itemsRef.current.length;

    itemsRef.current.forEach((item, i) => {
      if (item) {
        const angle = i * angleStep;
        gsap.set(item, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        });
      }
    });

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        rotation: "+=360",
        transformOrigin: "center",
        duration,
        repeat: -1,
        ease: "linear",
      });
    }

  },)


  return (
    <div ref={containerRef} className="relative w-[400px] h-[400px] mx-auto flex items-center justify-center">
      {iconsData.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) itemsRef.current[index] = el;
          }}
          className="absolute"
        >
          <IconItem Icon={item.Icon} color={item.color} animation="animate-bounce" />
        </div>
      ))}
    </div>
  )
}
export default MiddleSection
