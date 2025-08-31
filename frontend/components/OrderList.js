import React, { useState } from 'react'
import { useGetHistoryOfOrdersQuery } from '../state/pizzaApi'
export default function OrderList() {
  const {data: orders} = useGetHistoryOfOrdersQuery()
   const [activeSize, setActiveSize] = useState("All")


return (
  <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
       
        {
          orders?.map(order => {
            return (
              <li key={order.id}>
                <div>
               {`${order.customer} ordered a size ${order.size} with ${
                 order.toppings?.length === 0 ? 'no' : order.toppings?.length || 'no' } toppings`}
                </div>
              </li>
            )
          })
        }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L'].map(size => {
            const className = size === activeSize ? "button-filter active" : "button-filter"
            return <button
            data-testid={`filterBtn${size}`}
              className={className}
              key={size}  
              onClick={ () => setActiveSize(size)}
              >{size}</button>
              
          })
        }
      </div>
    </div>
  )
}
