"use client";
import logo from "..//../img/imglogo/857146c7-5f6d-4fb4-a909-59adeece8659.png";
import { useEffect, useState } from "react";


export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 90 ? 90 : p + Math.random() * 12));
    }, 200);

    const finish = () => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => {
        setLoaded(true);
        setTimeout(() => setHidden(true), 750);
      }, 300);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", finish);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`ah-preloader ${loaded ? "loaded" : ""}`}>
      <div className="ah-preloader-inner">
        <div className="ah-ring-wrap">
          <div className="ah-ring-track" />
          <div className="ah-ring-spin" />

        
         
          <img
            src={logo}
            alt="AH logo"
            className="ah-logo-img"
          />
        </div>

        <div className="ah-name">ALIK</div>
        <div className="ah-surname">HAKOBYAN</div>

        <div className="ah-bar-track">
          <div className="ah-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <style>{`
        .ah-preloader {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000000;
          transition: opacity 0.7s ease, visibility 0.7s ease;
          opacity: 1;
          visibility: visible;
        }

        .ah-preloader.loaded {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .ah-preloader-inner {
          text-align: center;
        }

        .ah-ring-wrap {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 24px;
        }

        .ah-ring-track {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(168, 85, 247, 0.15);
        }

        .ah-ring-spin {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2.5px solid transparent;
          border-top-color: #a855f7;
          border-right-color: #c084fc;
          box-shadow: 0 0 18px 2px rgba(168, 85, 247, 0.6);
          animation: ah-spin 1.1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        }

        .ah-letters {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .ah-letters .a {
          color: #e8e8e8;
          text-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
        }

        .ah-letters .h {
          color: #a855f7;
          text-shadow: 0 0 14px rgba(168, 85, 247, 0.9);
        }

        .ah-logo-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        @keyframes ah-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .ah-name {
          font-size: 14px;
          letter-spacing: 6px;
          color: #e8e8e8;
          margin-bottom: 8px;
        }

        .ah-surname {
          font-size: 14px;
          letter-spacing: 6px;
          color: #a855f7;
          text-shadow: 0 0 12px rgba(168, 85, 247, 0.7);
        }

        .ah-bar-track {
          width: 140px;
          height: 2px;
          background: rgba(168, 85, 247, 0.15);
          border-radius: 2px;
          margin: 22px auto 0;
          overflow: hidden;
        }

        .ah-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #a855f7, #e8e8e8);
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.8);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
      `}</style>
    </div>
  );
}
