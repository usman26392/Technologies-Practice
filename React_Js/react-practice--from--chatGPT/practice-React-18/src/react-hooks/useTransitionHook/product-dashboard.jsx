import React, { useState, useTransition } from 'react';

// 1. Generate 10,000 mock products to simulate an enterprise database
const MOCK_PRODUCTS = Array.from({ length: 10000 }, (_, index) => ({
  id: index,
  name: `Product #${index + 1}`,
  sku: `SKU-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
  price: (Math.random() * 500).toFixed(2),
}));


// component
export default function ProductDashboard() {
  // 2. Initialize the transition hook
  const [isPending, startTransition] = useTransition();
  
  // 3. Split states: one for the urgent text input, one for the heavy list
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(MOCK_PRODUCTS);

  // 4. Handle input changes
  const handleSearchChange = (event) => {
    const value = event.target.value;
    
    // URGENT UPDATE: Instantly show what the user typed in the box
    setSearchQuery(value);

    // LOW PRIORITY UPDATE: Handle heavy filtering in the background
    startTransition(() => {
      const filtered = MOCK_PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    });
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Enterprise Inventory Search</h1>
        <p>Type quickly! The input box will never freeze, even while filtering 10,000 items.</p>
      </header>

      {/* Search Input Section */}
      <div style={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search 10,000 products..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={styles.searchInput}
        />
        
        {/* 5. Visual Anchor: Use isPending to show a loading indicator */}
        {isPending && <span style={styles.spinner}>Processing data...</span>}
      </div>

      {/* Results Section */}
      <div 
        style={{ 
          ...styles.resultsContainer, 
          // Dim old results slightly while the new background filter runs
          opacity: isPending ? 0.6 : 1, 
          transition: 'opacity 0.2s ease'
        }}
      >
        <p style={styles.countText}>Showing {filteredProducts.length} results</p>
        
        <div style={styles.grid}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={styles.card}>
              <h3 style={styles.cardTitle}>{product.name}</h3>
              <p style={styles.cardMeta}>SKU: {product.sku}</p>
              <p style={styles.cardPrice}>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Simple inline styles for clean, readable layout presentation
const styles = {
  container: { padding: '2rem', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f9f9f9', minHeight: '100vh' },
  header: { marginBottom: '2rem' },
  searchWrapper: { display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', position: 'sticky', top: '0', backgroundColor: '#f9f9f9', padding: '1rem 0', zIndex: 10 },
  searchInput: { padding: '0.75rem 1rem', fontSize: '1.1rem', width: '100%', maxWidth: '400px', borderRadius: '6px', border: '1px solid #ccc', outline: 'none' },
  spinner: { color: '#0066cc', fontWeight: 'bold', fontSize: '0.9rem' },
  resultsContainer: { marginTop: '1rem' },
  countText: { color: '#666', marginBottom: '1rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' },
  card: { padding: '1rem', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  cardTitle: { margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#333' },
  cardMeta: { margin: '0 0 0.5rem 0', fontSize: '0.85rem', color: '#888' },
  cardPrice: { margin: '0', fontWeight: 'bold', color: '#2e7d32', fontSize: '1.2rem' }
};
