import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Play, Filter } from 'lucide-react';
import { mediaItems } from '../../data/portfolio';

// Skeleton loader component
const ImageSkeleton = () => (
  <div className="w-full h-full bg-gradient-to-r from-gray-200 dark:from-gray-700 via-gray-100 dark:via-gray-600 to-gray-200 dark:to-gray-700 animate-pulse rounded-lg" />
);

const MediaModal = ({ item, isOpen, onClose }: { item: any, isOpen: boolean, onClose: () => void }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  if (!isOpen || !item) return null;
  const currentItem = item;

  const handleImageLoad = () => setIsImageLoading(false);
  const handleImageError = () => {
    setIsImageLoading(false);
    setImageError(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>



          {/* Image container with aspect ratio */}
          <div className="flex-1 flex items-center justify-center bg-black/5 dark:bg-black/20 p-4">
            {currentItem.type === 'photo' ? (
              <div className="w-full max-w-2xl aspect-[4/3] flex items-center justify-center relative">
                {isImageLoading && <ImageSkeleton />}
                {!imageError && (
                  <img
                    key={currentItem.id}
                    src={currentItem.image}
                    alt={currentItem.title}
                    loading="lazy"
                    decoding="async"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    className={`max-w-full max-h-full object-contain rounded transform-gpu will-change-transform transition-opacity ${
                      isImageLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                )}
                {imageError && (
                  <div className="text-center">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-400">Unable to load image</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full max-w-2xl aspect-[16/9] flex items-center justify-center">
                <video
                  key={currentItem.id}
                  src={currentItem.image}
                  controls
                  preload="metadata"
                  className="max-w-full max-h-full object-contain rounded"
                />
              </div>
            )}
          </div>

          {/* Description area with fixed space */}
          <div className="flex-shrink-0 p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{currentItem.title}</h3>

            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{currentItem.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const MediaCard = ({ item, onClick }: { item: any, onClick: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => setIsLoading(false);
  const handleImageError = () => {
    setIsLoading(false);
    setImageError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
      >
        {/* Skeleton loader */}
        {isLoading && <ImageSkeleton />}

        {/* Main image */}
        {!imageError && (
          <img
            src={item.type === 'photo' ? item.image : item.thumbnail}
            alt={item.title}
            loading="lazy"
            decoding="async"
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`w-full h-full object-cover transform-gpu will-change-transform group-hover:scale-105 transition-all duration-200 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}

        {/* Error fallback */}
        {imageError && (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <Camera className="h-8 w-8 text-gray-400" />
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {item.type === 'photo' ? (
              <Camera className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            ) : (
              <Play className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            )}
          </motion.div>
        </div>



      </motion.div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{item.category}</p>
      </div>
    </motion.div>
  );
};;

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Show only Graphic Design items in the main grid
  const graphicItems = mediaItems.filter(item => item.category === 'Graphic Design');
  const [filteredItems, setFilteredItems] = useState(graphicItems);

  // Categories: only Graphic Design (or subcategories if present)
  const categories = [
    { value: 'all', label: 'All Graphic Works' },
    ...Array.from(new Set(graphicItems.map(item => item.category)))
      .map(category => ({ value: category, label: category }))
  ];

  const filterItems = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredItems(graphicItems);
    } else {
      setFilteredItems(graphicItems.filter(item => item.category === category));
    }
  };

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <section id="gallery" className="py-20 gradient-bg dark:bg-gradient-to-br dark:from-[#0f1419] dark:via-[#1a1f2e] dark:to-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Graphic Design Gallery</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Explore my graphic design work — logos, posters, branding, and other visual identities.
            </p>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.value}
                onClick={() => filterItems(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Media Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item) => (
                <MediaCard
                  key={item.id}
                  item={item}
                  onClick={() => openModal(item)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Filter className="h-12 w-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">No media found in this category.</p>
            </motion.div>
          )}

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Looking for graphic design or branding work?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Filter className="h-5 w-5 mr-2" />
              Hire Me for Design Work
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <MediaModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}