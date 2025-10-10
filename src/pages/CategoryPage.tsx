import React from 'react';
import { useRoute } from 'wouter';
import { useTranslation } from 'react-i18next';
import ProductGrid from '../components/ui/ProductGrid';
import { mockProducts, categories, getTranslatedCategoryName } from '../data/mockData';

const CategoryPage: React.FC = () => {
  const [, params] = useRoute('/category/:slug');
  const { t } = useTranslation();

  // Find category by slug
  const category = categories.find(cat => cat.slug === params?.slug);
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-base-content mb-4">{t('productNotFound')}</h1>
          <p className="text-base-content/70">{t('productNotFoundDesc')}</p>
        </div>
      </div>
    );
  }

  // Filter products by category ID
  const categoryProducts = mockProducts.filter(product => product.categoryId === category.id);

  return (
    <div className="p-6">
      {/* Breadcrumbs */}
      <div className="breadcrumbs text-sm mb-6">
        <ul>
          <li><a href="/" className="text-primary hover:text-primary-focus">{t('home')}</a></li>
          <li><a href="/" className="text-primary hover:text-primary-focus">{t('products')}</a></li>
          <li className="text-base-content">{getTranslatedCategoryName(category.id, t)}</li>
        </ul>
      </div>

      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-base-content mb-2">
          {getTranslatedCategoryName(category.id, t)}
        </h1>
        <p className="text-base-content/70">
          {categoryProducts.length} {t('productsFound')} {t('in')} {getTranslatedCategoryName(category.id, t)}
        </p>
      </div>

      {/* Products Grid */}
      {categoryProducts.length > 0 ? (
        <ProductGrid 
          products={categoryProducts}
        />
      ) : (
        <div className="text-center py-12">
          <p className="text-base-content/70 text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
