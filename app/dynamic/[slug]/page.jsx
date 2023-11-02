export default function Page({ params }) {
  console.log(params);
  return <div>{`Meu Post: ${params.slug}`}</div>;
}

export async function generateMetadata({ params }) {
  return {
    title: `Página de ${params.slug}`,
    description: `Página de ${params.slug}`,
  };
}

export async function generateStaticParams() {
  const req = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await req.json();
  return posts.map((post) => ({
    slug: String(post.id),
  }));
}
