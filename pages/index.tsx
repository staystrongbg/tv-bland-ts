import type { GetStaticProps, NextPage } from 'next';
import Hero from '../components/Hero';
import ScheduleList from '../components/ScheduleList';
import Layout from '../layouts/Layout';
import { fetchData } from '../api/fetchData';
import Schedule from '../models/Schedule';
import Show from '../models/Show';
import { AxiosResponse } from 'axios';

const Home: NextPage<{ data: Schedule[] }> = ({ data }) => {
  return (
    <div className='container'>
      <Layout title='TV Bland | Welcome' desc='Tv Shows'>
        <Hero />
        <ScheduleList list={data} />
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data }: AxiosResponse<Show> = await fetchData(
    'https://api.tvmaze.com/schedule'
  );

  return {
    props: {
      data,
    },
  };
};

export default Home;
