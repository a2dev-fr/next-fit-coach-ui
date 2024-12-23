import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="py-6 border-t border-white/10 bg-background/60 backdrop-blur-lg">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Powered by</span>
            <Link
              to="https://a2-dev.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="82.39 77.15 175.22 95.7"
                className="h-6 w-auto transition-transform group-hover:scale-105"
              >
                <g fill="currentColor">
                  <g transform="translate(140 77.15242)">
                    <svg width="60" height="60.325153" viewBox="5.242 5 89.514999 89.999992">
                      <path d="M85.434 5H14.566c-5.149 0-9.324 4.175-9.324 9.324v71.352c0 5.148 4.175 9.324 9.324 9.324h70.867c5.149 0 9.324-4.176 9.324-9.324V14.324C94.758 9.175 90.583 5 85.434 5zM41.501 38.479l-.16.16-.184.132c-1.031.742-2.207 1.605-3.595 2.642-1.519 1.132-2.852 2.13-4.077 3.049-1.417 1.062-2.783 2.081-4.062 3.03-1.293.96-2.515 1.854-3.632 2.659l-.219.157-.244.113c-.926.426-1.86.643-2.78.643-1.448 0-2.739-.501-3.731-1.449-1.028-.979-1.573-2.269-1.573-3.727 0-1.292.421-2.52 1.25-3.649l.245-.333.331-.249c.857-.644 1.871-1.396 3.01-2.233 1.155-.851 2.302-1.707 3.406-2.546 1.205-.914 2.374-1.788 3.474-2.598.016-.012.031-.022.046-.034-1.079-.83-2.211-1.711-3.364-2.618-1.185-.93-2.346-1.833-3.449-2.683-1.134-.872-2.09-1.627-2.837-2.244l-.215-.177-.176-.216c-.971-1.193-1.463-2.501-1.463-3.887 0-1.432.527-2.716 1.526-3.715.999-.998 2.306-1.526 3.778-1.526.736 0 1.527.166 2.417.508l.229.087.21.127c.298.179.717.479 1.789 1.367.719.596 1.605 1.295 2.641 2.081 1.077.819 2.23 1.721 3.43 2.679 1.164.932 2.281 1.804 3.321 2.593 1.092.832 2.029 1.56 2.786 2.164.748.6 1.229.983 1.441 1.153 1.882 1.487 2.278 3.235 2.278 4.439.001 1.028-.32 2.573-1.847 4.101zM77.405 61.27c-.808.888-1.924 1.512-3.32 1.862l-.335.085H50.133l-.127-.012c-2.116-.194-3.331-1.15-3.977-1.918-.871-1.039-1.331-2.25-1.331-3.504 0-1.364.524-2.634 1.517-3.671.974-1.018 2.318-1.607 3.998-1.752l.119-.011h23.626l.351.093c1.436.376 2.554 1.09 3.326 2.119.756 1.007 1.139 2.091 1.139 3.222-.001 1.294-.474 2.499-1.369 3.487z"/>         
                    </svg>
                  </g>
                  <path d="M103.37 144.477574h-7.72l-13.26 28.37h7.3l2.79-5.84h14.34l2.89 5.84H117l-13.63-28.37Zm-7.7 15.85 3.85-8.02 3.97 8.02h-7.82Zm54.19-7.58.22-.32q1.82-2.47.44-5.22-1.4-2.73-4.47-2.73h-24.26v9.17h6.68v-2.49h13l-19.68 16.81v4.88H151v-6.68h-16.83l15.69-13.42Zm28.51-1.59v15.01h-15.01v-15.01h15.01Zm6.68 16.69v-18.37q0-2.07-1.45-3.55-1.48-1.45-3.55-1.45h-23.37v28.37h23.37q2.07 0 3.55-1.48 1.45-1.45 1.45-3.52Zm4.79-12.53v6.68h28.37v-6.68h-28.37Zm0-10.84v6.68h28.37v-6.68h-28.37Zm0 21.69v6.68h28.37v-6.68h-28.37Zm67.77-21.69h-7.3l-9.83 20.51-10.19-20.51H223l13.63 28.37h7.72l13.26-28.37Z"/>
                </g>
              </svg>
            </Link>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} NextFit Coach. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}