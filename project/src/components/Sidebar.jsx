import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setInput } from "../store/actions";
import $ from "jquery";

function Sidebar() {
  const dispatch = useDispatch();
  const [temp, setTemp] = useState("");

  function settingTemp(input) {
    const newInput = input.toLowerCase().split(" ").join("+");
    setTemp(newInput);
  }

  useEffect(() => {
    dispatch(setInput(temp));
  }, [dispatch, temp]);

  useEffect(() => {
    $(".act-btn").click(function () {
      $("nav ul .act-show").toggleClass("show");
      $("nav ul .first").toggleClass("rotate");
    });
    $(".act-int-btn").click(function () {
      $("nav ul ul .act-int-show").toggleClass("show2");
      $("nav ul ul .second").toggleClass("rotate");
    });
    $(".act-idn-btn").click(function () {
      $("nav ul ul .act-idn-show").toggleClass("show3");
      $("nav ul ul .third").toggleClass("rotate");
    });
    $(".pol-btn").click(function () {
      $("nav ul .pol-show").toggleClass("show4");
      $("nav ul .fourth").toggleClass("rotate");
    });
    $(".pol-int-btn").click(function () {
      $("nav ul .pol-int-show").toggleClass("show5");
      $("nav ul .fifth").toggleClass("rotate");
    });
    $(".pol-idn-btn").click(function () {
      $("nav ul .pol-idn-show").toggleClass("show6");
      $("nav ul .sixth").toggleClass("rotate");
    });
    $(".sport-btn").click(function () {
      $("nav ul .sport-show").toggleClass("show7");
      $("nav ul .seventh").toggleClass("rotate");
    });
    $(".sport-int-btn").click(function () {
      $("nav ul .sport-int-show").toggleClass("show8");
      $("nav ul .eight").toggleClass("rotate");
    });
    $(".sport-idn-btn").click(function () {
      $("nav ul .sport-idn-show").toggleClass("show9");
      $("nav ul .ninth").toggleClass("rotate");
    });
  }, []);

  return (
    <nav className="sidebar">
      <div className="text">Person Lists</div>
      <ul>
        <li>
          <a className="act-btn">
            Actor
            <span className="fas fa-caret-down first" />
          </a>
          <ul className="act-show">
            <li>
              <a className="act-int-btn">
                International
                <span className="fas fa-caret-down second" />
              </a>
            </li>
            <ul className="act-int-show">
              <li>
                <a onClick={() => settingTemp("Johnny Depp")}>Johnny Depp</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Robert Downey Jr")}>
                  Robert Downey Jr
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Chris Evans")}>Chris Evans</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Leonardo Di Caprio")}>
                  Leonardo Di Caprio
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Jeremy Renner")}>
                  Jeremy Renner
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Jeremy Clarkson")}>
                  Jeremy Clarkson
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("James May")}>James May</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Richard Hammond")}>
                  Richard Hammond
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Rowan Atkinson")}>
                  Rowan Atkinson
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Jackie Chan")}>Jackie Chan</a>
              </li>
            </ul>
            <li>
              <a className="act-idn-btn">
                Indonesia
                <span className="fas fa-caret-down third" />
              </a>
            </li>
            <ul className="act-idn-show">
              <li>
                <a onClick={() => settingTemp("Joe Taslim")}>Joe Taslim</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Deddy Corbuzier")}>
                  Deddy Corbuzier
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Vino Bastian")}>Vino Bastian</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Anjasmara")}>Anjasmara</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Chico Jericho")}>
                  Chico Jericho
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Ario Bayu")}>Ario Bayu</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Iko Uwais")}>Iko Uwais</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Rezky Aditya")}>Rezky Aditya</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Abimana Aryasatya")}>
                  Abimana Aryasatya
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Reza Rahadian")}>
                  Reza Rahadian
                </a>
              </li>
            </ul>
          </ul>
        </li>
        <li>
          <a className="pol-btn">
            Politicians
            <span className="fas fa-caret-down fourth" />
          </a>
          <ul className="pol-show">
            <li>
              <a className="pol-int-btn">
                International
                <span className="fas fa-caret-down fifth" />
              </a>
            </li>
            <ul className="pol-int-show">
              <li>
                <a onClick={() => settingTemp("Barack Obama")}>Barack Obama</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Angela Merkel")}>
                  Angela Merkel
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Hilary Clinton")}>
                  Hilary Clinton
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Joe Biden")}>Joe Biden</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Bernie Sanders")}>
                  Bernie Sanders
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Kamala Harris")}>
                  Kamala Harris
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Justin Trudeau")}>
                  Justin Trudeau
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Bill Clinton")}>Bill Clinton</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Donald Trump")}>Donald Trump</a>
              </li>
              <li>
                <a onClick={() => settingTemp("George W. Bush")}>
                  George W. Bush
                </a>
              </li>
            </ul>
            <li>
              <a className="pol-idn-btn">
                Indonesia
                <span className="fas fa-caret-down sixth" />
              </a>
            </li>
            <ul className="pol-idn-show">
              <li>
                <a onClick={() => settingTemp("Basyir Bachtiar")}>
                  Basyir Bachtiar
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Faisal Basri")}>Faisal Basri</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Novel Baswedan")}>
                  Novel Baswedan
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Mustofa Bisri")}>
                  Mustofa Bisri
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Omar Dhani")}>Omar Dhani</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Eros Djarot")}>Eros Djarot</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Rustam Effendi")}>
                  Rustam Effendi
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Ridwan Suwidi")}>
                  Ridwan Suwidi
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Ahmad Ridha Sabana")}>
                  Ahmad Ridha Sabana
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Sofia Joesoef")}>
                  Sofia Joesoef
                </a>
              </li>
            </ul>
          </ul>
        </li>
        <li>
          <a className="sport-btn">
            Sports
            <span className="fas fa-caret-down seventh" />
          </a>
          <ul className="sport-show">
            <li>
              <a className="sport-int-btn">
                International
                <span className="fas fa-caret-down eigth" />
              </a>
            </li>
            <ul className="sport-int-show">
              <li>
                <a onClick={() => settingTemp("Lionel Messi")}>Lionel Messi</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Cristiano Ronaldo")}>
                  Cristiano Ronaldo
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Andres Iniesta")}>
                  Andres Iniesta
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Xavi Hernandez")}>
                  Xavi Hernandez
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Frenkie De Jong")}>
                  Frenkie De Jong
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Luis Suarez")}>Luis Suarez</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Kevin De Bruyne")}>
                  Kevin De Bruyne
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Sergio Kun Aguero")}>
                  Sergio Kun Aguero
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Memphis Depay")}>
                  Memphis Depay
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Eric Garcia")}>Eric Garcia</a>
              </li>
            </ul>
            <li>
              <a className="sport-idn-btn">
                Indonesia
                <span className="fas fa-caret-down ninth" />
              </a>
            </li>
            <ul className="sport-idn-show">
              <li>
                <a onClick={() => settingTemp("Bambang Pamungkas")}>
                  Bambang Pamungkas
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Anthony Sinisuka Ginting")}>
                  Anthony Sinisuka Ginting
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Taufik Hidayat")}>
                  Taufik Hidayat
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Kevin Sanjaya")}>
                  Kevin Sanjaya
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Marcus Fernaldi Gideon")}>
                  Marcus Fernaldi Gideon
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Chris John")}>Chris John</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Lalu Zohri")}>Lalu Zohri</a>
              </li>
              <li>
                <a onClick={() => settingTemp("Lilyana Natsir")}>
                  Lilyana Natsir
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Tontowi Ahmad")}>
                  Tontowi Ahmad
                </a>
              </li>
              <li>
                <a onClick={() => settingTemp("Greysia Polii")}>
                  Greysia Polii
                </a>
              </li>
            </ul>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
