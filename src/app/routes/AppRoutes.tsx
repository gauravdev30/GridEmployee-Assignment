import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../../components/layout/MainLayout";
import ComingSoon from "../../components/common/ComingSoon";

const People = lazy(() => import("../../features/people/pages/People"));
const TimeManagement = lazy(() => import("../../features/timeManagement/pages/TimeManagement"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<People />} />
          <Route path="/people" element={<People />} />
          <Route path="/time-management" element={<TimeManagement />} />

          <Route path="/hiring" element={<ComingSoon title="Hiring" />} />
          <Route path="/report" element={<ComingSoon title="Report" />} />
          <Route path="/settings" element={<ComingSoon title="Settings" />} />
          <Route
            path="/reimbursement"
            element={<ComingSoon title="Reimbursement" />}
          />
        </Route>

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
