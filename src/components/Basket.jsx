import { BasketItem } from "./BasketItem";

export const Basket = ({ items, onIncrement, onDecrement, onRemove, onApplySale, saleUsed }) => {
    return (
        <div>
            <h3>Basket</h3>
            {!saleUsed && <button onClick={onApplySale}>Apply Sale</button>}
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Subtotal</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(elm => (
                        <BasketItem
                            key={elm.id}
                            {...elm}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            onRemove={onRemove}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
