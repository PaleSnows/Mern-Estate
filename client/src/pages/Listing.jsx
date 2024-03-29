import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Swiper,SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper'
import {Navigation} from 'swiper/modules'
import "swiper/css/bundle";

const Listing = () => {
  SwiperCore.use([Navigation])
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(false);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setLoading(false);
          setError(true);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);
  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong</p>
      )}
      {listing && !loading && !error && 
      <div>
      <Swiper navigation>
        {listing.imageUrls.map((url)=>(
          <SwiperSlide key={url}>
            <div className="h-[550px] object-contain " style={{background:`url(${url}) no-repeat center` ,backgroundSize:'cover'}}></div>
          </SwiperSlide>
        ))}

      </Swiper>
      </div>}
    </main>
  );
};

export default Listing;
