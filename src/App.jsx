import { useState } from 'react';
import './App.css';
import { ProductList } from './components/ProductList';
import { Basket } from './components/Basket';

function App() {
    const [basket, setBasket] = useState([]);
    const [saleUsed, setSaleUsed] = useState(false);
    const [products] = useState([
        { id: 101, title: "Psychology", price: 25, photo: "https://m.media-amazon.com/images/I/81LDP+GDKVL._AC_UF1000,1000_QL80_.jpg" },
        { id: 102, title: "Economics", price: 24, photo: "https://m.media-amazon.com/images/I/81c6E2VdT3L._AC_UF1000,1000_QL80_.jpg" },
        { id: 103, title: "Science", price: 26, photo: "https://m.media-amazon.com/images/I/71egR+xVYGL._AC_UF1000,1000_QL80_.jpg" },
        { id: 104, title: "Business", price: 22, photo: "https://zangakbookstore.am/uploads/images/products/6e20faedeb907ba78c5894b297a63dd3.jpg" },
        { id: 105, title: "Sociology", price: 20, photo: "https://m.media-amazon.com/images/I/81z-Pj9NxjL._AC_UF1000,1000_QL80_.jpg" }
    ]);

    const moveToCart = id => {
        let found = products.find(x => x.id === id);
        if (found) {
            setBasket(prevBasket => {
                const existingItem = prevBasket.find(item => item.id === id);
                if (existingItem) {
                    return prevBasket.map(item =>
                        item.id === id ? { ...item, count: item.count + 1 } : item
                    );
                }
                return [...prevBasket, { ...found, count: 1 }];
            });
        }
    };

    const incrementCount = id => {
        setBasket(prevBasket =>
            prevBasket.map(item =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    const decrementCount = id => {
        setBasket(prevBasket =>
            prevBasket.map(item =>
                item.id === id ? { ...item, count: Math.max(item.count - 1, 1) } : item
            )
        );
    };

    const removeItem = id => {
        setBasket(prevBasket => prevBasket.filter(item => item.id !== id));
    };

    const applySale = () => {
        setBasket(prevBasket =>
            prevBasket.map(item =>
                item.count > 3 ? { ...item, discounted: true } : item
            )
        );
        setSaleUsed(true);
    };

    return (
        <>
            <div className="row">
                <ProductList items={products} onMove={moveToCart} />
                <Basket items={basket} onIncrement={incrementCount} onDecrement={decrementCount} onRemove={removeItem} onApplySale={applySale} saleUsed={saleUsed} />
            </div>
        </>
    );
}

export default App;
