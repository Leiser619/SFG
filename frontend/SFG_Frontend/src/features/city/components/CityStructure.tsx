import { useParams } from "react-router-dom";
import { useGetCityByName } from "../hooks";

export default function CityStructure() {
  const { cityName } = useParams();

  const { data: city, isLoading, error } = useGetCityByName(cityName ?? "");

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center text-amber-100">
        Ładowanie miasta...
      </div>
    );
  }

  if (error || !city) {
    return (
      <div className="flex h-full items-center justify-center text-red-400">
        Nie znaleziono miasta
      </div>
    );
  }

  return (
    <div className="h-full w-full p-4 bg-cover bg-center"  style={{backgroundImage: `url(${city.backgroundUrl})`}}>
      <div className="h-full w-full rounded-3xl border-4 border-amber-700 bg-black/40  shadow-2xl overflow-hidden bg-opacity-20">

        <div className="border-b-4 border-amber-700 bg-gradient-to-r from-amber-800 to-amber-600 p-6">
          <h1 className="text-center text-4xl font-bold text-amber-100 tracking-wider">
            {city.locationName}
          </h1>
        </div>

        <div className="flex h-[calc(100%-100px)] flex-col p-6 gap-6">

            <div className=" rounded-2xl border-2 border-amber-500 bg-amber-50/90 p-6 shadow-xl">
              <h2 className="mb-4 text-xl font-bold text-amber-900">
                Opis miasta
              </h2>

              <p className="text-amber-950 leading-relaxed">
                {city.description} What is Lorem Ipsum?
              </p>

          </div>

           <div className="flex-1 rounded-2xl border-2 border-amber-500 bg-amber-50/90 p-6 shadow-xl overflow-auto">
            <h2 className="mb-6 text-2xl font-bold text-amber-900">
              Dostępne budynki
            </h2>

            <div className="grid grid-cols-4 gap-4">


              {Array.from({ length: city.buildings.length }).map((_, index) => (
                <div
                  key={index}
                  className="h-40 rounded-2xl border-2 border-amber-400 bg-white/80 p-4 transition-all hover:-translate-y-1 hover:border-violet-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="flex h-full flex-col items-center justify-center">
                    <div className="mb-3 h-14 w-14 rounded-xl border-2 border-amber-500 bg-cover bg-center"  style={{backgroundImage: `url(${city.buildings[index].imageUrl})`}} />

                    <p className="font-bold text-amber-900">
                      {city.buildings[index].name}
                    </p>

                    <p className="text-sm text-violet-700">
                      {city.buildings[index].description}
                    </p>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}