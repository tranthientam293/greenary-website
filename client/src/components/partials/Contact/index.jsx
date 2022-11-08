import React from "react";
import { Form } from "react-router-dom";
import { Calling, Mail, Place } from "../../commons/Icons/Icons";

const contacts = [
  {
    title: "Office",
    phone: "+7(684) 555-0102",
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
    mail: "ckctm12@gmail.com",
  },
  {
    title: "Studio",
    phone: "+7(684) 555-0102",
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
    mail: "ckctm12@gmail.com",
  },
  {
    title: "Shop",
    phone: "+7(684) 555-0102",
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
    mail: "ckctm12@gmail.com",
  },
];
const helps = [
  {
    id: 1,
    title: "Visit Feedback",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo",
    color: "text-blue-01",
  },
  {
    id: 2,
    title: "Employer Services",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo",
    color: "text-pink-01",
  },
  {
    id: 3,
    title: "Billing Inquiries",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo",
    color: "text-orange-01",
  },
];

const ContactUs = () => {
  return (
    <section>
      <div className="container-custom ">
        <div className="mb-[100px]">
          <h2 className="text-center mb-10">
            Let us know <br></br>
            <span className="text-green-01">how we can help you</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-[30px]">
            {helps.map((item, index) => {
              return (
                <div className=" text-4xl" key={index}>
                  <h3 className={`${item.color} mb-3`}>0{item.id}.</h3>
                  <h3 className="mb-3">{item.title}</h3>
                  <p className="para-1 text-justfy">{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-[30px] mb-[100px]">
          {contacts.map((item, index) => {
            return (
              <div key={index}>
                <h3 className="font-Quicksand font-bold text-4xl text-black-01 mb-5">
                  {item.title}
                </h3>
                <p className="flex items-center gap-3 para-1 mb-3">
                  <span className="text-green-01">
                    <Calling />
                  </span>
                  {item.phone}
                </p>
                <p className="flex items-center gap-3 para-1 mb-3">
                  <span className="text-green-01">
                    <Place />
                  </span>
                  {item.address}
                </p>
                <p className="flex items-center gap-3 para-1 mb-3">
                  <span className="text-green-01">
                    <Mail />
                  </span>
                  {item.mail}
                </p>
              </div>
            );
          })}
        </div>

        <Form>
          <div className="mb-10">
            <h2>Drop Us a Line</h2>
            <p className="para-1">
              Your email address will not be published. Required fields are
              marked
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-[30px] text-gray-01">
            <input
              type="text"
              placeholder="Name"
              className="sm:col-span-2 border-[0.5px] border-green-01"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border-[0.5px] border-green-01"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-[0.5px] border-green-01"
            />
            <input
              type="text"
              placeholder="Write your comment"
              className="sm:col-span-2 border-[0.5px] border-green-01"
            />
            <div className="flex items-center gap-3 mb-[30px]">
              <input
                type="checkbox"
                id="contact-form-check"
                className="w-[16px] h-[16px] outline-none checked:bg-green-01"
              />
              <label htmlFor="contact-form-check">
                Save my name, email, and website in this browser
              </label>
            </div>
          </div>
          <button className="btn btn-primary">
            Send message
          </button>
        </Form>
      </div>
    </section>
  );
};

export default ContactUs;
