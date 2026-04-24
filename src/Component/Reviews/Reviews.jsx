import React from "react";

const reviews = [
  {
    name: "Kasun Perera",
    date: "March 10, 2026",
    review: "⭐️⭐️⭐️⭐️⭐️ Quality eka nam supiri. Highly recommend!"
  },
    {
      name: "kalhara",
    date: "April 05, 2026",
    review: "⭐️⭐️⭐️⭐️ Good quality clothing at an affordable price. Delivery was quick and smooth."
  },
 
  {
    name: "Nimal Silva",
    date: "March 12, 2026",
    review: "⭐️⭐️⭐️⭐️⭐️ Material ekanam maru. Worth the price."
  },
  {
    name: "Shehan Fernando",
    date: "March 15, 2026",
    review: "⭐️⭐️⭐️⭐️ Design eka lassanai 😍 Delivery eka tikak late una but product eka nam patta."
  },
  {
     name: "Dasun Nimsara",
    date: "March 20, 2026",
    review: "⭐️⭐️⭐️⭐️⭐️ Highly recommend."
  },
  {
      name: "pasindu pumal",
    date: "April 03, 2026",
    review: "⭐️⭐️⭐️⭐️ ඇත්තටම සතුටුයි මේ purchase එක ගැන ❤️ නැවත order කරනවා."
  },
    {
      name: "senura perera",
    date: "April 09, 2026",
    review: "⭐️⭐️⭐️⭐️ The material feels premium and the fit is just right. Will definitely order again."
  },
  {
      name: "Hasintha",
    date: "February 18, 2026",
    review: "⭐️⭐️⭐️⭐️ hodhatama thiyenawa. bayanathuwa recommend karanna puluwan."
  },
  {
      name: "Ayesh Perera",
    date: "March 22, 2026",
    review: "⭐️⭐️⭐️⭐️⭐️ suppri👍👍👍"
  },

   {
      name: "Hirusha Rajapaksha",
    date: "January 13, 2026",
    review: "⭐️⭐️⭐️⭐️ recommend කරනවා."
  },
   {
      name: "Dilshan Madhuranga",
    date: "March 29, 2026",
    review: "⭐️⭐️⭐️⭐️⭐️ Highly recommend."
  },
  {
      name: "Anuradha Wirakon",
    date: "February 10, 2026",
    review: "⭐️⭐️⭐️⭐️ Design එක stylish, everyday use එකට perfect. Highly recommend."
  },

   {
      name: "Himal Samaravikrama",
    date: "April 20, 2026",
    review: "⭐️⭐️⭐️⭐️⭐️ Nice designs and good customer service. Overall a great shopping experience."
  },
   {
      name: "savindu perera",
    date: "January 26, 2026",
    review: "⭐️⭐️⭐️⭐️ Quality එක super"
  },

    {
      name: "kavindu Anupama",
    date: "April 18, 2026",
    review: "⭐️⭐️⭐️ recommend."
  },

  {
      name: "kavindu Anupama",
    date: "February 06, 2026",
    review: "⭐️⭐️⭐️⭐️ Good quality clothes. Delivery එකත් ඉක්මනින් ලැබුණා. Satisfied!"
  },
  {
      name: "Hasitha Madhushan",
    date: "February 24, 2026",
    review: "⭐️⭐️⭐️⭐️ gaththa ganata watinawa.👍👍👍"
  },

   {
      name: "Dhanitha",
    date: "January 04, 2026",
    review: "⭐️⭐️⭐️⭐️ Good value for money. Comfortable and stylish at the same time"
  },

   {
      name: "Vinuja Bandara",
    date: "January 19, 2026",
    review: "⭐️⭐️⭐️ Highly recommend."
  },
 
];

const Reviews = () => {
  return (
    <div style={{ fontSize: "17px", color: "gray" }}>
      {reviews.map((item, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <strong style={{ color: "black" }}>
            {item.name}
          </strong>{" "}
          <span style={{ fontSize: "14px", color: "#999" }}>
            • {item.date}
          </span>

          <p style={{ margin: "5px 0" }}>{item.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;