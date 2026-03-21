import { useEffect, useRef, useState, useCallback } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { Search, MapPin, Navigation, Clock, Phone, X, Locate } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

const GOOGLE_MAPS_API_KEY = "PLACEHOLDER_API_KEY";

export interface Station {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone?: string;
  hours?: string;
  services?: string[];
}

// Sample stations in the Philippines
const SAMPLE_STATIONS: Station[] = [
  {
    id: "1",
    name: "Caltex EDSA Balintawak",
    address: "EDSA cor. Balintawak, Quezon City",
    lat: 14.6572,
    lng: 121.0042,
    phone: "(02) 8123-4567",
    hours: "Open 24 Hours",
    services: ["Techron", "Diesel", "Car Wash", "StarMart"],
  },
  {
    id: "2",
    name: "Caltex Makati Avenue",
    address: "Makati Avenue, Makati City",
    lat: 14.5547,
    lng: 121.0244,
    phone: "(02) 8234-5678",
    hours: "5:00 AM – 11:00 PM",
    services: ["Techron", "Diesel", "StarMart"],
  },
  {
    id: "3",
    name: "Caltex BGC",
    address: "26th Street, Bonifacio Global City, Taguig",
    lat: 14.5508,
    lng: 121.0508,
    phone: "(02) 8345-6789",
    hours: "Open 24 Hours",
    services: ["Techron", "Diesel", "Car Wash", "StarMart", "ATM"],
  },
  {
    id: "4",
    name: "Caltex Commonwealth",
    address: "Commonwealth Avenue, Quezon City",
    lat: 14.6867,
    lng: 121.0615,
    phone: "(02) 8456-7890",
    hours: "5:00 AM – 12:00 AM",
    services: ["Techron", "Diesel", "StarMart"],
  },
  {
    id: "5",
    name: "Caltex Cebu IT Park",
    address: "Salinas Drive, Cebu IT Park, Cebu City",
    lat: 10.3274,
    lng: 123.9058,
    phone: "(032) 412-3456",
    hours: "Open 24 Hours",
    services: ["Techron", "Diesel", "Car Wash", "StarMart"],
  },
  {
    id: "6",
    name: "Caltex Davao Bajada",
    address: "JP Laurel Avenue, Bajada, Davao City",
    lat: 7.0731,
    lng: 125.6128,
    phone: "(082) 234-5678",
    hours: "5:00 AM – 11:00 PM",
    services: ["Techron", "Diesel", "StarMart"],
  },
];

interface StationCardProps {
  station: Station;
  isActive: boolean;
  onClick: () => void;
}

const StationCard = ({ station, isActive, onClick }: StationCardProps) => (
  <button
    onClick={onClick}
    className={`station-card w-full text-left p-4 rounded-xl border transition-all duration-300 group ${
      isActive
        ? "bg-primary/5 border-primary/30 shadow-md shadow-primary/5"
        : "bg-background border-border hover:border-primary/20 hover:shadow-sm"
    }`}
  >
    <div className="flex items-start gap-3">
      <div
        className={`mt-0.5 p-2 rounded-lg transition-colors ${
          isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
        }`}
      >
        <MapPin className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm text-foreground truncate">{station.name}</h3>
        <p className="text-xs text-muted-foreground mt-0.5 truncate">{station.address}</p>
        {station.hours && (
          <div className="flex items-center gap-1 mt-2">
            <Clock className="w-3 h-3 text-caltex-emerald" />
            <span className="text-xs text-caltex-emerald font-medium">{station.hours}</span>
          </div>
        )}
        {station.services && (
          <div className="flex flex-wrap gap-1 mt-2">
            {station.services.slice(0, 3).map((s) => (
              <span
                key={s}
                className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium"
              >
                {s}
              </span>
            ))}
            {station.services.length > 3 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                +{station.services.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  </button>
);

interface StationMapProps {
  className?: string;
}

const MapContent = ({
  stations,
  activeStation,
  setActiveStation,
}: {
  stations: Station[];
  activeStation: Station | null;
  setActiveStation: (s: Station | null) => void;
}) => {
  const map = useMap();

  useEffect(() => {
    if (map && activeStation) {
      map.panTo({ lat: activeStation.lat, lng: activeStation.lng });
      map.setZoom(15);
    }
  }, [map, activeStation]);

  return (
    <>
      {stations.map((station) => (
        <AdvancedMarker
          key={station.id}
          position={{ lat: station.lat, lng: station.lng }}
          onClick={() => setActiveStation(station)}
        >
          <Pin
            background={activeStation?.id === station.id ? "hsl(356 82% 46%)" : "hsl(215 55% 10%)"}
            borderColor={activeStation?.id === station.id ? "hsl(356 85% 38%)" : "hsl(215 40% 18%)"}
            glyphColor="white"
          />
        </AdvancedMarker>
      ))}

      {activeStation && (
        <InfoWindow
          position={{ lat: activeStation.lat, lng: activeStation.lng }}
          onCloseClick={() => setActiveStation(null)}
          pixelOffset={[0, -40]}
        >
          <div className="p-1 min-w-[200px]">
            <h3 className="font-bold text-sm text-gray-900">{activeStation.name}</h3>
            <p className="text-xs text-gray-600 mt-1">{activeStation.address}</p>
            {activeStation.phone && (
              <div className="flex items-center gap-1 mt-2">
                <Phone className="w-3 h-3 text-gray-500" />
                <span className="text-xs text-gray-600">{activeStation.phone}</span>
              </div>
            )}
            {activeStation.hours && (
              <div className="flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3 text-green-600" />
                <span className="text-xs text-green-600 font-medium">{activeStation.hours}</span>
              </div>
            )}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${activeStation.lat},${activeStation.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-blue-600 hover:text-blue-700"
            >
              <Navigation className="w-3 h-3" />
              Get Directions
            </a>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

const StationMap = ({ className = "" }: StationMapProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStation, setActiveStation] = useState<Station | null>(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredStations = SAMPLE_STATIONS.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (!sidebarRef.current) return;
    const cards = sidebarRef.current.querySelectorAll(".station-card");
    gsap.fromTo(
      cards,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power2.out" }
    );
  }, [searchQuery]);

  const handleLocateMe = useCallback(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // Find nearest station
        let nearest = SAMPLE_STATIONS[0];
        let minDist = Infinity;
        for (const s of SAMPLE_STATIONS) {
          const d = Math.sqrt(
            Math.pow(s.lat - pos.coords.latitude, 2) +
              Math.pow(s.lng - pos.coords.longitude, 2)
          );
          if (d < minDist) {
            minDist = d;
            nearest = s;
          }
        }
        setActiveStation(nearest);
        setSearchQuery("");
      },
      () => {
        // Silently fail
      }
    );
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
        {/* Floating search bar (mobile) */}
        <div
          ref={searchRef}
          className="absolute top-4 left-4 right-4 z-20 lg:hidden"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search station or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 h-12 bg-background/95 backdrop-blur-lg border-border shadow-xl rounded-xl text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile search results */}
          {searchQuery && filteredStations.length > 0 && (
            <div className="mt-2 bg-background/95 backdrop-blur-lg border border-border rounded-xl shadow-xl max-h-60 overflow-y-auto p-2 space-y-1">
              {filteredStations.map((s) => (
                <StationCard
                  key={s.id}
                  station={s}
                  isActive={activeStation?.id === s.id}
                  onClick={() => {
                    setActiveStation(s);
                    setSearchQuery("");
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Desktop sidebar */}
        <div
          ref={sidebarRef}
          className={`hidden lg:flex flex-col absolute top-0 left-0 bottom-0 z-20 w-[380px] bg-background/95 backdrop-blur-xl border-r border-border transition-transform duration-500 ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar header */}
          <div className="p-5 border-b border-border space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-foreground">
                Nearby Stations
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLocateMe}
                className="text-xs gap-1.5 text-muted-foreground hover:text-primary"
              >
                <Locate className="w-3.5 h-3.5" />
                Near me
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search station, city, or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 h-11 bg-muted/50 border-border rounded-xl text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {filteredStations.length} station{filteredStations.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* Station list */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {filteredStations.length > 0 ? (
              filteredStations.map((station) => (
                <StationCard
                  key={station.id}
                  station={station}
                  isActive={activeStation?.id === station.id}
                  onClick={() => setActiveStation(station)}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <MapPin className="w-10 h-10 text-muted-foreground/30 mb-3" />
                <p className="text-sm text-muted-foreground font-medium">No stations found</p>
                <p className="text-xs text-muted-foreground/70 mt-1">Try a different search term</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar toggle (desktop) */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className={`hidden lg:flex absolute z-20 top-1/2 -translate-y-1/2 items-center justify-center w-6 h-14 bg-background border border-border rounded-r-lg shadow-md transition-all duration-500 hover:bg-muted ${
            showSidebar ? "left-[380px]" : "left-0"
          }`}
        >
          <ChevronIcon direction={showSidebar ? "left" : "right"} />
        </button>

        {/* Locate me button (mobile) */}
        <button
          onClick={handleLocateMe}
          className="lg:hidden absolute bottom-6 right-4 z-20 p-3 bg-background border border-border rounded-xl shadow-lg hover:bg-muted transition-colors"
        >
          <Locate className="w-5 h-5 text-foreground" />
        </button>

        {/* Map */}
        <Map
          defaultCenter={{ lat: 12.8797, lng: 121.774 }}
          defaultZoom={6}
          mapId="caltex-station-map"
          gestureHandling="greedy"
          disableDefaultUI={false}
          zoomControl={true}
          mapTypeControl={false}
          streetViewControl={false}
          fullscreenControl={true}
          className="w-full h-full"
          styles={MAP_STYLES}
        >
          <MapContent
            stations={filteredStations}
            activeStation={activeStation}
            setActiveStation={setActiveStation}
          />
        </Map>
      </APIProvider>
    </div>
  );
};

const ChevronIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    className="w-3.5 h-3.5 text-muted-foreground"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
    />
  </svg>
);

// Subtle, brand-aligned map styling
const MAP_STYLES = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    elementType: "labels",
    stylers: [{ visibility: "simplified" }],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ color: "#d4e6f1" }],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [{ color: "#f0f4f0" }],
  },
];

export default StationMap;
