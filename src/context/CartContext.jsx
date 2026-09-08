import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // cartItems structure: { [itemKey]: { product, variant, quantity } }
  // itemKey format: `${product.id}-${variant.weight}`
  const [cartItems, setCartItems] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const getItemKey = (productId, variantWeight) => `${productId}-${variantWeight}`;

  const addToCart = (product, variant, qty = 1) => {
    const key = getItemKey(product.id, variant.weight);
    setCartItems((prev) => {
      const existing = prev[key];
      const newQty = existing ? existing.quantity + qty : qty;
      return {
        ...prev,
        [key]: {
          key,
          product,
          variant,
          quantity: newQty,
        },
      };
    });
  };

  const updateQuantity = (key, newQty) => {
    setCartItems((prev) => {
      if (!prev[key]) return prev;
      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      }
      return {
        ...prev,
        [key]: {
          ...prev[key],
          quantity: newQty,
        },
      };
    });
  };

  const removeFromCart = (key) => {
    setCartItems((prev) => {
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
  };

  const getItemQuantity = (productId, variantWeight) => {
    const key = getItemKey(productId, variantWeight);
    return cartItems[key]?.quantity || 0;
  };

  const clearCart = () => {
    setCartItems({});
  };

  const itemsList = useMemo(() => Object.values(cartItems), [cartItems]);

  const totalItems = useMemo(() => {
    return itemsList.reduce((acc, item) => acc + item.quantity, 0);
  }, [itemsList]);

  const subtotalPrice = useMemo(() => {
    return itemsList.reduce(
      (acc, item) => acc + item.variant.price * item.quantity,
      0
    );
  }, [itemsList]);

  // Promo Tiers Logic
  const promoInfo = useMemo(() => {
    const TIER_1_MIN = 75000;
    const TIER_1_DISCOUNT = 5000;
    const TIER_2_MIN = 150000;
    const TIER_2_DISCOUNT = 15000;

    let discount = 0;
    let activeTier = 0;
    let promoLabel = '';
    let nextTier = null;
    let progressPercent = 0;

    if (subtotalPrice >= TIER_2_MIN) {
      discount = TIER_2_DISCOUNT;
      activeTier = 2;
      promoLabel = 'Diskon Rp 15.000 + Bonus Sample Camilan';
      progressPercent = 100;
      nextTier = null;
    } else if (subtotalPrice >= TIER_1_MIN) {
      discount = TIER_1_DISCOUNT;
      activeTier = 1;
      promoLabel = 'Diskon Rp 5.000';
      const needed = TIER_2_MIN - subtotalPrice;
      const progressInTier = (subtotalPrice - TIER_1_MIN) / (TIER_2_MIN - TIER_1_MIN);
      progressPercent = Math.min(100, Math.round(50 + progressInTier * 50));
      nextTier = {
        neededAmount: needed,
        targetAmount: TIER_2_MIN,
        targetDiscount: TIER_2_DISCOUNT,
        benefit: 'Diskon Rp 15.000 + Bonus Sample Camilan',
      };
    } else if (subtotalPrice > 0) {
      discount = 0;
      activeTier = 0;
      promoLabel = '';
      const needed = TIER_1_MIN - subtotalPrice;
      progressPercent = Math.min(50, Math.round((subtotalPrice / TIER_1_MIN) * 50));
      nextTier = {
        neededAmount: needed,
        targetAmount: TIER_1_MIN,
        targetDiscount: TIER_1_DISCOUNT,
        benefit: 'Diskon Rp 5.000',
      };
    }

    const finalPrice = Math.max(0, subtotalPrice - discount);

    return {
      subtotalPrice,
      discountAmount: discount,
      finalPrice,
      activeTier,
      promoLabel,
      nextTier,
      progressPercent,
      tier1Min: TIER_1_MIN,
      tier1Discount: TIER_1_DISCOUNT,
      tier2Min: TIER_2_MIN,
      tier2Discount: TIER_2_DISCOUNT,
    };
  }, [subtotalPrice]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemsList,
        totalItems,
        totalPrice: promoInfo.finalPrice,
        subtotalPrice,
        promoInfo,
        discountAmount: promoInfo.discountAmount,
        finalPrice: promoInfo.finalPrice,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        getItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
