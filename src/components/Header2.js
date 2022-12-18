import React from "react";

function Header2() {

  

  return (
    <div className="nav_container">
      <input type="radio" name="slide" id="menu_btn" />
      <input type="radio" name="slide" id="cancel_btn" />
      <ul className="nav_links">
        <label htmlFor="cancel_btn" className="button cancel_btn">
          <i className="fas fa-times" />
        </label>
        <li className="navLink">
          <a href="#" className="">
            SKIN
          </a>
          <input type="checkbox" id="showDrop" />
          <label htmlFor="showDrop">
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <a href="#">Face Wash</a>
            </li>
            <li>
              <a href="#">Face Wash Refill</a>
            </li>
            <li>
              <a href="#">Face Scrub</a>
            </li>
            <li>
              <a href="#">Face Serum</a>
            </li>
            <li>
              <a href="#">Face Cream</a>
            </li>
            <li>
              <a href="#">Face Mask</a>
            </li>
            <li>
              <a href="#">Moisturizer</a>
            </li>
            <li>
              <a href="#">Sunscreen</a>
            </li>
            <li>
              <a href="#">Toner</a>
            </li>
            <li>
              <a href="#">Makeup Remover</a>
            </li>
            <li>
              <a href="#">Sheet Face Mask</a>
            </li>
            <li>
              <a href="#">Under Eye Cream</a>
            </li>
          </ul>
        </li>
        <li className="navLink">
          <a href="#">HAIR</a>
          <input type="checkbox" id="hair" />
          <label htmlFor="hair">
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <a href="#">Hair Oil</a>
            </li>
            <li>
              <a href="#">Hair Combo Kit</a>
            </li>
            <li>
              <a href="#">Shampoo</a>
            </li>
            <li>
              <a href="#">Conditioner</a>
            </li>
            <li>
              <a href="#">Hair Mask</a>
            </li>
            <li>
              <a href="#">Hair Serum</a>
            </li>
            <li>
              <a href="#">Scalp Brush</a>
            </li>
            <li>
              <a href="#">Hair Spray</a>
            </li>
          </ul>
        </li>
        <li className="navLink">
          <a href="#">BATH &amp; BODY</a>
          <input type="checkbox" id="bath" />
          <label htmlFor="bath">
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <a href="#">Body Wash</a>
            </li>
            <li>
              <a href="#">Bathing Bar</a>
            </li>
            <li>
              <a href="#">Hand Cream</a>
            </li>
            <li>
              <a href="#">Hand Wash</a>
            </li>
            <li>
              <a href="#">Body Lotion</a>
            </li>
            <li>
              <a href="#">Body Butter</a>
            </li>
            <li>
              <a href="#">Massage oil</a>
            </li>
          </ul>
        </li>
        <li className="navLink megaLink">
          <a href="#">MOTHER AND CHILD</a>
          <input type="checkbox" id="mother_child" />
          <label htmlFor="mother_child">
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <div className="motherChild_dropdown dropMenu">
            <div className="kids">
              <ul className="">
                <li>
                  <a href="#">Kids Sun Screen</a>
                </li>
                <li>
                  <a href="#">kids Face Wash</a>
                </li>
                <li>
                  <a href="#">3 in 1 Kids</a>
                </li>
                <li>
                  <a href="#">Kids Body Lotion</a>
                </li>
              </ul>
            </div>
            <div className="mother">
              <ul className="">
                <li>
                  <a href="#">Mother</a>
                </li>
                <li>
                  <a href="#">Massage oil</a>
                </li>
                <li>
                  <a href="#">Stretch care</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="navLink">
          <a href="#">WELLNESS</a>
          <input type="checkbox" id="wellness" />
          <label htmlFor="wellness">
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <a href="#">Hair Vanish</a>
            </li>
            <li>
              <a href="#">Essential Oil</a>
            </li>
            <li>
              <a href="#">WOmwn Hygiene</a>
            </li>
          </ul>
        </li>
        <li className="navLink">
          <a href="#">NUTRITION</a>
          <input type="checkbox" id="nutrition" />
          <label htmlFor="nutrition">
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <a href="#">Omega Fatty Acids</a>
            </li>
            <li>
              <a href="#">Immunity Care</a>
            </li>
            <li>
              <a href="#">Protiens</a>
            </li>
            <li>
              <a href="#">Multivitamins</a>
            </li>
            <li>
              <a href="#">Weight Management</a>
            </li>
            <li>
              <a href="#">Detox</a>
            </li>
            <li>
              <a href="#">Gut Health</a>
            </li>
            <li>
              <a href="#">Men's Health</a>
            </li>
            <li>
              <a href="#">Antioxidants</a>
            </li>
            <li>
              <a href="#">Men's Health</a>
            </li>
            <li>
              <a href="#">Vitamins</a>
            </li>
            <li>
              <a href="#">Hair and Skin nutrition</a>
            </li>
            <li>
              <a href="#">specialty Supplements</a>
            </li>
          </ul>
        </li>
        <li className="navLink">
          <a href="#">COMBOS</a>
          <input type="checkbox" id="combo" />
          <label htmlFor="combo">
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <a href="#">Body Wash</a>
            </li>
            <li>
              <a href="#">Bathing Bar</a>
            </li>
            <li>
              <a href="#">Hand Cream</a>
            </li>
            <li>
              <a href="#">Body Scrub</a>
            </li>
            <li>
              <a href="#">Hand Wash</a>
            </li>
            <li>
              <a href="#">Body Lotion</a>
            </li>
            <li>
              <a href="#">Body Butter</a>
            </li>
            <li>
              <a href="#">Massage oil</a>
            </li>
          </ul>
        </li>
        <li className="navLink">
          <a href="#">COLLECTIONS</a>
          <input type="checkbox" id="collections" />
          <label htmlFor="collections">
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <a href="#">Apple cider vinegar</a>
            </li>
            <li>
              <a href="#">Aloe Vera</a>
            </li>
            <li>
              <a href="#">Amazon Rainforest</a>
            </li>
            <li>
              <a href="#">Amla</a>
            </li>
            <li>
              <a href="#">Activated Charcoal</a>
            </li>
            <li>
              <a href="#">Argan Oil</a>
            </li>
            <li>
              <a href="#">Coconut</a>
            </li>
            <li>
              <a href="#">Hemp</a>
            </li>
            <li>
              <a href="#">Himalayan Rose Care</a>
            </li>
            <li>
              <a href="#">Macadamia</a>
            </li>
            <li>
              <a href="#">Men's Care</a>
            </li>
            <li>
              <a href="#">Niacinamide</a>
            </li>
            <li>
              <a href="#">Rice Water</a>
            </li>
            <li>
              <a href="#">Red Onion Black Seed Oil</a>
            </li>
            <li>
              <a href="#">Retinol</a>
            </li>
            <li>
              <a href="#">Sugarcane</a>
            </li>
            <li>
              <a href="#">Super Hero</a>
            </li>
            <li>
              <a href="#">Ubtan Range</a>
            </li>
            <li>
              <a href="#">Vitamin c</a>
            </li>
          </ul>
        </li>
        <li className="navLink">
          <a href="#">FRAGRANCE</a>
          <input type="checkbox" id="fragrance" />
          <label htmlFor="fragrance">
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <a href="#">Apple cider vinegar</a>
            </li>
            <li>
              <a href="#">Aloe Vera</a>
            </li>
            <li>
              <a href="#">Amazon Rainforest</a>
            </li>
          </ul>
        </li>
        <ul className="icons_track_div mobile_track_div">
          <li className="icons_div">
            <a href="#"></a>
            <a href="#">
              <i className="social_media_icons fa-brands fa-facebook " />
            </a>
            <a href="#"></a>
            <a href="#">
              <i className="social_media_icons fa-brands fa-instagram" />
            </a>
            <a href="#"></a>
            <a href="#">
              <i className="social_media_icons fa-brands fa-youtube" />
            </a>
            <a href="#"></a>
            <a href="#">
              <i className="social_media_icons fa-brands fa-twitter" />
            </a>
          </li>
          <ul className="track mobile_track">
            <a href="#">
              <img
                className="social_media_icons"
                src="./assets/wow_chat_icon_637c3b76-9360-4c06-9c1e-77861a856316.jpg"
                alt=""
              />
              Track Order/Chat
            </a>
          </ul>
        </ul>
      </ul>
      <label
        htmlFor="menu_btn"
        className="button menu_btn"
        onclick="menu_btn_clicked()"
      >
        <i className="fas fa-bars" />
      </label>
    </div>
  );
}

export default Header2;
