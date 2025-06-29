import React, { useEffect } from 'react';
import styled from 'styled-components';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  @media (max-width: 768px) {
    height: 400px;
    border-radius: 16px;
  }
`;

const Legend = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 1000;
  font-family: 'Acrom', Arial, sans-serif;
  min-width: 200px;
  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    padding: 12px;
    min-width: 180px;
  }
`;
const LegendTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
`;
const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 12px;
  color: #555;
  &:last-child { margin-bottom: 0; }
`;
const LegendIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
  border: 2px solid white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
`;

const krasnodarResidentialComplexes = [
  {
    id: 1,
    name: 'ЖК "Новостройки"',
    address: 'ул. Красная, 120',
    coordinates: [45.035470, 38.975313],
    price: 'от 8.5 млн ₽',
    developer: 'GROUP',
    status: 'строится',
    yearBuilt: 2025
  },
  {
    id: 2,
    name: 'ЖК "Лесные Террасы"',
    address: 'ул. Лесная, 45',
    coordinates: [45.040123, 38.970456],
    price: 'от 12 млн ₽',
    developer: 'Лесстрой',
    status: 'сдан',
    yearBuilt: 2024
  },
  {
    id: 3,
    name: 'ЖК "Вектор Жизни"',
    address: 'ул. Ставропольская, 200',
    coordinates: [45.045789, 38.980234],
    price: 'от 15 млн ₽',
    developer: 'Вектор',
    status: 'строится',
    yearBuilt: 2025
  },
  {
    id: 4,
    name: 'ЖК "Атриум Сити"',
    address: 'ул. Северная, 89',
    coordinates: [45.055432, 38.965123],
    price: 'от 18 млн ₽',
    developer: 'Атриум',
    status: 'планируется',
    yearBuilt: 2026
  },
  {
    id: 5,
    name: 'ЖК "Солнечный Берег"',
    address: 'ул. Южная, 156',
    coordinates: [45.025678, 38.985567],
    price: 'от 10 млн ₽',
    developer: 'Солнце',
    status: 'строится',
    yearBuilt: 2025
  },
  {
    id: 6,
    name: 'ЖК "Центральный Парк"',
    address: 'ул. Парковая, 67',
    coordinates: [45.050123, 38.975890],
    price: 'от 22 млн ₽',
    developer: 'Парк Групп',
    status: 'сдан',
    yearBuilt: 2023
  }
];

const statusColors = {
  'строится': '#007fc4',
  'сдан': '#2db233',
  'планируется': '#8c8c8c'
};

const LeafletMap = () => {
  useEffect(() => {
    const map = L.map('leaflet-map', {
      center: [45.040470, 38.975313],
      zoom: 12,
      zoomControl: true,
      attributionControl: false,
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map);
    krasnodarResidentialComplexes.forEach(complex => {
      const marker = L.marker(complex.coordinates, {
        icon: L.divIcon({
          className: '',
          html: `<div style="background:${statusColors[complex.status]};width:18px;height:18px;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>`,
          iconSize: [22, 22],
          iconAnchor: [11, 22],
          popupAnchor: [0, -22],
        })
      });
      marker.bindPopup(`
        <div style="font-family:Arial,sans-serif;min-width:180px">
          <b>${complex.name}</b><br/>
          <span>Адрес: ${complex.address}</span><br/>
          <span>Застройщик: ${complex.developer}</span><br/>
          <span>Цена: ${complex.price}</span><br/>
          <span>Статус: ${complex.status}</span><br/>
          <span>Год сдачи: ${complex.yearBuilt}</span>
        </div>
      `);
      marker.addTo(map);
    });
    return () => {
      map.remove();
    };
  }, []);

  return (
    <MapWrapper>
      <Legend>
        
        <LegendItem>
          <LegendIcon color="#007fc4" />
          <span>Строится</span>
        </LegendItem>
        <LegendItem>
          <LegendIcon color="#2db233" />
          <span>Сдан</span>
        </LegendItem>
        <LegendItem>
          <LegendIcon color="#8c8c8c" />
          <span>Планируется</span>
        </LegendItem>
      </Legend>
      <MapContainer id="leaflet-map" />
    </MapWrapper>
  );
};

export default LeafletMap; 