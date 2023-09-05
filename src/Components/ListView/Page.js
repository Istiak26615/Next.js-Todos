import React from 'react'
import ListProduct from "@/Components/ListProduct/Page";

function Page(props) {
  return (
    <div >
    {props.allProducts.map((item) => (
        <ListProduct item={item} key={item.id} />
      ))}
      </div>
  )
}

export default Page