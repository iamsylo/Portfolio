import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Video, X, Play, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { mediaItems } from '../../data/portfolio';

const MediaModal = ({ item, isOpen, onClose }: { item: any, isOpen: boolean, onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [albumItems, setAlbumItems] = useState<any[]>([]);
  
  // Initialize album items and current index when modal opens
  useEffect(() => {
    if (isOpen && item) {
      const items = item.albumId 
        ? mediaItems.filter(media => media.albumId === item.albumId)
        : [item];
      
      setAlbumItems(items);
      const initialIndex = items.findIndex(media => media.id === item.id);
      setCurrentIndex(initialIndex >= 0 ? initialIndex : 0);
    }
  }, [isOpen, item?.id, item?.albumId]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || albumItems.length === 0) return;
    
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, albumItems.length]);
  
  if (!isOpen || !item || albumItems.length === 0) return null;
  
  const currentItem = albumItems[currentIndex] || item;
  const hasMultipleItems = albumItems.length > 1;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % albumItems.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + albumItems.length) % albumItems.length);
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

          {/* Navigation arrows */}
          {hasMultipleItems && (
            <>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
              
              {/* Dots indicator */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {albumItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Image container with aspect ratio */}
          <div className="flex-1 flex items-center justify-center bg-black/5 dark:bg-black/20 p-4">
            {currentItem.type === 'photo' ? (
              <div className="w-full max-w-2xl aspect-[4/3] flex items-center justify-center">
                <img
                  key={currentItem.id}
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="max-w-full max-h-full object-contain rounded"
                />
              </div>
            ) : (
              <div className="w-full max-w-2xl aspect-[16/9] flex items-center justify-center">
                <video
                  key={currentItem.id}
                  src={currentItem.image}
                  controls
                  className="max-w-full max-h-full object-contain rounded"
                />
              </div>
            )}
          </div>

          {/* Description area with fixed space */}
          <div className="flex-shrink-0 p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{currentItem.title}</h3>
              {hasMultipleItems && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {currentIndex + 1} / {albumItems.length}
                </span>
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{currentItem.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const MediaCard = ({ item, index, onClick }: { item: any, index: number, onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
      >
        <img
          src={item.type === 'photo' ? item.image : item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {item.type === 'photo' ? (
              <Camera className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            ) : (
              <Play className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            )}
          </motion.div>
        </div>

        {/* Type indicator */}
        <div className="absolute top-3 left-3">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-1 rounded">
            {item.type === 'photo' ? (
              <Camera className="h-4 w-4 text-primary-600 dark:text-primary-400" />
            ) : (
              <Video className="h-4 w-4 text-primary-600 dark:text-primary-400" />
            )}
          </div>
        </div>

        {/* Featured badge */}
        {item.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded">
              Featured
            </span>
          </div>
        )}
      </motion.div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{item.category}</p>
      </div>
    </motion.div>
  );
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Only show featured items in the main grid
  const featuredItems = mediaItems.filter(item => item.featured);
  const [filteredItems, setFilteredItems] = useState(featuredItems);

  // Generate categories dynamically from featured items only
  const categories = [
    { value: 'all', label: 'All Media' },
    ...Array.from(new Set(featuredItems.map(item => item.category)))
      .map(category => ({ value: category, label: category }))
  ];

  const filterItems = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredItems(featuredItems);
    } else {
      setFilteredItems(featuredItems.filter(item => item.category === category));
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
      <section id="gallery" className="py-20 gradient-bg dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Creative Gallery</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Explore my creative work organized by category - from portraits and landscapes to weddings and corporate projects
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
              {filteredItems.map((item, index) => (
                <MediaCard
                  key={item.id}
                  item={item}
                  index={index}
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
              Need professional photography or videography services?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Camera className="h-5 w-5 mr-2" />
              Hire Me for a Project
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