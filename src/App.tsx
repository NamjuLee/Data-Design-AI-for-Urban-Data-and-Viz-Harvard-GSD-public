import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./App/component/Layout";

import LectureWorkshop from "./App/page/LectureWorkshop";
import Lab from "./App/page/Lab";



import { LabPrimary , LabSecondary } from "./App/component/LabMenu";

import './App.css';
import { LAB_LINKS, LinkInfo } from "./PART_10_Web_Visualization_Digital_Mapping_Analysis";

const App = () => {
  const lab = 'lab';

  // LinkInfo -> Route
  const getLinkRoutes = (link: LinkInfo) => {
    if (link === 'divider') {
      return null;
    }

    const { id, env, subLinks } = link;
    const moreRoutes = subLinks?.flatMap(sublink => {
      const subRoute = getLinkRoutes(sublink)
      return subRoute ? [subRoute] : []
    });

    return (
      <Route key={id} path={id} element={moreRoutes ? <LabSecondary title={id} subLinks={subLinks} /> : <LabPrimary id={id} env={env} />} >
        {moreRoutes}
      </Route>
    );
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LectureWorkshop />} />

          <Route path="lab" element={<Lab />}>
            {LAB_LINKS.map(link => getLinkRoutes(link))}
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
