import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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

const LoadingMessage = styled.div`
  width: 100%;
  height: 500px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Acrom', Arial, sans-serif;
  font-size: 18px;
  color: #666;
  border-radius: 20px;
  
  @media (max-width: 768px) {
    height: 400px;
    border-radius: 16px;
  }
`;

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
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
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const LegendIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
  border: 2px solid white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
`;

// Данные ЖК Краснодара с координатами
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

const YandexMap = () => {
  const mapRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState('');
  const [containerReady, setContainerReady] = useState(false);

  // Проверяем готовность контейнера и его размеры
  useLayoutEffect(() => {
    function checkContainer() {
      if (mapRef.current) {
        const rect = mapRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setContainerReady(true);
          setDebugInfo('Контейнер готов');
          return;
        }
      }
      setDebugInfo('Контейнер не готов, повторная попытка...');
      setTimeout(checkContainer, 200);
    }
    checkContainer();
  }, []);

  useEffect(() => {
    if (!containerReady) return;
    setDebugInfo('Контейнер готов, загружаем карту...');

    let mapInstance = null;
    let script;

    function initMap() {
      try {
        if (!mapRef.current) {
          setDebugInfo('Контейнер исчез, отмена инициализации');
          return;
        }
        setDebugInfo('Создание карты...');
        mapInstance = new window.ymaps.Map(mapRef.current, {
          center: [45.040470, 38.975313],
          zoom: 12,
          controls: ['zoomControl', 'fullscreenControl', 'typeSelector']
        });
        krasnodarResidentialComplexes.forEach((complex, idx) => {
          let presetColor = 'islands#blueIcon';
          if (complex.status === 'сдан') presetColor = 'islands#greenIcon';
          if (complex.status === 'планируется') presetColor = 'islands#greyIcon';
          const placemark = new window.ymaps.Placemark(
            complex.coordinates,
            {
              balloonContentHeader: complex.name,
              balloonContentBody: `
                <div style="font-family: Arial, sans-serif;">
                  <p><strong>Адрес:</strong> ${complex.address}</p>
                  <p><strong>Застройщик:</strong> ${complex.developer}</p>
                  <p><strong>Цена:</strong> ${complex.price}</p>
                  <p><strong>Статус:</strong> ${complex.status}</p>
                  <p><strong>Год сдачи:</strong> ${complex.yearBuilt}</p>
                </div>
              `,
              balloonContentFooter: 'Кликните для подробностей',
              hintContent: complex.name
            },
            {
              preset: presetColor,
              iconLayout: 'default#image',
              iconImageSize: [30, 42],
              iconImageOffset: [-15, -42]
            }
          );
          mapInstance.geoObjects.add(placemark);
        });
        setIsLoading(false);
        setDebugInfo('Карта успешно загружена!');
      } catch (err) {
        setError('Ошибка инициализации карты: ' + err.message);
        setDebugInfo('Ошибка: ' + err.message);
        setIsLoading(false);
      }
    }

    function loadYandexMap() {
      setDebugInfo('Загрузка Yandex Maps API...');
      if (window.ymaps && window.ymaps.ready) {
        setDebugInfo('API уже загружен');
        window.ymaps.ready(initMap);
        return;
      }
      const existingScript = document.querySelector('script[src*="api-maps.yandex.ru"]');
      if (existingScript) {
        setDebugInfo('Скрипт уже загружается...');
        existingScript.addEventListener('load', () => {
          setDebugInfo('Скрипт загружен');
          if (window.ymaps) window.ymaps.ready(initMap);
        });
        return;
      }
      script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=8a196011-14c6-4c59-ae07-6748b876312d';
      script.async = true;
      script.onload = () => {
        setDebugInfo('Скрипт загружен успешно');
        if (window.ymaps) window.ymaps.ready(initMap);
        else setError('Не удалось загрузить Yandex Maps API');
      };
      script.onerror = () => {
        setError('Ошибка загрузки карты');
        setDebugInfo('Ошибка загрузки скрипта');
      };
      document.head.appendChild(script);
    }

    loadYandexMap();
    return () => {
      setDebugInfo('Компонент размонтирован');
      if (mapInstance && mapInstance.destroy) mapInstance.destroy();
      // Скрипт не удаляем, чтобы не ломать другие карты на странице
    };
  }, [containerReady]);

  if (error) {
    return (
      <LoadingMessage>
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '10px' }}>{error}</div>
          <div style={{ fontSize: '14px', color: '#999' }}>{debugInfo}</div>
        </div>
      </LoadingMessage>
    );
  }
  if (isLoading) {
    return (
      <LoadingMessage>
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '10px' }}>Загрузка карты...</div>
          <div style={{ fontSize: '14px', color: '#999' }}>{debugInfo}</div>
        </div>
      </LoadingMessage>
    );
  }
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
      <MapContainer ref={mapRef} />
    </MapWrapper>
  );
};

export default YandexMap; 