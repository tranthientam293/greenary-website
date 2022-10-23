import React from "react";
import { Link } from "react-router-dom";
import bestEmployee from "./img/person-01.png";
import teamMate01 from "./img/person-02.png";
import teamMate02 from "./img/person-03.png";
import teamMate03 from "./img/person-04.png";
import teamMate04 from "./img/person-05.png";
import teamMate05 from "./img/person-06.png";
import teamMate06 from "./img/person-07.png";
import teamMate07 from "./img/person-08.png";
import teamMate08 from "./img/person-09.png";

const teamMates = [
  { image: teamMate01, background: "green-02" },
  { image: teamMate02, background: "orange-02" },
  { image: teamMate03, background: "blue-02" },
  { image: teamMate04, background: "pink-02" },
  { image: teamMate05, background: "pink-02" },
  { image: teamMate06, background: "blue-02" },
  { image: teamMate07, background: "orange-02" },
  { image: teamMate08, background: "green-02" },
];

const BestEmployee = () => {
  return (
    <section>
      <div className="container-custom">
        <div className="my-[100px]">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-[30px]">
            <div className="basis-3/4 lg:basis-2/5">
              <h2 className="font-Quicksand font-bold text-heading-2 text-black-01 leading-normal mb-6">
                Best Employee of{" "}
                <span className="text-green-01">the Month</span>
              </h2>
              <p className="text-gray-01 mb-3 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <p className="text-gray-01 mb-3 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate id est laborum.
              </p>
              <p className="text-gray-01 mb-3 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate id est laborum.
              </p>

              <Link className="block w-fit font-Quicksand font-bold text-white candy-menu rounded px-5 py-3 mt-3">
                Learn More
              </Link>
            </div>

            <div className="bg-blue-02">
              <img src={bestEmployee} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMates = () => {
  return (
    <section>
      <div className="mx-auto max-w-[500px] text-center mb-10">
        <h2 className="font-Quicksand font-bold text-heading-2 leading-normal text-black-01 mb-6">
          Our <span className="text-green-01">Team</span>
        </h2>
        <p className="text-gray-01">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] container-custom ">
        {teamMates.map((teamMate, index) => {
          return (
            <div className={`bg-${teamMate.background} rounded-lg`} key={index}>
              <img src={teamMate.image} alt="" className="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { TeamMates };

export default BestEmployee;
