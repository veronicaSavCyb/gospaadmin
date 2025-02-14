import React from 'react';
interface ErrorPageProps {
    code?: number;
    imagePath?: string;
    children: React.ReactNode;
}
declare const ErrorPage: React.FC<ErrorPageProps>;
export default ErrorPage;
