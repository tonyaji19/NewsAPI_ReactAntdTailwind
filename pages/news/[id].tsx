/*eslint-disable */
import Link from "next/link";
const key = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${key}`
  );
  const data = await res.json();
  const { articles } = data;

  const paths = articles.map((ninja: any) => {
    return {
      params: { id: ninja.source.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey==${key}` + id
  );
  const data = await res.json();
  const { articles } = data;

  return {
    props: { ninja: articles },
  };
};

const companyDetail = ({ ninja }: { ninja: any }) => {
  return (
    <>
      <div className=" m-10">
        <Link
          href="/news/"
          className="border border-gray-300 p-2 rounded-sm bg-gray-200"
        >
          Back
        </Link>
        <div className="m-10 p-6 shadow-md w-fit rounded-md">
          <h3 className="font-bold mb-2 ">LIST COMPANY</h3>
          <p className="font-mono">{ninja.source.name}</p>
          <p>{}</p>
          <p>{}</p>
          <p>{}</p>
        </div>
      </div>
    </>
  );
};

export default companyDetail;
