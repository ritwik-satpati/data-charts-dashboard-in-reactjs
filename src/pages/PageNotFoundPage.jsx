// Layout
import DashboardLayout from "../layout/DashboardLayout.jsx";
// Component
import PageNotFound from "../components/PageNotFound/PageNotFound.jsx";

const PageNotFoundPage = () => {
  return (
    <>
      <DashboardLayout>
        <div className="space-y-4 bg-white">
          <div className="h-[500px] w-full flex items-center justify-center rounded-sm border shadow-sm shadow-black">
            <PageNotFound />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default PageNotFoundPage;
