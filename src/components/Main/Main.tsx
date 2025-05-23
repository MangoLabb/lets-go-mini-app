'use client';

import { useTranslations } from 'next-intl';
import { Page } from '@/components/Page';

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { ChevronRight, Globe, MapPin, Search, SlidersHorizontal, Star } from "lucide-react"
import { List } from '@telegram-apps/telegram-ui';

import { Location as LocationType } from '@/types/Location';
import { Location } from '@/components/LocationCard/Location';
import { LocationService } from '@/services/LocationService';
import { BottomNavigation } from '@/components/BottomNavigation/BottomNavigation';



export default function Main({ locations }: { locations: LocationType[] }) {

  const t = useTranslations('i18n');

  const [activeTab, setActiveTab] = useState("overview")

  const [search, setSearch] = useState('');
  const filteredLocations = locations.filter(location =>
    location.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Page back={false}>
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 text-black flex justify-between items-center">
        <h1 className="text-xl font-bold">Исследуй Город</h1>
        <div className="flex gap-2">
          <button className="border rounded-full px-3 py-1.5 flex items-center gap-1 text-sm">
            <Globe size={16} />
            <span>RU</span>
          </button>
          <button className="border rounded-full px-3 py-1.5 flex items-center gap-1 text-sm">
            <span>Москва</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </header>
      
      {/* Search */}
      <div className="px-4 pb-4 flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Поиск мест..."
              className="w-full pl-10 pr-3 py-3 border rounded-full text-sm"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
        </div>
      </div>

        <div className="flex-1 overflow-auto">
        <div className="p-4 space-y-4">

          <List>
            {Array.isArray(filteredLocations) && filteredLocations.map(location => (
              <Location key={location.id} location={location} />
            ))}
          </List>
          
        </div>
      </div>
      <div className="pb-16">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      </div>
    </Page>
  );
}
