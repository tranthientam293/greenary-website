import React from "react";
import { Link } from "react-router-dom";
import { LeftArrow } from "../components/commons/Icons/Icons";

const ErrorView = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 container-custom py-20">
      <div className="basis-full md:basis-5/12 flex flex-col items-center md:items-start">
        <h1 className="lg:max-w-[90%] font-Quicksand font-bold text-black-01 text-4xl md:text-5xl lg:text-[56px] leading-none capitalize mb-6">
          we can not <span className="text-green-01">find this page</span>...
        </h1>
        <p className="text-base text-gray-01 mb-10">
          Probably, this page has been deleted.
        </p>
        <button className="candy-menu rounded ">
          <Link
            to="/"
            className="flex items-center gap-4 candy-menu font-Quicksand font-bold text-white rounded px-5 py-3 mx-auto sm:mx-0"
          >
            <LeftArrow />
            <span>Back to Home Page</span>
          </Link>
        </button>
      </div>
      <div className="md:w-[400px] lg:w-[500px] ">
        <img
          src="https://lh3.googleusercontent.com/gSUw18fttGIS77wpL-tgijHSvsMSbJEzeG4-ggN3oJDQuEJvNPNJGAcbiZBZm9bhKfq82rsq_T8NsrbkWGgnaPBxl24fs43ZmpHys0Rse0QLKXVmlMcWrsAmCFcTpaqJkDDzvk-JvvEQp88-xypmFgBqKInIcmNZI00T1WyFdBpLrCrOvxxAkNMQkayWBDNvQDaRV1eubU0MHSralmDfz-Rgsuc-HMiHg2YNPnrhW1FgBs_bd5M4lul5w7BbSsXXzg1yFwtgH-G6aq7y-pemfdKgAieSpLIU1dvwCzHr_c5zRwp9b_-oTcHnK6RE8Xqj09bm6ICBgdWUJDJ9ceuvShnTOeT8CbYbEaZhRBTtgLtYkJq66CPke6A_blKRZ4lkF6eFw5C8P7RNdyvtW9ltppn_aFhYVFgU8DqDGH--WRQJAJCUS5fZxvoLtCDaQSzWxO8Sgcz2cF6PD9O9EgGE_7LDm243kq06-ChvGmfuVcgQWHCFvoujt62H3PWRLbowkzdgm9_4hSV9FHThXw7-53iH_tgIuz0SmnT-T85XnzasuJAjh7w1XWH5dNcRUuTnBpT_W8my0pOtMn5px0sHB2MFG3g8ATecNsxd5JHuNKONV22O3wZ6zGE9swovBmNTkw95GdyxLns1XPcWZJr6LnE2GC5iMeOj2z0THiTs2lgR-RpjNtqELK_GjehwiJiZTpq1JJVcXPSnTrZ00TLQDRBBzVTQ6IMsgqLEo1An2uLRU1bYnl8IfnQ5YArg5aeC0elUDZgYLQ4QzW4MzJfI4h2a2NDPFRgo8v0kx8apE1Vgt2TsSNMRoEpxhKZpMd-gdHPyx2fUicvGrthKXVngXCrjwH4pe_7V8PmwpRqmUMc-HI50-GIJFvC8terpu-M1Jc5QXSEGCrcn45XuZw1yAOnKTzmuTHkCRdi39uphVFBJow=w500-h410-no?authuser=0"
          alt="Error Image"
          className="w-[90%] aspect-[5/4]"
        />
      </div>
    </div>
  );
};

export default ErrorView;
