import { Users } from "@/components/Users";

async function fetUser() {
  const res = await fetch("https://reqres.in/api/users");
  const { data } = await res.json();
  console.log(data);
  return data;
}

async function HomePage() {
  const user = await fetUser();

  return <Users user={user} />;
}

export default HomePage;
