import React from 'react'
import ListProduct from "@/Components/ListProduct/Page";

function Page(props) {
  return (
    <>
    {props.allProducts.map((item) => (
        <ListProduct item={item} key={item.id} />
      ))}
      </>
  )
}

export default Page