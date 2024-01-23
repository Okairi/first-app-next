async function loadUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data;
}

async function PageUsers({ params }) {
  const { data } = await loadUser(params.id);

  console.log("user", data);
  return (
    <div className="bg-slate-400 p-10 rounded-md ">
      <img src={data.avatar} alt="avatar" className="m-auto my-4" />
      <h3 className="text-3xl font-bold">
        {data.id} {data.first_name} {data.last_name}
      </h3>
      <p>Email : {data.email}</p>
    </div>
  );
}

export default PageUsers;
