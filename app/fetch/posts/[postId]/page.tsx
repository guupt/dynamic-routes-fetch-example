type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

type Comment = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

async function getPost(postId: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!res.ok) {
    throw new Error("Falha ao carregar Todos!");
  }
  const data = await res.json();
  return data;
}

async function getComments(postId: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  if (!res.ok) {
    throw new Error("Falha ao carregar Todos!");
  }
  const data = await res.json();
  return data;
}

export default async function Post({
  params: { postId },
}: {
  params: { postId: string };
}) {
  //   const post = getPost(postId);
  //   const comments = getComments(postId);

  const [post, comments] = await Promise.all([
    getPost(postId),
    getComments(postId),
  ]);

  return (
    <div>
      Post: {post?.title}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>---{comment.body}</li>
        ))}
      </ul>
    </div>
  );
}
