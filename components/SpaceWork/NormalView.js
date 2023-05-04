import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'


const NormalView = ({cardData,projectID})=>{
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
 
  useEffect(() => {
    const fetchData = async () => {
      setData(cardData.cardDataProject);
      console.log(projectID )
    };
    fetchData();
  });

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
//   const currentData = [0,1,2,3,4];
  const currentData = data.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
////////////////////////////////



  return (
<div>
    <div className='disc-card-cont2 jst-SB'>

      {currentData.map((item) => (
            <div key={item.id} className='disc-card2 ' id='h-220'>
              <span className='card-text'>#1 by osama</span>
              <Link href={{ pathname: `/commentdesign2`, query: { id: projectID } }}>
                {/* {console.log(item)} */}
                <Image src={item.img} id='ds-img' alt="" width={400} height={400}/>
 
             
             
             </Link>
             <Rating   />
            </div>
      ))}

    </div>
    <div className="pagenumb">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageClick(index + 1)}>
            {index + 1}
          </button>
        ))}
    </div>
</div>
  );
}
export default NormalView;