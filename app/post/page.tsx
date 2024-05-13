export default function PostPage() {
  const postData = {
    title: "안녕하세요",
    content: "태스트용 글 입니다.",
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="bg-blue-500 text-white p-4">
        <div>{postData.title}</div>
      </div>
      <div className="p-4">{postData.content}</div>
    </div>
  );
}
