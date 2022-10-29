import Link from 'next/link';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';
import styles from '../styles/MovieCard.module.scss';
import Schedule from '../models/Schedule';

const MovieCard: React.FC<{ data: Schedule }> = ({ data }) => {
  return (
    <div className={styles.showCard}>
      <Link href={`/shows/${data.show.id}`}>
        <a>
          <Image
            src={data?.show?.image.medium}
            width={240}
            height={340}
            alt={data.name}
            placeholder='blur'
            blurDataURL={data?.show?.image.medium}
            loading='lazy'
          />
        </a>
      </Link>
      <div className={styles.desc}>
        <div className={styles.rate}>
          <Rating
            readonly
            allowFraction
            size={18}
            initialValue={data?.show?.rating.average / 2}
          />
          <span className={styles.showRating}>{data?.show?.rating.average}</span>
        </div>
        <h3>
          {data?.name?.length > 40 ? data.name.slice(0, 39) + '...' : data.name}
        </h3>
        <p>Runtime: {data.runtime} min</p>
        <p>Airdate: {data.airtime}</p>
      </div>
    </div>
  );
};

export default MovieCard;
