import { AxiosResponse } from 'axios';
import styles from '../../styles/MoviePage.module.scss';
import Image from 'next/image';
import Layout from '../../layouts/Layout';
import movieImg from '../../images/pexels-tima-miroshnichenko-7991378.jpg';
import { Rating } from 'react-simple-star-rating';
import { fetchData } from '../../api/fetchData';
import { useState, useEffect, ReactElement } from 'react';
import Show from '../../models/Show';

const Movie: React.FC<{ data: Show }> = ({ data }) => {
  const [loading, setLoading] = useState(true);

  const createMarkup = () => {
    return { __html: data.summary };
  };

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  return (
    <Layout title={data.name} desc='Movies, TV series, Shows'>
      {loading && <h2>Loading...</h2>}
      <div className={`${styles.moviePage}`}>
        <div className={styles.bgImage}>
          <Image src={movieImg} layout='fill' objectFit='cover' alt='' />
        </div>
        <div className={styles.movie}>
          <div className={styles.image}>
            <Image
              src={data.image.original}
              alt=''
              width={400}
              height={600}
              objectFit='cover'
              placeholder='blur'
              blurDataURL={data.image.original}
              loading='lazy'
            />
          </div>
          <div className={styles.desc}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Rating
                allowFraction
                readonly
                size={18}
                initialValue={data.rating?.average / 2}
              />
              <span>{data.rating.average}</span>
            </div>

            <h1>{data.name}</h1>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
        </div>
        <div className={styles.scheduleAndStarring}>
          <div className={styles.schedule}>
            <h3>Show info</h3>
            <div className={styles.info}>
              <div className={styles.days}>
                <p>Schedule: </p>
                {data.schedule.days.map((day) => (
                  <p key={day}> {day}</p>
                ))}
              </div>
              <div className={styles.status}>
                <p>status: </p>
                <p>{data.status}</p>
              </div>
              <div className={styles.status}>
                <p>network: </p>
                <p>{data.network?.name}</p>
              </div>
              <div className={styles.genres}>
                <p>genres: </p>
                {data.genres.map((g) => (
                  <p key={g}> {g}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.schedule}>
            <h3>Show info</h3>
            <div className={styles.info}>
              <div className={styles.days}>
                <p>Schedule: </p>
                {data.schedule.days.map((day) => (
                  <p key={day}> {day}</p>
                ))}
              </div>
              <div className={styles.status}>
                <p>status: </p>
                <p>{data.status}</p>
              </div>
              <div className={styles.status}>
                <p>network: </p>
                <p>{data.network.name}</p>
              </div>
              <div className={styles.genres}>
                <p>genres: </p>
                {data.genres.map((g) => (
                  <p key={g}> {g}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Movie;

export const getServerSideProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { data }: AxiosResponse<Show> = await fetchData(
    `https://api.tvmaze.com/shows/${params.id}`
  );
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

// unit test
// cypruss
// jest
