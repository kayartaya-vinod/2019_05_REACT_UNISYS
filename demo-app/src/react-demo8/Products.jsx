import React from 'react';

const Products = () => (
    <h1>This is Products Page</h1>
);

// deliberate delay for lazy loading
let start = Date.now();
while ((Date.now() - start) <= 2000);

export default Products;