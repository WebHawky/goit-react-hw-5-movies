import s from './Loader.module.css';

import { Vortex } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={s.loader}>
      <Vortex
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={[
          '#ffffff',
          '#f2317f',
          '#ffffff',
          '#f2317f',
          '#f2317f ',
          '#ffffff',
          '#f2317f',
        ]}
      />
    </div>
  );
}
