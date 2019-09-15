import { fontSize } from '../tokens';

interface MQOptions {
  from?: number;
  to?: number;
}

const createQueryString = ({ from, to }: MQOptions) => {
  let query: string = '@media screen and ';

  if (from) {
    query += `(min-width: ${from / fontSize.base}rem)`;
  }

  if (from && to) {
    query += ' and ';
  }

  if (to) {
    query += `(max-width: ${to / fontSize.base}rem)`;
  }

  return query;
};

export const mq = (opts: MQOptions) => {
  const qs = createQueryString(opts);

  return (styles: string) => `${qs} {
    ${styles}
  }`;
};
