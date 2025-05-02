import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});



const Location: React.FC = () => {
  const position: [number, number] = [48.855278, 2.333611];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-20 pl-4">Nous trouver</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8 flex flex-col justify-center md:mx-auto max-w-md">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Adresse :</h3>
              <p className="mt-1">36, rue des Saints-Pères</p>
              <p>75007 Paris</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Horaires :</h3>
              <p className="mt-1">du mardi au samedi</p>
              <p>10h30-13h / 14h-19h</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Téléphone :</h3>
              <p className="mt-1">+33(0)1 45 44 55 27</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 flex-shrink-0" />
            <div>
              <h3 className="font-medium">E-mail :</h3>
              <p className="mt-1">gmnc@club-internet.fr</p>
            </div>
          </div>
        </div>

        <div className="h-[400px] relative z-0">
          <MapContainer 
            center={position} 
            zoom={15} 
            className="h-full w-full rounded-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Galerie Martine Namy-Caulier<br />
                36 rue des Saints-Pères, 75007 Paris
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Location;