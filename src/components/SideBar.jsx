import React from 'react';
import image from '../assets/images/logo-DH.png';
import { Routes, Route, Link } from 'react-router-dom';
import GenresInDb from './GenresInDb';
import ContentWrapper from './ContentWrapper';
import CardTotals from './CardTotals';
import Table from './Table';
import ContentRowMovies from './ContentRowMovies';

const SideBar = () => {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Digital House" />
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - DH movies</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Actions</div>

        {/* <!-- Nav Item - Pages --> */}
        <li className="nav-item">
          <Link to={'/genres'} className={'nav-link collapsed'}>
            <i className="fas fa-fw fa-folder"></i>
            <span>Genres</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <Link to={'/charts'} className="nav-link">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
          <Link to={'table'} className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      <Routes>
        <Route path="genres" element={<GenresInDb />} />
        <Route path="charts" element={<ContentRowMovies />} />
        <Route path="table" element={<Table />} />
        <Route path="/" element={<ContentWrapper />} />
      </Routes>
    </>
  );
};

export default SideBar;
