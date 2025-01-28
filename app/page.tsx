import TaskItem from "@/components/TaskItem"
import Product from "@/components/product"

export default function Page(){

  const data = [
    {name: "bbq", price: 20},
    {name: "etag", price: 202},
    {name: "karne", price: 210},
  ]

  return(
    <div className="flex flex-col  w-full h-screen items-center justify-center">
      <h1 className="text-4xl">Home Page</h1>
      <div className="flex mt-5 gap-5" id="mydiv">
        
        <div>
          <h1 className="text-lg italic">Activities</h1>
          <TaskItem task="Lulu"></TaskItem>
        </div>
        
        <div>
          <h1 className="text-lg italic">Products</h1>
          {
            data.map((item, index) => {
              return (
                <Product key={index} name={item.name} price={item.price} />
              )
            })
          }
          <br />
          <Product name="Mango" price={20}></Product>
        </div>

      </div>
    </div>
  )
}