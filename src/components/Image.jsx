import { IKImage} from "imagekitio-react";
import PropTypes from 'prop-types';

const Image = ({ src, className, w, h, alt }) => {
  return (

      <IKImage 
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        path={src} 
        // src="https://ik.imagekit.io/isyergc6t/blog%20logo.png"
        className={className}
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
        alt={alt}
        width={w}
        height={h}
        />
    
  );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    w: PropTypes.number,
    h: PropTypes.number,
    alt: PropTypes.string,
  };

export default Image;
