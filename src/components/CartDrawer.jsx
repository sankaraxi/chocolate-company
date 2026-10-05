import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Gift, CheckCircle2, Truck } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  formatPrice,
  currency
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [giftNoteEnabled, setGiftNoteEnabled] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(null);

  // Checkout Form State
  const [formData, setFormData] = useState({
    name: 'Eleanor Vance',
    email: 'eleanor.vance@chocolat-luxe.com',
    address: '45 Rue des Cacaoyers, Apt 4B',
    city: 'Lyon',
    postalCode: '69002',
    paymentMethod: 'card' // 'card', 'applepay', 'cod'
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 65.00;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingCost = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 8.50;
  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'GRANDCRU10' || code === 'CACAO10') {
      setDiscountPercent(10);
      setPromoSuccess('10% Grand Cru allocation discount applied!');
    } else if (code === 'CHUAO20') {
      setDiscountPercent(20);
      setPromoSuccess('20% Master Connoisseur discount applied!');
    } else {
      setPromoError('Invalid promotion code. Try GRANDCRU10');
    }
  };

  const handleProcessOrder = (e) => {
    e.preventDefault();
    const orderNumber = `MEC-${Math.floor(100000 + Math.random() * 900000)}`;
    const trackingCode = `FR-CL-${Math.floor(10000000 + Math.random() * 90000000)}`;

    const completedOrder = {
      orderNumber,
      trackingCode,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      items: [...cartItems],
      total: finalTotal,
      subtotal,
      shippingCost,
      discountAmount,
      recipient: formData.name,
      address: `${formData.address}, ${formData.city} ${formData.postalCode}`,
      paymentMethod: formData.paymentMethod,
      giftMessage: giftNoteEnabled ? giftMessage : null
    };

    setOrderComplete(completedOrder);
    onClearCart();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#160D08] border-l border-[#331C13] shadow-2xl flex flex-col text-[#F6EFE6]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#28150E] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#CCA04E]" />
              <h2 className="text-lg font-serif font-bold text-[#F6EFE6]">
                Your Tasting Bag
              </h2>
              <span className="text-xs text-[#9E8675] tabular-nums">
                ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#9E8675] hover:text-[#F6EFE6] rounded-lg transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Order Completed View */}
          {orderComplete ? (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-center flex flex-col justify-center">
              <div className="w-16 h-16 bg-[#25150D] text-[#E2BC6A] border border-[#CCA04E] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#CCA04E] font-semibold">
                  Allocation Confirmed
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#F6EFE6]">
                  Order #{orderComplete.orderNumber}
                </h3>
                <p className="text-xs text-[#9E8675]">
                  Preparing climate-controlled thermal shipment for {orderComplete.recipient}.
                </p>
              </div>

              {/* Receipt Summary Box */}
              <div className="bg-[#120805] border border-[#2D180F] rounded-xl p-4 text-left text-xs space-y-2.5">
                <div className="flex justify-between text-[#DAC5B0]">
                  <span>Tracking Number:</span>
                  <span className="font-mono text-[#E2BC6A]">{orderComplete.trackingCode}</span>
                </div>
                <div className="flex justify-between text-[#9E8675]">
                  <span>Delivery Address:</span>
                  <span className="text-[#DAC5B0] text-right">{orderComplete.address}</span>
                </div>
                <div className="flex justify-between text-[#9E8675]">
                  <span>Payment Method:</span>
                  <span className="text-[#DAC5B0] uppercase">{orderComplete.paymentMethod}</span>
                </div>
                {orderComplete.giftMessage && (
                  <div className="pt-2 border-t border-[#26140D] text-[11px] text-[#C4B3A3] italic">
                    Gift Note: "{orderComplete.giftMessage}"
                  </div>
                )}
                <div className="pt-2 border-t border-[#26140D] flex justify-between font-serif text-sm font-bold text-[#CCA04E]">
                  <span>Total Paid:</span>
                  <span className="tabular-nums">{formatPrice(orderComplete.total)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setOrderComplete(null);
                  setIsCheckingOut(false);
                  onClose();
                }}
                className="w-full py-3 bg-[#CCA04E] hover:bg-[#E2BC6A] text-[#120B08] font-semibold text-xs uppercase tracking-widest rounded-lg transition-colors"
              >
                Return to Collections
              </button>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Module View */
            <form onSubmit={handleProcessOrder} className="flex-1 overflow-y-auto p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#28150D]">
                <h3 className="text-base font-serif font-bold text-[#F6EFE6]">
                  Thermal Insulated Checkout
                </h3>
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="text-xs text-[#CCA04E] hover:underline"
                >
                  ← Back to Bag
                </button>
              </div>

              {/* Delivery Details */}
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-wider text-[#9E8675] font-semibold block">
                  Delivery Destination
                </span>

                <div>
                  <label className="text-[11px] text-[#A68F7F] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#180E09] border border-[#2E1A11] rounded px-3 py-2 text-xs text-[#F6EFE6] focus:outline-none focus:border-[#CCA04E]"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#A68F7F] block mb-1">Email for Tracking Notice</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#180E09] border border-[#2E1A11] rounded px-3 py-2 text-xs text-[#F6EFE6] focus:outline-none focus:border-[#CCA04E]"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#A68F7F] block mb-1">Shipping Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#180E09] border border-[#2E1A11] rounded px-3 py-2 text-xs text-[#F6EFE6] focus:outline-none focus:border-[#CCA04E]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-[#A68F7F] block mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#180E09] border border-[#2E1A11] rounded px-3 py-2 text-xs text-[#F6EFE6] focus:outline-none focus:border-[#CCA04E]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#A68F7F] block mb-1">Postal Code</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full bg-[#180E09] border border-[#2E1A11] rounded px-3 py-2 text-xs text-[#F6EFE6] focus:outline-none focus:border-[#CCA04E]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector (Including COD per retail guideline) */}
              <div className="pt-3 border-t border-[#26140D] space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#9E8675] font-semibold block">
                  Payment Method
                </span>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`py-2 px-1 rounded border transition-colors ${
                      formData.paymentMethod === 'card'
                        ? 'bg-[#2E1A11] border-[#CCA04E] text-[#CCA04E]'
                        : 'bg-[#180E09] border-[#2A160F] text-[#9E8675]'
                    }`}
                  >
                    Credit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'applepay' })}
                    className={`py-2 px-1 rounded border transition-colors ${
                      formData.paymentMethod === 'applepay'
                        ? 'bg-[#2E1A11] border-[#CCA04E] text-[#CCA04E]'
                        : 'bg-[#180E09] border-[#2A160F] text-[#9E8675]'
                    }`}
                  >
                    Apple Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className={`py-2 px-1 rounded border transition-colors ${
                      formData.paymentMethod === 'cod'
                        ? 'bg-[#2E1A11] border-[#CCA04E] text-[#CCA04E]'
                        : 'bg-[#180E09] border-[#2A160F] text-[#9E8675]'
                    }`}
                  >
                    COD (Cash)
                  </button>
                </div>
              </div>

              {/* Order Final Summary */}
              <div className="pt-3 border-t border-[#26140D] space-y-1.5 text-xs text-[#9E8675]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-[#DAC5B0] tabular-nums">{formatPrice(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount ({discountPercent}%):</span>
                    <span className="tabular-nums">-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Thermal Cold-Chain Shipping:</span>
                  <span className="text-[#DAC5B0] tabular-nums">
                    {shippingCost === 0 ? 'COMPLIMENTARY' : formatPrice(shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-serif font-bold text-[#E2BC6A] pt-2 border-t border-[#28150D]">
                  <span>Total Amount:</span>
                  <span className="tabular-nums">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#CCA04E] hover:bg-[#E2BC6A] text-[#120B08] font-semibold text-xs uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Authorize & Place Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            /* Cart Items List View */
            <div className="flex-1 overflow-y-auto flex flex-col justify-between">
              
              <div className="p-6 space-y-6">
                {/* Free Thermal Shipping Progress Bar */}
                <div className="bg-[#180E09] border border-[#2D180F] p-3.5 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#9E8675] flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-[#CCA04E]" />
                      <span>Insulated Shipping</span>
                    </span>
                    <span className="text-[#E2BC6A] font-medium">
                      {amountToFreeShipping === 0
                        ? 'Unlocked!'
                        : `${formatPrice(amountToFreeShipping)} away`}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#25150D] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#CCA04E] to-[#E2BC6A] transition-all duration-300"
                      style={{ width: `${progressToFreeShipping}%` }}
                    />
                  </div>
                </div>

                {/* Items List */}
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <ShoppingBag className="w-10 h-10 text-[#44271B] mx-auto" />
                    <p className="text-sm font-serif text-[#DAC5B0]">Your tasting bag is empty.</p>
                    <p className="text-xs text-[#7A6455]">
                      Discover single-origin bars or assemble a bespoke tasting flight.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#190E09] border border-[#28150D] p-3.5 rounded-xl flex items-start justify-between gap-3"
                      >
                        <div className="flex-1 space-y-1">
                          <div className="text-[10px] text-[#CCA04E] uppercase tracking-wider font-medium">
                            {item.subCategory || 'Confectionery'}
                          </div>
                          <div className="text-xs font-serif font-bold text-[#F6EFE6]">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-[#9E8675] line-clamp-1">
                            {item.shortDesc}
                          </div>
                          <div className="text-xs font-serif font-semibold text-[#CCA04E] tabular-nums pt-1">
                            {formatPrice(item.price)}
                          </div>
                        </div>

                        {/* Quantity Stepper & Remove */}
                        <div className="flex flex-col items-end justify-between h-full space-y-3">
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[#7A6455] hover:text-red-400 p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex items-center border border-[#341F14] bg-[#120805] rounded">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-[#DAC5B0] hover:text-white"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-medium tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-[#DAC5B0] hover:text-white"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Gift Option */}
                {cartItems.length > 0 && (
                  <div className="pt-2 border-t border-[#26140D] space-y-2">
                    <label className="flex items-center gap-2 text-xs text-[#DAC5B0] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={giftNoteEnabled}
                        onChange={(e) => setGiftNoteEnabled(e.target.checked)}
                        className="rounded border-[#3E2316] bg-[#190E09] text-[#CCA04E] focus:ring-0"
                      />
                      <Gift className="w-3.5 h-3.5 text-[#CCA04E]" />
                      <span>Complimentary handwritten calligraphic card</span>
                    </label>

                    {giftNoteEnabled && (
                      <textarea
                        rows={2}
                        value={giftMessage}
                        onChange={(e) => setGiftMessage(e.target.value)}
                        placeholder="Write your personal gift message to be inscribed in gold ink..."
                        className="w-full bg-[#180E09] border border-[#2E1A11] rounded p-2 text-xs text-[#F6EFE6] focus:outline-none focus:border-[#CCA04E] placeholder:text-[#6E5546]"
                      />
                    )}
                  </div>
                )}

                {/* Promo Code Input */}
                {cartItems.length > 0 && (
                  <form onSubmit={handleApplyPromo} className="pt-2 border-t border-[#26140D] space-y-1.5">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Promo Code (e.g. GRANDCRU10)"
                        className="flex-1 bg-[#180E09] border border-[#2E1A11] rounded px-3 py-1.5 text-xs text-[#F6EFE6] focus:outline-none focus:border-[#CCA04E] placeholder:text-[#6E5546]"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-[#25150D] hover:bg-[#341F14] text-xs uppercase tracking-wider text-[#CCA04E] rounded border border-[#3E2316]"
                      >
                        Apply
                      </button>
                    </div>
                    {promoError && <p className="text-[11px] text-red-400">{promoError}</p>}
                    {promoSuccess && <p className="text-[11px] text-emerald-400">{promoSuccess}</p>}
                  </form>
                )}
              </div>

              {/* Bag Summary Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 bg-[#130B07] border-t border-[#26140D] space-y-4">
                  <div className="space-y-1.5 text-xs text-[#9E8675]">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="text-[#DAC5B0] tabular-nums">{formatPrice(subtotal)}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Discount ({discountPercent}%):</span>
                        <span className="tabular-nums">-{formatPrice(discountAmount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Insulated Shipping:</span>
                      <span className="text-[#DAC5B0] tabular-nums">
                        {shippingCost === 0 ? 'Complimentary' : formatPrice(shippingCost)}
                      </span>
                    </div>
                    <div className="flex justify-between text-base font-serif font-bold text-[#E2BC6A] pt-2 border-t border-[#26140D]">
                      <span>Estimated Total:</span>
                      <span className="tabular-nums">{formatPrice(finalTotal)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full py-3.5 bg-[#CCA04E] hover:bg-[#E2BC6A] text-[#120B08] font-semibold text-xs uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#CCA04E]/10"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-[#7A6455]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#CCA04E]" />
                    <span>256-Bit SSL Encrypted & Temperature-Guaranteed</span>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
