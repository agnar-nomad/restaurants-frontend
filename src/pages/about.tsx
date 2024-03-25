import { Link } from 'waku';

export default async function AboutPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1>{data.title}</h1>
      <h2>H2 Waku About</h2>
      <p>{data.body}</p>
      <Link to="/">Return home</Link>
    </div>
  );
};

const getData = async () => {
  const data = {
    title: 'About Waku',
    body: 'The minimal React framework',
  };

  return data;
};

export const getConfig = async () => {
    return {
      render: 'static',
    };
  };