import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Head from 'next/head'
import SearchFilter from '../components/SearchFilter'
import ProductGrid from '../components/ProductGrid'
import ProductModal from '../components/ProductModal'
import AddProductForm from '../components/AddProductForm'
import CartIcon from '../components/CartIcon'
import CartModal from '../components/CartModal'
import Modal from '../components/ui/Modal'
import Button from '../components/ui/Button'


const queryClient = new QueryClient()

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false)
  const [isCartModalOpen, setIsCartModalOpen] = useState(false)
  
  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }
  
  const handleCloseProductModal = () => {
    setIsProductModalOpen(false)
    setSelectedProduct(null)
  }
  
  const handleAddProduct = (productData) => {
   
    alert(`Product "${productData.title}" would be added to the database!`)
    console.log('Product data:', productData)
    setIsAddProductModalOpen(false)
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>E-commerce Store</title>
          <meta name="description" content="A responsive e-commerce product listing page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-gray-900">E-commerce Store</h1>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Products</h2>
            <Button onClick={() => setIsAddProductModalOpen(true)}>
              Add Product
            </Button>
          </div>
          
          <SearchFilter />
          <ProductGrid onProductClick={handleProductClick} />
        </main>
        
        <ProductModal 
          product={selectedProduct} 
          isOpen={isProductModalOpen} 
          onClose={handleCloseProductModal} 
        />
        
        <Modal 
          isOpen={isAddProductModalOpen} 
          onClose={() => setIsAddProductModalOpen(false)}
          title="Add New Product"
        >
          <AddProductForm onSubmit={handleAddProduct} />
        </Modal>
        
        <CartIcon onClick={() => setIsCartModalOpen(true)} />
        <CartModal 
          isOpen={isCartModalOpen} 
          onClose={() => setIsCartModalOpen(false)} 
        />
      </div>
    </QueryClientProvider>
  )
}