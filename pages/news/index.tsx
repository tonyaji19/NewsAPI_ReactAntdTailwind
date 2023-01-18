import Link from "next/link";
const key = process.env.NEXT_PUBLIC_NEWS_API_KEY;
export const getStaticProps = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${key}`
  );
  const data = await res.json();
  const { articles } = data;

  return {
    props: { datas: articles },
  };
};

const listnewnews = ({ datas }: { datas: any }) => {
  return (
    <div className="m-10">
      <h3>List Of News</h3>
      {datas &&
        datas.map &&
        datas.map((news: any) => (
          <Link href={"/news/" + news.source.id} key={news.source.id}>
            <ul className="m-4  ">
              <li className="mb-4 p-4 hover:shadow-md bg-gray-50 border hover:border-l-4 hover:border-l-blue-700">
                {news.title}
              </li>
            </ul>
          </Link>
        ))}
    </div>
  );
};

export default listnewnews;
