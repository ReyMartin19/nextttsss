import TaskItem from "@/components/TaskItem"
import Product from "@/components/product"

export default function Page(){

  const data = [
    {name: "bbq", price: 20},
    {name: "etag", price: 202},
    {name: "karne", price: 210},
  ]

  return(
    <div className="flex flex-col w-full h-screen items-center justify-center" id="mydiv">
      <h1 className="text-4xl">Home Page</h1>
      <TaskItem task="Lulu"></TaskItem>
      <Product name="Mango" price={20}></Product>
      <Product name="Grape" price={21}></Product>
      <Product name="Banana" price={22}></Product>
      
      <br /> 

      {
        data.map((item, index) => {
          return (
            <Product key={index} name={item.name} price={item.price} />
          )
        })
      }

    </div>
  )
}