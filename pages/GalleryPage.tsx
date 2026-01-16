import React, { useEffect, useState } from 'react';
import { Section } from '../components/Section';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { X } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900">
      <Section id="full-gallery" title="Photo Gallery" subtitle="A comprehensive look at our facilities, events, and community initiatives" bg="gray">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div 
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-grow border-t border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{item.alt}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Zoomed Image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 p-1 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div className="relative aspect-[4/3] w-full">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-full object-contain bg-slate-100 dark:bg-slate-950"
                />
              </div>
              <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{selectedImage.alt}</h3>
              </div>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
};
