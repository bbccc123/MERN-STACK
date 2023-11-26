import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Website Utalik Shop của Hoàng',
  description: 'Những mặt hàng rẻ mà chất lượng',
  keywords: 'Trái cây tươi, rau củ quả',
};

export default Meta;
