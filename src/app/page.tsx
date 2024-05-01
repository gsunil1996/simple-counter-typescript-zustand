import Counter1 from "@/components/Counter1"
import Counter2 from "@/components/Counter2"
import UsersList from "@/components/UsersList"


const Home = () => {
  console.log("checkvariabe", process.env.checkvariable)
  return (
    <div>
      <p>ENV: {process.env.checkvariable}</p>
      <hr />
      <Counter1 />
      <hr />
      <Counter2 />
      <hr />
      <UsersList />
    </div>
  )
}

export default Home