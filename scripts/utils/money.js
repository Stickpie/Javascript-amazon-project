export function formatCurrency(priceCents) {
    return priceCents =(Math.round(priceCents/100)).toFixed(2);
}