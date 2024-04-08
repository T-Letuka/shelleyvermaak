import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="mt-4 border rounded-lg flex justify-center items-center py-[4rem] ">
        <div className="w-full h-50 px-[6rem] flex flex-col justify-center items-center">
          <h2 className="font-bold text-[20px] text-black">
            More infomation about Booking an Appointment
          </h2>

          <Link href="/articles/Booking.pdf">
            <button
              className="bg-[#03045E] text-white font-serif border rounded-md 
                px-3 py-2 mt-3mb-2 hover:bg-[#fca311] hover:text-black"
            >
              Open ME!
            </button>
          </Link>

          <h3 className="font-bold text-[20px] text-black mt-4">
            Financial Infomation regarding Booking an Appointment
          </h3>

          <Link href="/articles/Finance.pdf">
            <button
              className="bg-[#03045E] text-white font-serif border rounded-md 
                px-3 py-2 mt-2 hover:bg-[#fca311] hover:text-black"
            >
              Open ME!
            </button>
          </Link>
          <h2 className="font-bold text-[18px] text-black text-center mt-2">
            Feel free to Whatsapp Me <br />
            <Link
              href="https://api.whatsapp.com/send?phone=27838780861"
              className="  hover:text-cyan-600 hover:underline"
            >
              083 878 0861
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
