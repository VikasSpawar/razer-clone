import HeaderBox from "../components/HeaderBox";
import HeaderBox2 from "../components/HeaderBox2";
import Notification from "../components/Notification";

const Homepage = () => {
  return (
    <div>
      <Notification
        msg={
          "For a limited time, all orders will enjoy free shipping to the United States. Shop Now >"
        }
      />

      <HeaderBox
        bgImage={
          "https://assets2.razerzone.com/images/pnx.assets/3661f743ad4c48f058861b104004fe01/razer-blade-14-homepage-desktop2x.webp"
        }
        heading={"New Razer blade 14"}
        desc={"Small size. big performance"}
        link={"Buy"}
      />

      <HeaderBox2 />
      <HeaderBox
        bgImage={
          "https://assets2.razerzone.com/images/pnx.assets/9d0a8ebf8b1a2e39e745cdefefe9b83d/st-patricks-day-homepage-desktop2x.webp"
        }
        heading={"Bleed green for the win"}
        desc={'st. patricks"s day exclusives'}
        link={"shop now"}
      />
     
    </div>
  );
};

export default Homepage;
