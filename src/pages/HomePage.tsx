import BannerCarousel from '../components/ui/BannerCarousel';
import ProductGrid from '../components/ui/ProductGrid';
import { useProductFilter } from '../hooks/useProductFilter';
import { useTranslation } from 'react-i18next';
import { mockProducts, mockBannerAds } from '../data/mockData';

function HomePage() {
  const { t } = useTranslation();
  const {
    searchTerm,
    selectedCategory,
    filteredProducts,
  } = useProductFilter(mockProducts);

  return (
    <>
      <BannerCarousel bannerAds={mockBannerAds} />

      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-base-content">{t('featuredProducts')}</h2>
          <p className="text-base-content/70">
            {filteredProducts.length} {t('productsFound')}
            {searchTerm && ` ${t('for')} "${searchTerm}"`}
            {selectedCategory !== 'all' && ` ${t('in')} ${selectedCategory}`}
          </p>
        </div>

        <ProductGrid 
          products={filteredProducts}
        />
      </div>
    </>
  );
}

export default HomePage;
