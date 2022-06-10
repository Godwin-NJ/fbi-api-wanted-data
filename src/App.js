// import MostWanted from "./Pages/MostWanted";
import BankRobbers from "./Pages/BankRobbers";
import CapitolViolence from "./Pages/CapitolViolence";
import Fugitives from "./Pages/Fugitives";
import KidnappingMissingPersons from "./Pages/KidnappingMissingPersons";
import MostWanted from "./Pages/MostWanted";
import ParentalKidnapping from "./Pages/PerentalKidnappings";
import TenMostWantedFugitives from "./Pages/TenMostWantedFugitives";
import Terrorism from "./Pages/Terrorism";
import Vicap from "./Pages/Vicap";
import NotFound from "./Pages/NotFound";
import SharedLayout from "./Pages/SharedLayout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MostWanted />} />
          <Route path="bank-robbers" element={<BankRobbers />} />
          <Route path="capitol-violence" element={<CapitolViolence />} />
          <Route path="fugitives" element={<Fugitives />} />
          <Route path="kidnapping" element={<KidnappingMissingPersons />} />
          {/* <Route path="most-wanted" element={<MostWanted />} /> */}
          <Route path="parental-kidnapping" element={<ParentalKidnapping />} />
          <Route
            path="ten-most-wanted-fugitives"
            element={<TenMostWantedFugitives />}
          />
          <Route path="terrorism" element={<Terrorism />} />
          <Route path="vicap" element={<Vicap />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
