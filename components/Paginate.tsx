type Props = {
  pageNum: number[];
  paginate: (page: number) => void;
};

const Paginate: React.FC<Props> = ({ pageNum, paginate }) => {
  const PAGINATION_STYLE = {
    width: '100%',
    gap: '5px',
  };

  const LI_STYLE = {
    cursor: 'pointer',
    border: '1px solid #1e1e1e',
    boxShadow: '1px 1px rgba(0,0,0,0.6)',
    width: '30px',
    height: '30px',
    color: '#f5f5f5',
    background: '#101010',
    borderRadius: '3px',
  };

  return (
    <ul className={`${PAGINATION_STYLE} flex-center`} style={PAGINATION_STYLE}>
      {pageNum.map((page, idx) => (
        <li
          style={LI_STYLE}
          key={idx}
          className='flex-center'
          onClick={() => paginate(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Paginate;
