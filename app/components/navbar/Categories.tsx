'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { 
  GiGamepad,
  GiMusicalNotes,
  GiClothes,
  GiKitchenKnives,
  GiWeightLiftingUp,
  GiDutchBike,
  GiFullMotorcycleHelmet,
  GiScooter,
  GiRaceCar,
  GiCarWheel,
  GiCarDoor,
  GiStarCycle,
  GiCaravan,
  GiCarSeat
} from 'react-icons/gi';
import { MdOutlineDevicesOther,  MdLocalShipping, MdBikeScooter, MdOutlineDirectionsCar, MdCarRental, MdCarCrash, MdCarpenter, MdWbAuto, MdFireTruck, MdNavigateNext} from 'react-icons/md';
import {
  BiParty,
  BiCamera,
  BiBook,
  BiCar,
  BiMoveHorizontal,
  BiBusSchool
} from 'react-icons/bi'

import CategoryBox from "../CategoryBox";
import Container from '../Container';
import { IoIosCar, IoMdBicycle, IoMdBus, IoMdCar } from 'react-icons/io';


export const categories = [
  {
    label: 'Truck',
    icon:  MdLocalShipping,
    description: 'Heavy-duty vehicle designed for transporting goods, characterized by a large cargo area and robust build.',
  },
  {
    label: 'Bike',
    icon: GiFullMotorcycleHelmet,
    description: 'Two-wheeled vehicle powered by pedals, offering efficient and agile transportation.',
  },
  {
    label: 'Scooter',
    icon: GiScooter,
    description: 'Small motorized vehicle with a step-through frame and platform for the rider feet, ideal for short urban commutes.'
  },
  {
    label: 'Jeep',
    icon: MdOutlineDirectionsCar,
    description: 'Off-road vehicle known for its ruggedness and versatility, capable of navigating diverse terrains.'
  },
  {
    label: 'Rickshaw',
    icon: GiCaravan,
    description: "Three-wheeled vehicle used for passenger transport, commonly seen in urban areas of Asia."
  },
  {
    label: 'Cycle',
    icon: IoMdBicycle,
    description: 'Human-powered vehicle with two wheels, providing eco-friendly and health-conscious transportation.'
  },
  {
    label: 'SUV',
    icon: BiCar,
    description: 'Sport Utility Vehicle, offering a blend of off-road capability, spaciousness, and on-road comfort.'
  },
  {
    label: 'Car',
    icon: IoIosCar,
    description: 'Four-wheeled motor vehicle primarily designed for the transportation of passengers, available in various sizes and types.'
  },
  {
    label: 'Mini-VAN',
    icon: BiBusSchool,
    description: ' Compact multi-purpose vehicle designed for transporting small groups of people or cargo.'
  },
  {
    label: 'Bus',
    icon: IoMdBus,
    description: ' Large public transportation vehicle designed to carry numerous passengers along predetermined routes.'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;