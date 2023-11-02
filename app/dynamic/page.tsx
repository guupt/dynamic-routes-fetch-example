type Posts = {
  userId: number;
  id: number;
  body: string;
  title: string;
  completed: boolean;
};

async function getData(): Promise<Posts[]> {
  const req = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = req.json();
  return data;
}

export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <ul>
        {posts.map((posts: Posts) => (
          <li key={posts.id}>{posts.title}</li>
        ))}
      </ul>
    </>
  );
}
