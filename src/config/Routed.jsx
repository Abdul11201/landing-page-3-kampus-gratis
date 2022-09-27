import React from "react";
import { Route, Routes } from "react-router-dom";



// import page
import LandingPage3 from "../pages/LandingPage3";
import DetailJurusan from "../pages/silabus/DetailJurusan";
import DetailMatakuliah from "../pages/silabus/DetailMatakuliah";
import HomeSilabus from "../pages/silabus/HomeSilabus";
import KontrakKrs from "../pages/silabus/KontrakKrs";


const Routed = () => {
  return (
    <Routes>
      <Route path="/" exact element={<LandingPage3 />} />
      <Route path="/silabus" element={<HomeSilabus />} />
      <Route path="/detail-jurusan" element={<DetailJurusan />} />
      <Route path="/detail-matakuliah" element={<DetailMatakuliah />} />
      <Route path="/kontrak-krs" element={<KontrakKrs />} />
    </Routes>
  );
};

export default Routed;
