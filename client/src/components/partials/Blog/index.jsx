import React from "react";
import { BlogCard } from "../../commons/Card/Card";
import SectionHeader from "../../commons/SectionHeader/SectionHeader";

import thumbnail01 from "/blog-01.png";
import thumbnail02 from "/blog-02.png";
import thumbnail03 from "/blog-03.png";
import thumbnail04 from "/blog-04.png";
import thumbnail05 from "/blog-05.png";
import thumbnail06 from "/blog-06.png";
import thumbnail07 from "/blog-07.png";
import thumbnail08 from "/blog-08.png";
import thumbnail09 from "/blog-09.png";
import thumbnail10 from "/blog-10.png";
import thumbnail11 from "/blog-11.png";
import thumbnail12 from "/blog-12.png";

import avatar01 from "/User-1.png";
import avatar02 from "/User-2.png";
import avatar03 from "/User-3.png";
import avatar04 from "/User-4.png";

const Blog = () => {
  const articles = [
    {
      title: "We Always Ready to Give You Best Delivery Support",
      thumbnail: thumbnail01,
      date: "June 22, 2022",
      author: "Darlene Robertson",
      avatar: avatar01,
      summary:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Sticky Ginger Rice Bowls with Pickled Veg",
      thumbnail: thumbnail02,
      date: "June 22, 2022",
      author: "Devon Lane",
      avatar: avatar04,
      summary:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Global Ecommerce System Marked as a History",
      thumbnail: thumbnail03,
      date: "June 22, 2022",
      author: "Esther Howard",
      avatar: avatar03,
      summary:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "We Are One of the Best Into the Global World",
      thumbnail: thumbnail04,
      date: "June 22, 2022",
      author: "Theresa Webb",
      avatar: avatar02,
      summary:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Click and Make the Payment in the Most Easiest Way",
      thumbnail: thumbnail05,
      date: "June 22, 2022",
      author: "Floyd Miles",
      avatar: avatar03,
      summary:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },

    {
      title: "Customer Satisfaction Is Our First Priority Every Time",
      thumbnail: thumbnail06,
      date: "June 22, 2022",
      author: "Bessie Cooper",
      avatar: avatar04,
      summary:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Click and Make the Payment in the Most Easiest Way",
      thumbnail: thumbnail07,
      date: "June 22, 2022",
      author: "Courtney Henry",
      avatar: avatar01,
      summary:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Global Ecommerce System Marked as a History",
      thumbnail: thumbnail08,
      date: "June 22, 2022",
      author: "Kristin Watson",
      avatar: avatar04,
      summary:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Sticky Ginger Rice Bowls with Pickled Veg",
      thumbnail: thumbnail09,
      date: "June 22, 2022",
      author: "Guy Hawkins",
      avatar: avatar03,
      summary:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Our Shop Is One Off the Best Shop in Your Area",
      thumbnail: thumbnail10,
      date: "June 22, 2022",
      author: "Albert Flores",
      avatar: avatar01,
      summary:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Customer Satisfaction Is Our First Priority Every Time",
      thumbnail: thumbnail11,
      date: "June 22, 2022",
      author: "Annette Black",
      avatar: avatar04,
      summary:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "We Always Ready to Give You Best Delivery Support",
      thumbnail: thumbnail12,
      date: "June 22, 2022",
      author: "Theresa Webb",
      avatar: avatar01,
      summary:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
  return (
    <section>
      <div className="container-custom mt-[100px]">
        <SectionHeader text={"Recipe Articles"} />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
          {articles.map((item, index) => {
            return <BlogCard {...item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
