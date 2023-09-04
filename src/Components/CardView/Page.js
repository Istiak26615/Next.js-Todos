import React from 'react';
import Card from "@/Components/Card/Page";

function Page(props) {
  

  return (
    <div className='m-4'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {props.allProducts.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Page;
