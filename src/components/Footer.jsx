import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            width: 100%;
            background-color: #0078D7;
            color: #fff;
            text-align: center;
            padding: 20px 0;
            font-size: 14px;
            position: relative;
            bottom: 0;
          }

          /* Optional to keep it fixed at the bottom */
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
          }

          #root {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .footer {
            margin-top: auto;
          }
        `}
      </style>

      <footer className="footer">
        <p>&copy; 2025 EduJobMatch. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;