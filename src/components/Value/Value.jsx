import React from 'react';

export default function Value() {
  return (
    <section id="value" className="flex flex-col items-center justify-center gap-5 mt-25">
      <h2 className="section__subtitle">Our Values</h2>
      <h3 className="section__title">What we value most</h3>
      <div
        className="grid grid-cols-1 grid-rows-3 gap-5 mt-20
      xl:grid-cols-3 xl:grid-rows-1"
      >
        <div className="flex flex-col justify-center items-center gap-2 text-center shadow-value-card p-8 rounded-md">
          <div className="p-7">
            <img className="w-full" src="/images/values/values-1.png" alt="values-1" />
          </div>
          <h3 className="text-heading font-nunito text-2xl font-bold">Voluptatem voluptatum alias</h3>
          <p className="text-cuGray text-base font-roboto">Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center shadow-value-card p-8 rounded-md">
          <div className="p-7">
            <img className="w-full" src="/images/values/values-2.png" alt="values-1" />
          </div>
          <h3 className="text-heading font-nunito text-2xl font-bold">Voluptatem voluptatum alias</h3>
          <p className="text-cuGray text-base font-roboto">Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center shadow-value-card p-8 rounded-md">
          <div className="p-7">
            <img className="w-full" src="/images/values/values-3.png" alt="values-1" />
          </div>
          <h3 className="text-heading font-nunito text-2xl font-bold">Voluptatem voluptatum alias</h3>
          <p className="text-cuGray text-base font-roboto">Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
        </div>
      </div>
    </section>
  );
}
