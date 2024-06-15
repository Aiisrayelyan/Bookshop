export const BasketItem = ({ id, title, price, count, discounted = false, onIncrement, onDecrement, onRemove }) => {
    const subtotal = discounted ? (count - 1) * price : count * price;

    return (
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>{count}</td>
            <td>{subtotal}</td>
            <td>
                <button onClick={() => onDecrement(id)}>-</button>
                <button onClick={() => onIncrement(id)}>+</button>
                <button onClick={() => onRemove(id)}>x</button>
            </td>
        </tr>
    );
};  