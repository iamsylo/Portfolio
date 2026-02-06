import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Play, Filter } from 'lucide-react';
import { mediaItems } from '../../data/portfolio';
import type { MediaItem } from '../../types';

// Skeleton loader component
const ImageSkeleton = () => (
  <div className="w-full h-full bg-gradient-to-r from-gray-200 dark:from-gray-700 via-gray-100 dark:via-gray-600 to-gray-200 dark:to-gray-700 animate-pulse rounded-lg" />
);

const MediaModal = ({ item, isOpen, onClose }: { item: MediaItem | null, isOpen: boolean, onClose: () => void }) => {
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

const MediaCard = ({ item, onClick }: { item: MediaItem, onClick: () => void }) => {
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
      transition={{ duration: 0.3 }}
      className="group cursor-pointer aspect-square"
      onClick={onClick}
    >
      <div
        className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-200"
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
            className={`w-full h-full object-cover transform-gpu will-change-transform group-hover:scale-110 transition-transform duration-500 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}

        {/* Error fallback */}
        {imageError && (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
            <Camera className="h-8 w-8 text-gray-400" />
          </div>
        )}
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-end justify-start p-6">
          <div className="w-full">
            <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
            <p className="text-gray-300 text-sm opacity-75">{item.category}</p>
          </div>
        </div>

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 scale-0 group-hover:scale-100 transition-transform duration-200">
            {item.type === 'photo' ? (
              <Camera className="h-8 w-8 text-white" />
            ) : (
              <Play className="h-8 w-8 text-white" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Show only Graphic Design items in the main grid
  const graphicItems = mediaItems.filter(item => item.category === 'Graphic Design');

  const openModal = (item: MediaItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#0f1419] dark:via-[#1a1f2e] dark:to-[#0f1419] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-40 right-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Visual Gallery
            </motion.h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore my design — showcasing creative vision and attention to detail
            </p>
          </motion.div>

          {/* Media Masonry Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {graphicItems.map((item) => (
                <MediaCard
                  key={item.id}
                  item={item}
                  onClick={() => openModal(item)}
                />
              ))}
          </motion.div>

          {/* Empty state */}
          {graphicItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Filter className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 text-lg">No media found in this category.</p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-20"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Like what you see?
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary btn-hover-effect inline-flex items-center gap-2 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Camera className="h-5 w-5" />
                Let's Work Together
              </motion.button>
            </div>
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