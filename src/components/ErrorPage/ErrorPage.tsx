import React from 'react';

interface ErrorPageProps {
  code?: number;
  imagePath?: string;
  children: React.ReactNode;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ code = 404, imagePath, children }) => {
  // ✅ If imagePath is not provided, use a default
  const errorImage = imagePath || `/images/errors/${code}.svg`;

  return (
    <div className="error-page">
      <div className="item">
        <img src={errorImage} alt={`Error ${code}`} />
        <div className="text">
          <h1 className="error-page-code">{code}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
