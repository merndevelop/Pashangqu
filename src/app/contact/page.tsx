"use client";
import { useRef, useState } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { contactUsData } from "./../../../public/Data/data";
import "./contact.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const contactUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = { name, email, message };

    if (
      userData.name.length === 0 ||
      userData.email.length === 0 ||
      userData.message.length === 0

    ) {
      toast.error("Please complete the form!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (!form.current) return;

      emailjs
        .sendForm(
          "service_2jtsodr",
          'template_igvld15',
          form.current, {
          publicKey: '1fDJ9s29871eAaXGU',
        }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Data sent!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Failed to send message.");
          }
        );
    }
  };

  const em = "business@pashangquinternationaltrade.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(em);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-grid-white/[0.02]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <section>
        <div className="wrapper-C1 text-center mt-20 md:mt-20 text-3xl md:text-5xl font-bold bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          Contact Us
        </div>
      </section>

      <section>
        <div className="wrapper-C2">
          <div className="container mx-auto">
            <div className="main-form">
              <div className="form-left">
                <h4>Contact Information</h4>
                <p className="mt-2">
                  Enhancing the product promotions with efficient communication
                  strategies.
                </p>
                <div className="contact-info-container">
                  {contactUsData?.map((data, index) => (
                    <div key={index} className="contact-info-sec">
                      <div className="contact-icon">
                        <Image
                          src={data.icon}
                          alt="icon"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="contact-text">
                        {data.title === "mail" ? (
                          <button onClick={copyToClipboard} className="mt-2">
                            {copied ? "Copied!" : "Copy Email"}
                          </button>
                        ) : (
                          <p>{data.title}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-right">
                <h4>Our Solutions:</h4>
                <form onSubmit={contactUser} ref={form}>
                  <div className="label-group">
                    <label>
                      <p className="label-txt">Your Name</p>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Name"
                        value={name}
                        required
                      />
                      <div className="line-box">
                        <div className="line" />
                      </div>
                    </label>
                    <label>
                      <p className="label-txt">Your Email</p>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="input"
                        placeholder="example@gmail.com"
                        required
                      />
                      <div className="line-box">
                        <div className="line" />
                      </div>
                    </label>
                  </div>
                  <label>
                    <p className="label-txt">Message</p>
                    <input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      type="text"
                      className="input"
                      placeholder="Write here..."
                    />
                    <div className="line-box">
                      <div className="line" />
                    </div>
                  </label>
                  <button type="submit" className="btn1 custombtn1">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Page;
