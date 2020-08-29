import React from 'react';
import { Link } from "react-router-dom";
import ArrowIcon  from "../asset/arrow.svg";

const Home: React.FC = () => {
  return (
        <div className="flex justify-center items-center hv-100 bg-blue color-white">
            <p className="font-16">Acesse <code className="bg-gray rounded-lg p-4">/users</code> para visualizar a listagem de usuarios{'\u2728'}</p> 
            <Link to="/users" className="link">
              Listagem de Usuario <img width={22} height={22} src={ArrowIcon} alt="left arrow" />
            </Link> 
        </div>
  );
}

export default Home;