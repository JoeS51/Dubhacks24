import Image from "next/image";
import ParkingCard from "./Components/ParkingCard";
import parkingSpot1 from "./Images/parkingspot.jpg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ParkingCard 
        image={parkingSpot1}
        title="Guest suite in Seattle"
        location="Seattle, WA"
        rating={4.72}
        reviews={72}
        priceBefore={116}
        priceNow={68}
        dates="Oct 12 - 17"
      />

    </div>
  );
}
