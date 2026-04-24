import React from 'react'

function PaymentInfo() {
  return (
    <div>

      <section className="my-8 text-center">
      <h3 className="text-lg font-semibold text-sky-700 mb-4">Payment Methods</h3>
      <div className="flex justify-center space-x-8 text-gray-600 italic">
        <p>✅ Cash on Delivery (COD)</p>
        <p>✅ Bank Transfer</p>
      </div>
      <p className="mt-2 text-sm text-gray-400">Available island-wide for all SKY fashion orders.</p>
    </section>

    </div>
  )
}

export default PaymentInfo