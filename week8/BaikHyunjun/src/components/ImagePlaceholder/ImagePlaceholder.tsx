import './ImagePlaceholder.css';

interface ImagePlaceholderProps {
  shape?: 'circle' | 'square';
  size?: number;
}

const ImagePlaceholder = ({ shape = 'square', size }: ImagePlaceholderProps) => {
  const className = `image-placeholder ${shape === 'circle' ? 'circle' : 'square'}`;
  const style = size ? { width: `${size}px`, height: `${size}px` } : undefined;

  return <div className={className} style={style}></div>;
};

export default ImagePlaceholder;

